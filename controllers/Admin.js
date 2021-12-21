import Admin from '../models/adminModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const RegisterAdmin = async (req, res) => {
  const { name, email, password, confPassword } = req.body;
  if (password !== confPassword) return res.status(400).json({ msg: 'Password and confirm password not match!' });
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  try {
    await Admin.create({
      name: name,
      email: email,
      password: hashPassword,
    });
    res.json({ msg: 'Register succesfully!' });
  } catch (err) {
    console.log(err);
  }
};

export const LoginAdmin = async (req, res) => {
  try {
    const admin = await Admin.findAll({
      where: {
        email: req.body.email,
      },
    });
    const match = await bcrypt.compare(req.body.password, admin[0].password);
    if (!match) return res.status(400).json({ msg: 'Wrong password!' });

    const adminId = admin[0].id;
    const name = admin[0].name;
    const email = admin[0].email;
    const accessToken = jwt.sign({ adminId, name, email }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '20s',
    });
    const refreshToken = jwt.sign({ adminId, name, email }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: '1d',
    });
    await Admin.update(
      { refresh_token: refreshToken },
      {
        where: {
          id: adminId,
        },
      }
    );
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ accessToken });
  } catch (err) {
    res.status(404).json({ msg: 'Email not found!' });
  }
};

export const LogoutAdmin = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);

  const admin = await Admin.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });

  if (!admin[0]) {
    res.sendStatus(204);
  }

  const adminId = admin[0].id;

  await Admin.update(
    {
      refresh_token: null,
    },
    {
      where: {
        id: adminId,
      },
    }
  );

  res.clearCookie('refreshToken');
  return res.sendStatus(200);
};

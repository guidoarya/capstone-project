import Admin from '../models/adminModel.js';
import jwt from 'jsonwebtoken';

export const refreshTokenAdmin = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401);

    console.log(refreshToken);

    const admin = await Admin.findAll({
      where: {
        refresh_token: refreshToken,
      },
    });

    if (!admin[0]) {
      res.sendStatus(403);
    }

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
      if (err) return res.sendStatus(403);
      const adminId = admin[0].id;
      const name = admin[0].name;
      const email = admin[0].email;
      const accessToken = jwt.sign({ adminId, name, email }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '15s',
      });
      res.json({ accessToken });
    });
  } catch (err) {
    console.log(err);
  }
};

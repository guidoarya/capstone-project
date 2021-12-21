import Umkm from '../models/umkmModel.js';
import { Sequelize } from 'sequelize';

export const getCity = async (req, res) => {
  try {
    const city = await Umkm.findAll({
      attributes: [[Sequelize.fn('DISTINCT', Sequelize.col('kota')), 'kota']],
    });
    res.json(city);
  } catch (err) {
    console.log(err);
  }
};

export const getKategori = async (req, res) => {
  try {
    const kategori = await Umkm.findAll({
      attributes: [[Sequelize.fn('DISTINCT', Sequelize.col('kategori')), 'kategori']],
    });
    res.json(kategori);
  } catch (err) {
    console.log(err);
  }
};

export const getUmkm = async (req, res) => {
  try {
    const umkm = await Umkm.findAll({
      attributes: ['id', 'nama_umkm', 'lokasi', 'kota', 'deskripsi', 'kategori', 'nomor_hp', 'jasa_produk', 'gambar'],
    });
    res.json(umkm);
  } catch (err) {
    console.log(err);
  }
};

export const addUmkm = async (req, res) => {
  const { nama_umkm, lokasi, kota, deskripsi, kategori, nomor_hp, jasa_produk } = req.body;
  console.log(req.file.path);

  if (!req.file) {
    res.send('Input image tidak adaa!');
  }

  const gambar = req.protocol + '://' + req.get('host') + '/uploads/' + req.file.filename;

  console.log(req.body);

  try {
    await Umkm.create({
      nama_umkm: nama_umkm,
      lokasi: lokasi,
      kota: kota,
      deskripsi: deskripsi,
      kategori: kategori,
      nomor_hp: nomor_hp,
      jasa_produk: jasa_produk,
      gambar: gambar,
    });
    res.json({ msg: 'Umkm succesfully created!' });
  } catch (err) {
    console.log(err);
  }
};

export const getUmkmById = async (req, res) => {
  try {
    const umkm = await Umkm.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(umkm[0]);
  } catch (err) {
    console.log({ message: err.message });
  }
};

const Op = Sequelize.Op;
export const getUmkmSpecified = async (req, res) => {
  let name = req.params.name;
  let category = req.params.category;
  let city = req.params.city;

  console.log(name);

  try {
    const umkm = await Umkm.findAll({
      where: {
        nama_umkm: {
          [Op.like]: `%${name}%`,
        },
        kategori: {
          [Op.like]: `%${category}%`,
        },
        kota: {
          [Op.like]: `%${city}%`,
        },
      },
    });
    res.json(umkm);
  } catch (err) {
    console.log({ message: err.message });
  }
};

export const deleteUmkm = async (req, res) => {
  try {
    await Umkm.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: 'Umkm deleted',
    });
  } catch (err) {
    console.log({ message: err.message });
  }
};

export const updateUmkm = async (req, res) => {
  try {
    await Umkm.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: 'Umkm updated',
    });
  } catch (err) {
    console.log({ message: err.message });
  }
};

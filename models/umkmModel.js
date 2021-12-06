import { Sequelize } from 'sequelize';
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const Umkm = db.define(
  'tb_umkm',
  {
    nama_umkm: {
      type: DataTypes.STRING,
    },
    lokasi: {
      type: DataTypes.STRING,
    },
    kota: {
      type: DataTypes.STRING,
    },
    deskripsi: {
      type: DataTypes.STRING,
    },
    kategori: {
      type: DataTypes.STRING,
    },
    nomor_hp: {
      type: DataTypes.STRING,
    },
    jasa_produk: {
      type: DataTypes.STRING,
    },
    gambar: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Umkm;

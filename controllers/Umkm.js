import Umkm from '../models/umkmModel.js';
import multer from 'multer';
import path from 'path';
import express from 'express';

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

  const gambar = req.file.path;

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

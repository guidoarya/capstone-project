/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import './AddUmkm.css';

const AddUmkmAdmin = () => {
  const [nama_umkm, setNamaUmkm] = useState('');
  const [lokasi, setLokasi] = useState('');
  const [kota, setKota] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [kategori, setKategori] = useState('');
  const [nomor_hp, setNoHp] = useState('');
  const [jasa_produk, setJasaProduk] = useState('');
  const [gambar, setGambar] = useState('');

  const [expire, setExpire] = useState('');
  const [token, setToken] = useState('');
  const [name, setName] = useState('');

  const history = useHistory();

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:5000/tokenAdmin');
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
    } catch (err) {
      if (err.response) {
        history.push('/');
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get('http://localhost:5000/tokenAdmin');
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        setName(decoded.name);
        setExpire(decoded.exp);
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  const handleAddUmkm = async (e) => {
    e.preventDefault();
    var bodyFormData = new FormData();
    bodyFormData.append('nama_umkm', nama_umkm);
    bodyFormData.append('lokasi', lokasi);
    bodyFormData.append('kota', kota);
    bodyFormData.append('deskripsi', deskripsi);
    bodyFormData.append('kategori', kategori);
    bodyFormData.append('nomor_hp', nomor_hp);
    bodyFormData.append('jasa_produk', jasa_produk);
    bodyFormData.append('gambar', gambar);

    try {
      await axiosJWT({
        method: 'post',
        url: 'http://localhost:5000/umkm',
        data: bodyFormData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      history.push('/admin-dashboard');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className="addUMKM">
      <Row className="row-container">
        <Col md={6} xs={12} className="form-input-umkm">
          <Form onSubmit={handleAddUmkm} encType="multipart/form-data">
            <h1 className="mb-5">Ajukan UMKM</h1>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Nama UMKM</Form.Label>
                  <Form.Control name="nama_umkm" type="text" placeholder="Nama UMKM" defaultValue={nama_umkm} onChange={(e) => setNamaUmkm(e.target.value)} />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Lokasi</Form.Label>
                  <Form.Control name="lokasi" type="text" placeholder="Lokasi UMKM" defaultValue={lokasi} onChange={(e) => setLokasi(e.target.value)} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Kota</Form.Label>
                  <Form.Control name="kota" type="text" placeholder="Kota UMKM" defaultValue={kota} onChange={(e) => setKota(e.target.value)} />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Kategori UMKM</Form.Label>
                  <Form.Select required name="kategori" defaultValue={kategori} onChange={(e) => setKategori(e.target.value)}>
                    <option defaultValue="" disabled selected>
                      Pilih Kategori
                    </option>
                    <option defaultValue="Kuliner">Kuliner</option>
                    <option defaultValue="Otomotif">Otomotif</option>
                    <option defaultValue="Kesenian">Kesenian</option>
                    <option defaultValue="Agribisnis">Agribisnis</option>
                    <option defaultValue="Fashion">Fashion</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Nomor Hp</Form.Label>
                  <Form.Control name="nomor_hp" type="number" placeholder="Nomor Hp" defaultValue={nomor_hp} onChange={(e) => setNoHp(e.target.value)} />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Jasa Produk</Form.Label>
                  <Form.Control type="text" placeholder="Jasa/produk" defaultValue={jasa_produk} onChange={(e) => setJasaProduk(e.target.value)} />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Label>Deskripsi UMKM</Form.Label>
                  <Form.Control name="deskripsi" type="text" as="textarea" placeholder="Deskripsi UMKM" defaultValue={deskripsi} onChange={(e) => setDeskripsi(e.target.value)} />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Label>Gambar</Form.Label>
                  <Form.Control id="input-gambar" encType="multipart/form-data" name="gambar" type="file" placeholder="Gambar" onChange={(e) => setGambar(e.target.files[0])} />
                </Form.Group>
              </Col>
            </Row>
            <Button className="btn-submit-add-umkm" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6} className="d-flex align-item-end">
          <Image className="image-addUMKM" src="images/addUmkm.svg"></Image>
        </Col>
      </Row>
    </Container>
  );
};

export default AddUmkmAdmin;

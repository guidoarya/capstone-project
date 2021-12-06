import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

const DetailUmkm = (props) => {
  const [umkm, setUmkm] = useState([]);

  useEffect(() => {
    getUmkmById();
  }, []);

  const idUmkm = props.match.params.id;

  const getUmkmById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/detail/${idUmkm}`);
      setUmkm(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(umkm);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Kategori</th>
          <th>Deskripsi</th>
          <th>Lokasi</th>
          <th>Kota</th>
          <th>No Handphone</th>
        </tr>
      </thead>
      <tbody>
        <tr key={umkm.id}>
          <td>1</td>
          <td>{umkm.nama_umkm}</td>
          <td>{umkm.kategori}</td>
          <td>{umkm.deskripsi}</td>
          <td>{umkm.lokasi}</td>
          <td>{umkm.kota}</td>
          <td>{umkm.nomor_hp}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default DetailUmkm;

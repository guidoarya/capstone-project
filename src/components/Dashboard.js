import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useHistory } from 'react-router-dom';
import { Button, Table, Image } from 'react-bootstrap';

const Dashboard = () => {
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const [users, setUsers] = useState([]);
  const [umkm, setUmkm] = useState([]);

  const history = useHistory();

  useEffect(() => {
    refreshToken();
    getUsers();
    getUmkm();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:5000/token');
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
        const response = await axios.get('http://localhost:5000/token');
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

  const getUsers = async () => {
    const response = await axiosJWT.get('http://localhost:5000/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUsers(response.data);
  };

  const getUmkm = async () => {
    try {
      const response = await axiosJWT.get('http://localhost:5000/umkm');
      setUmkm(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const goToAddUmkm = () => {
    history.push('/form-umkm');
  };

  return (
    <div className="mt-4">
      <h1 className="title">Welcome back! {name}</h1>
      <Button className="mx-2 my-3" onClick={getUsers} variant="primary">
        Get Users
      </Button>

      <Button onClick={getUmkm} variant="primary">
        Get UMKM
      </Button>

      <Button className="mx-2" onClick={goToAddUmkm} variant="primary">
        AddUmkm
      </Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>No Handphone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.kota}</td>
              <td>{user.nohp}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama UMKM</th>
            <th>Lokasi</th>
            <th>Kota</th>
            <th>Deskripsi</th>
            <th>Gambar</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {umkm.map((umkms, index) => (
            <tr key={umkms.id}>
              <td>{index + 1}</td>
              <td>{umkms.nama_umkm}</td>
              <td>{umkms.lokasi}</td>
              <td>{umkms.kota}</td>
              <td>{umkms.deskripsi}</td>
              <td>
                <Image className="logo-img" src={`${umkms.gambar}`}></Image>
                {umkms.gambar}
              </td>
              <td>
                <a href={`/detail/${umkms.id}`}>Detail</a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;

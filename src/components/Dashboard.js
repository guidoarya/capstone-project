import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useHistory } from 'react-router-dom';
import { Button, Table, Image, Form, Row, Col } from 'react-bootstrap';
import './Dashboard.css';

const Dashboard = () => {
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const [users, setUsers] = useState([]);
  const [umkm, setUmkm] = useState([]);

  // Form Update Umkm
  const [nama_umkm, setNamaUmkm] = useState('');
  const [lokasi, setLokasi] = useState('');
  const [kota, setKota] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [kategori, setKategori] = useState('');
  const [nomor_hp, setNoHp] = useState('');
  const [jasa_produk, setJasaProduk] = useState('');

  // Form Update Umkm
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [userNoHp, setUserNoHp] = useState('');
  const [userKota, setUserKota] = useState('');

  const history = useHistory();

  useEffect(() => {
    refreshTokenAdmin();
    getUsers();
    getUmkm();
  }, []);

  const handleShow = async (id) => {
    const modalBox = document.getElementById(`modal-box${id}`);
    const cancelBtn = document.getElementById(`btn-cancel${id}`);
    console.log(modalBox);
    modalBox.style.display = 'block';

    cancelBtn.addEventListener('click', () => {
      modalBox.style.display = 'none';
    });
  };
  const handleShowUser = async (id) => {
    const modalBox = document.getElementById(`modal-boxUser${id}`);
    const cancelBtn = document.getElementById(`btn-cancelUser${id}`);
    modalBox.style.display = 'block';

    cancelBtn.addEventListener('click', () => {
      modalBox.style.display = 'none';
    });
  };

  const refreshTokenAdmin = async () => {
    try {
      const response = await axios.get('http://localhost:5000/tokenAdmin');
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
    } catch (err) {
      if (err.response) {
        history.push('/loginAdmin');
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
      const response = await axios.get('http://localhost:5000/umkm');
      setUmkm(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const LogoutAdmin = async () => {
    try {
      await axios.delete('http://localhost:5000/logoutAdmin');
      history.push('/loginAdmin');
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUmkm = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/umkm/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const updateUmkm = async (id) => {
    var bodyFormData = new FormData();
    if (nama_umkm !== '') {
      bodyFormData.append('nama_umkm', nama_umkm);
    }
    if (lokasi !== '') {
      bodyFormData.append('lokasi', lokasi);
    }
    if (kota !== '') {
      bodyFormData.append('kota', kota);
    }
    if (deskripsi !== '') {
      bodyFormData.append('deskripsi', deskripsi);
    }
    if (kategori !== '') {
      bodyFormData.append('kategori', kategori);
    }
    if (nomor_hp !== '') {
      bodyFormData.append('nomor_hp', nomor_hp);
    }
    if (nomor_hp !== '') {
      bodyFormData.append('jasa_produk', jasa_produk);
    }

    try {
      await axiosJWT({
        method: 'patch',
        url: `http://localhost:5000/umkm/${id}`,
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

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const updateUser = async (id) => {
    var bodyFormData = new FormData();
    if (userName !== '') {
      bodyFormData.append('name', userName);
    }
    if (email !== '') {
      bodyFormData.append('email', email);
    }
    if (userNoHp !== '') {
      bodyFormData.append('nohp', userNoHp);
    }
    if (userKota !== '') {
      bodyFormData.append('kota', userKota);
    }

    try {
      await axiosJWT({
        method: 'patch',
        url: `http://localhost:5000/users/${id}`,
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

  const goToAddUmkm = () => {
    history.push('/addUmkmAdmin');
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

      <Button className="mx-2" onClick={LogoutAdmin} variant="danger">
        Logout
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
              <td>
                <Button onClick={() => deleteUser(user.id)} variant="danger">
                  DELETE
                </Button>

                <Button variant="success" onClick={() => handleShowUser(user.id)}>
                  UPDATE
                </Button>

                <div className="modal-box" id={`modal-boxUser${user.id}`}>
                  <Form onSubmit={() => updateUser(user.id)} className="m-3" encType="multipart/form-data">
                    <h2>Update User</h2>
                    <Form.Group className="mb-3">
                      <Form.Label>{user.name}</Form.Label>
                      <Form.Control type="text" placeholder="Enter name" defaultValue={user.name} onChange={(e) => setUserName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" defaultValue={user.email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="number" placeholder="Enter your phone number" defaultValue={user.nohp} onChange={(e) => setUserNoHp(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" placeholder="Enter your city" defaultValue={user.kota} onChange={(e) => setUserKota(e.target.value)} />
                    </Form.Group>

                    <Button className="btn-submit-register" variant="primary" type="submit">
                      Update
                    </Button>

                    <Button className="btn-cancelUser" id={`btn-cancelUser${user.id}`} variant="danger">
                      Cancel
                    </Button>
                  </Form>
                </div>
              </td>
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
            <th>Action</th>
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
                <Image className="logo-img" src={umkms.gambar}></Image>
              </td>
              <td>
                <a href={`/detail/${umkms.id}`}>Detail</a>
              </td>
              <td>
                <Button onClick={() => deleteUmkm(umkms.id)} variant="danger">
                  DELETE
                </Button>
                <Button id="btn-update" variant="success" onClick={() => handleShow(umkms.id)}>
                  UPDATE
                </Button>
                <div className="modal-box" id={`modal-box${umkms.id}`}>
                  <Form onSubmit={() => updateUmkm(umkms.id)} encType="multipart/form-data" className="m-3">
                    <h2>Update Umkm</h2>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Nama UMKM</Form.Label>
                          <Form.Control name="nama_umkm" type="text" placeholder="Nama UMKM" defaultValue={umkms.nama_umkm} onChange={(e) => setNamaUmkm(e.target.value)} />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Lokasi</Form.Label>
                          <Form.Control name="lokasi" type="text" placeholder="Lokasi UMKM" defaultValue={umkms.lokasi} onChange={(e) => setLokasi(e.target.value)} />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Kota</Form.Label>
                          <Form.Control name="kota" type="text" placeholder="Kota UMKM" defaultValue={umkms.kota} onChange={(e) => setKota(e.target.value)} />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Kategori UMKM</Form.Label>
                          <Form.Control name="kategori" type="text" placeholder="Kategori UMKM" defaultValue={umkms.kategori} onChange={(e) => setKategori(e.target.value)} />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Nomor Hp</Form.Label>
                          <Form.Control name="nomor_hp" type="number" placeholder="Password" defaultValue={umkms.nomor_hp} onChange={(e) => setNoHp(e.target.value)} />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Jasa Produk</Form.Label>
                          <Form.Control type="text" placeholder="Jasa/produk" defaultValue={umkms.jasa_produk} onChange={(e) => setJasaProduk(e.target.value)} />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group className="mb-3">
                          <Form.Label>Deskripsi UMKM</Form.Label>
                          <Form.Control name="deskripsi" type="text" as="textarea" placeholder="Deskripsi UMKM" defaultValue={umkms.deskripsi} onChange={(e) => setDeskripsi(e.target.value)} />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Button className="btn-submit-add-umkm" variant="primary" type="submit">
                      Update
                    </Button>

                    <Button className="btn-cancel" id={`btn-cancel${umkms.id}`} variant="danger">
                      Cancel
                    </Button>
                  </Form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;

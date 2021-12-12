import React, { useState, useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './Home.css';
import Hero from '../Hero';
import CardUMKM from '../Card';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import '../Card.css';

const Home = () => {
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const [users, setUsers] = useState([]);
  const [umkm, setUmkm] = useState([]);

  const axiosJWT = axios.create();
  const history = useHistory();

  useEffect(() => {
    getUmkm();
  }, []);

  // axiosJWT.interceptors.request.use(
  //   async (config) => {
  //     const currentDate = new Date();
  //     if (expire * 1000 < currentDate.getTime()) {
  //       const response = await axios.get('http://localhost:5000/token');
  //       config.headers.Authorization = `Bearer ${response.data.accessToken}`;
  //       setToken(response.data.accessToken);
  //       const decoded = jwt_decode(response.data.accessToken);
  //       setName(decoded.name);
  //       setExpire(decoded.exp);
  //     }
  //     return config;
  //   },
  //   (err) => {
  //     return Promise.reject(err);
  //   }
  // );

  const getUmkm = async () => {
    try {
      const response = await axios.get('http://localhost:5000/umkm');
      setUmkm(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Hero />
        <div className="content-umkm">
          <div className="title-content">
            <h2>
              Lihat <span>UMKM</span>
            </h2>
          </div>
          <div className="item-content">
            {umkm.map((listUmkm, index) => (
              <div className="item-card" key={listUmkm.id}>
                <Card className="card">
                  <Card.Img variant="top" width="300" height="200" src={listUmkm.gambar} />
                  <Card.Body>
                    <Card.Title className="titleUMKM">{listUmkm.nama_umkm}</Card.Title>
                    <Card.Text maxLength="10">{listUmkm.deskripsi}</Card.Text>
                    <div className="d-flex justify-content-center">
                      <Link to={`/detail/${listUmkm.id}`}>
                        <Button variant="primary" className="btn-detail">
                          Detail
                        </Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
          <div className="detail-text">
            <Link className="btn-reg" to="/list-umkm">
              <p>Selengkapnya</p>
            </Link>
          </div>
        </div>

        <div className="review">
          <div className="title-review">
            <h3>Apa Kata Mereka ?</h3>
            <p>
              Beberapa Komentar dari pengguna
              <br></br>
              <span>BantuUMKM</span>
            </p>
          </div>
          <div className="item-review">
            {/* <Reviewer />
            <Reviewer />
            <Reviewer /> */}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;

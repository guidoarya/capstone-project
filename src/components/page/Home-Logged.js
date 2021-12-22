import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faThLarge, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Home.css';
import HeroLogged from '../Hero-Logged';
import axios from 'axios';
import '../Card.css';
import Reviewer from '../Reviewer';

const HomeLogged = () => {
  const [umkm, setUmkm] = useState([]);

  const axiosJWT = axios.create();

  useEffect(() => {
    getUmkm();
  }, []);

  const getUmkm = async () => {
    try {
      const response = await axiosJWT.get('http://localhost:5000/umkm');
      setUmkm(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <HeroLogged />
      </Container>
      <div className="content-umkm">
        <div className="title-content">
          <h2>
            Lihat <span>UMKM</span>
          </h2>
        </div>
        <Container>
          <div className="item-content">
            {umkm.slice(0, 4).map((listUmkm, index) => (
              <div className="item-card" key={listUmkm.id}>
                <Link to={`/detail-log/${listUmkm.id}`}>
                  <div className="card">
                    <div className="containers">
                      <img src={listUmkm.gambar} alt="" />
                    </div>
                    <div className="categories-card">
                      <FontAwesomeIcon icon={faThLarge} className="icon-map" /> {listUmkm.kategori}
                    </div>
                    <div className="details">
                      <h3>{listUmkm.nama_umkm}</h3>

                      <p className="deskripsi-card">{listUmkm.deskripsi}</p>
                      <div className="location-card">
                        <p>
                          <FontAwesomeIcon icon={faMapPin} className="icon-map" /> {listUmkm.kota}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </Container>
        <div className="detail-text d-flex">
          <Link className="btn-reg" to="/list-umkm-log">
            <div>
              <p>
                Selengkapnya <FontAwesomeIcon icon={faArrowRight} className="icon-map" />
              </p>
            </div>
          </Link>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#C2FFF9" fill-opacity="1" d="M0,288L1440,128L1440,320L0,320Z"></path>
      </svg>
      <div className="review">
        <div className="title-review">
          <h3>Apa Kata Mereka ?</h3>
          <p>
            Beberapa Komentar dari pengguna
            <br></br>
            <span>BantuUMKM</span>
          </p>
        </div>
        <Container>
          <div className="item-review">
            <Reviewer text="Menggunakan bantuUMKM membuat UMKM saya menjadi lebih dikenal masyarakat." name="Wilantara" />
            <Reviewer text="UMKM saya menjadi lebih banyak pembeli semenjak saya posting di bantuUMKM." name="Guido" />
            <Reviewer text="Websitenya menarik, membantu pada UMKM untuk mengenalkan UMKM agar dikenal luas." name="Arlan" />
          </div>
        </Container>
      </div>
    </>
  );
};

export default HomeLogged;

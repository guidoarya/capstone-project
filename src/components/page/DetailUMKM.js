import React, { useState, useEffect } from 'react';
import { Container, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faThLarge, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './DetailUMKM.css';
import NavBar from '../NavBar';

const DetailUMKM = (props) => {
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

  return (
    <>
      <NavBar />
      <Container>
        <div className="content-detail" key={umkm.id}>
          <div className="title-umkm">
            <h1>{umkm.nama_umkm}</h1>
            <h2>
              {umkm.lokasi}, {umkm.kota}
            </h2>
          </div>
          <h3 className="kategori-icon">
            <FontAwesomeIcon icon={faThLarge} className="icon-map" /> {umkm.kategori}
          </h3>
          <div className="wrap-content-detail">
            <div className="image-detail">
              <Image className="image-detail-umkm" src={umkm.gambar}></Image>
            </div>
            <div className="info-umkm">
              <div className="umkm-title">
                <div className="info-icon">
                  <h4 className="d-flex">
                    <div className="icon">
                      {' '}
                      <FontAwesomeIcon icon={faMapPin} className="icon-map" />{' '}
                    </div>
                    <div className="icon-text">{umkm.kota}</div>
                  </h4>
                  <h4 className="d-flex">
                    <div className="icon">
                      <FontAwesomeIcon icon={faPhoneAlt} className="icon-map" />{' '}
                    </div>
                    <div className="icon-text">{umkm.nomor_hp}</div>
                  </h4>
                </div>
                <div className="desc">
                  <h3>Deskripsi</h3>
                  <p>{umkm.deskripsi}f</p>
                  <h3>Item Dijual</h3>
                  <p>{umkm.jasa_produk}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default DetailUMKM;

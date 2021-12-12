import React, { useState, useEffect } from 'react';
import { Container, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faThLarge } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './DetailUMKM.css';

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
      <Container>
        <div className="content-detail" key={umkm.id}>
          <div className="title-umkm">
            <h1>{umkm.nama_umkm}</h1>
            <h2>
              {umkm.lokasi}, {umkm.kota}
            </h2>
          </div>
          <div className="wrap-content-detail">
            <div className="image-detail">
              <h3>
                <FontAwesomeIcon icon={faThLarge} className="icon-map" /> {umkm.kategori}
              </h3>
              <Image className="image-detail-umkm" src={umkm.gambar}></Image>
            </div>
            <div className="info-umkm">
              <div className="umkm-title">
                <h4>
                  <FontAwesomeIcon icon={faMapPin} className="icon-map" /> {umkm.lokasi}
                </h4>
                <h3>Deskripsi</h3>
                <p>{umkm.deskripsi}f</p>
                <h3>Item Dijual</h3>
                <p>{umkm.jasa_produk}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default DetailUMKM;

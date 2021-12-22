import { Container, Image, Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './LihatUMKM.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faThLarge } from '@fortawesome/free-solid-svg-icons';

const LihatUMKM = () => {
  const [umkm, setUmkm] = useState([]);
  const [city, setCity] = useState([]);
  const [kategori, setKategori] = useState([]);
  let [keywordCategory, setKeywordCategory] = useState('Kategori UMKM');
  let [keywordCity, setKeywordCity] = useState('Kota');
  let [keywordName, setKeywordName] = useState('a');

  useEffect(() => {
    getUmkm();
    getCity();
    getKategori();
  }, []);

  const getUmkm = async () => {
    try {
      const response = await axios.get('http://localhost:5000/umkm');
      setUmkm(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCity = async () => {
    try {
      const response = await axios.get('http://localhost:5000/city');
      setCity(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getKategori = async () => {
    try {
      const response = await axios.get('http://localhost:5000/kategori');
      setKategori(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const searchUmkm = async (e) => {
    e.preventDefault();
    console.log(keywordName);
    try {
      const response = await axios.get(`http://localhost:5000/search/name=${keywordName}&category=${keywordCategory}&city=${keywordCity}`);
      setUmkm(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <div className="content-list">
          <div className="title-content">
            <h2>
              Lihat <span>UMKM</span>
            </h2>
          </div>
          <div className="wrapper-list-content">
            <div className="searching-umkm">
              <div className="title-search">
                <h3>Menu Pencarian</h3>
              </div>
              <div className="form-search">
                <Form className="d-flex" onSubmit={searchUmkm}>
                  <FormControl id="keywordSearch" type="search" placeholder="Search" className="me-2" aria-label="Search" onKeyDown={getUmkm} onChange={(e) => setKeywordName(e.target.value)} />
                  <Button id="btn-search" className="btn-search" type="submit">
                    Search
                  </Button>
                </Form>
              </div>
              <div className="filter-wrap">
                <h3>Filter</h3>
                <div className="filter-content">
                  <Dropdown className="dropdown" id="dropdown-kategori" onSelect={(e) => setKeywordCategory(e)}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" value="Kategori">
                      {`${keywordCategory}`}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {kategori.map((listUmkm, index) => (
                        <div className="ff" key={listUmkm.kategori}>
                          <Dropdown.Item eventKey={listUmkm.kategori}>{listUmkm.kategori}</Dropdown.Item>
                        </div>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown className="dropdown" onSelect={(e) => setKeywordCity(e)}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {`${keywordCity}`}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {city.map((listUmkm, index) => (
                        <div className="ff" key={listUmkm.kota}>
                          <Dropdown.Item eventKey={listUmkm.kota}>{listUmkm.kota}</Dropdown.Item>
                        </div>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
            <div className="image-list-page">
              <Image className="image-list" src="images/search-image.svg"></Image>
            </div>
          </div>
          <div className="item-content item-page-list">
            {umkm.map((listUmkm, index) => (
              <div className="item-card" key={listUmkm.id}>
                <Link to={`/detail/${listUmkm.id}`}>
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
        </div>
      </Container>
    </>
  );
};

export default LihatUMKM;

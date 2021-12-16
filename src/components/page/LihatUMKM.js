import { Container, Image, Form, FormControl, Button, Dropdown, Card } from "react-bootstrap";
import CardUMKM from "../Card";
import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useHistory, Link } from "react-router-dom";
import "./LihatUMKM.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin, faThLarge, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const LihatUMKM = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [users, setUsers] = useState([]);
  const [umkm, setUmkm] = useState([]);
  let [keywordCategory, setKeywordCategory] = useState("Kuliner");
  let [keywordCity, setKeywordCity] = useState("Jakarta");
  let [keywordName, setKeywordName] = useState("a");

  const history = useHistory();

  useEffect(() => {
    getUmkm();
  }, []);

  const getUmkm = async () => {
    try {
      const response = await axios.get("http://localhost:5000/umkm");
      setUmkm(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const searchUmkm = async e => {
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
                  <FormControl
                    id="keywordSearch"
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onKeyDown={getUmkm}
                    onChange={e => setKeywordName(e.target.value)}
                  />
                  <Button id="btn-search" className="btn-search" type="submit">
                    Search
                  </Button>
                </Form>
              </div>
              <div className="filter-wrap">
                <h3>Filter</h3>
                <div className="filter-content">
                  <Dropdown className="dropdown" id="dropdown-kategori" onSelect={e => setKeywordCategory(e)}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" value="Kategori">
                      {`${keywordCategory}`}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="Kuliner">Kuliner</Dropdown.Item>
                      <Dropdown.Item eventKey="Otomotif">Otomotif</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown className="dropdown" onSelect={e => setKeywordCity(e)}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {`${keywordCity}`}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="Jakarta">Jakarta</Dropdown.Item>
                      <Dropdown.Item eventKey="Bekasi">Bekasi</Dropdown.Item>
                      <Dropdown.Item eventKey="Bali">Bali</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  {/* <Dropdown className="dropdown">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Urutan Ditambahkan
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown> */}
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
                <div className="item-card" key={listUmkm.id}>
                  <div className="card">
                    <div className="containers">
                      <img src={listUmkm.gambar} alt="" />
                    </div>
                    <div className="details">
                      <h3>{listUmkm.nama_umkm}</h3>
                      <div className="categories-card">
                        <p>
                          <FontAwesomeIcon icon={faThLarge} className="icon-map" /> {listUmkm.kategori}
                        </p>
                      </div>
                      <div className="location-card">
                        <p>
                          <FontAwesomeIcon icon={faMapPin} className="icon-map" /> {listUmkm.kota}
                        </p>
                      </div>
                      <p className="deskripsi-card">{listUmkm.deskripsi}</p>
                    </div>
                    <div className="d-flex justify-content-center">
                      <Link to={`/detail/${listUmkm.id}`}>
                        <Button className="btn-detail">Detail</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default LihatUMKM;

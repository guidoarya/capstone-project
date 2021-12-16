import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin, faThLarge, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import HeroLogged from "../Hero-Logged";
import CardUMKM from "../Card";
import axios from "axios";
import jwt_decode from "jwt-decode";
import "../Card.css";

const HomeLogged = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [users, setUsers] = useState([]);
  const [umkm, setUmkm] = useState([]);

  const axiosJWT = axios.create();
  const history = useHistory();

  useEffect(() => {
    getUmkm();
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
    } catch (err) {
      if (err.response) {
        history.push("/");
      }
    }
  };

  axiosJWT.interceptors.request.use(
    async config => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get("http://localhost:5000/token");
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        setName(decoded.name);
        setExpire(decoded.exp);
      }
      return config;
    },
    err => {
      return Promise.reject(err);
    }
  );

  const getUmkm = async () => {
    try {
      const response = await axiosJWT.get("http://localhost:5000/umkm");
      setUmkm(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <h5>Selamat datang, {name}</h5>
        <HeroLogged />
        <div className="content-umkm">
          <div className="title-content">
            <h2>
              Lihat <span>UMKM</span>
            </h2>
          </div>
          <div className="item-content">
            {umkm.map((listUmkm, index) => (
              <div className="item-card" key={listUmkm.id}>
                <div className="card">
                  <div className="containers">
                    <img src={listUmkm.gambar} alt="" />
                  </div>
                  <div className="details">
                    <h3>{listUmkm.nama_umkm}</h3>
                    <div className="categories-card">
                      <p>
                        {" "}
                        <FontAwesomeIcon icon={faThLarge} className="icon-map" /> {listUmkm.kategori}
                      </p>
                    </div>
                    <div className="location-card">
                      <p>
                        {" "}
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
            ))}
          </div>
          <div className="detail-text">
            <div className="detail-text d-flex">
              <Link className="btn-reg" to="/list-umkm">
                <div>
                  <p>
                    Selengkapnya <FontAwesomeIcon icon={faArrowRight} className="icon-map" />
                  </p>
                </div>
              </Link>
            </div>
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

export default HomeLogged;

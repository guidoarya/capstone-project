import React, { useState, useEffect } from "react";
import { Container, Button, Dropdown, DropdownButton } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./Home.css";
import Hero from "../Hero";
import axios from "axios";
import "../Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin, faThLarge, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Reviewer from "../Reviewer";

const Home = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
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
      const response = await axios.get("http://localhost:5000/umkm");
      setUmkm(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Hero />
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
        </Container>
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

export default Home;

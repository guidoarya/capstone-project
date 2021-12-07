import { Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./Home.css";
import Hero from "../Hero";
import CardUMKM from "../Card";
import Reviewer from "../Reviewer";

const Home = () => {
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
            <CardUMKM />
            <CardUMKM />
            <CardUMKM />
            <CardUMKM />
            <CardUMKM />
            <CardUMKM />
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
            <Reviewer />
            <Reviewer />
            <Reviewer />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;

import { React } from "react";
import { Image } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div class="hero">
        <div class="text">
          <h1>
            Daftarkan <span>UMKM</span> Anda Mulai <span>Sekarang</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a leo nulla. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Suspendisse potenti. Nulla aliquam diam vel accumsan pharetra.{" "}
          </p>
          <button className="btn-hero">
            <Link className="btn-reg" to="/login">
              Mulai Sekarang
            </Link>
          </button>
        </div>
        <div class="images">
          <Image className="image-hero" src="images/hero-mobile.svg"></Image>
        </div>
      </div>
    </>
  );
}

export default Hero;

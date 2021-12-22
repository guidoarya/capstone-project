import { React } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="text">
          <h1>
            Daftarkan <span>UMKM</span> Anda Mulai <span>Sekarang</span>
          </h1>
          <p>Bantu UMKM merupakan sebuah website yang menyediakan tempat untuk para pengusaha untuk mempromosikan UMKM nya. Sehingga para pengusaha UMKM dapat menyebarluaskan profil UMKM nya ke masyarakat luas.</p>
          <button className="btn-hero">
            <Link className="btn-reg" to="/login">
              Mulai Sekarang
            </Link>
          </button>
        </div>
        <div className="images">
          <Image className="image-hero" src="images/hero-mobile.svg"></Image>
          <div className="blob">
            <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
              <path fill="#009DAE">
                <animate
                  attributeName="d"
                  dur="5s"
                  repeatCount="indefinite"
                  values="
                  M426.5,320Q443,390,370,391.5Q297,393,237,433.5Q177,474,115,433.5Q53,393,48.5,321.5Q44,250,83.5,203.5Q123,157,163,130.5Q203,104,255.5,88Q308,72,368,96.5Q428,121,419,185.5Q410,250,426.5,320Z; 

                  M437.5,316.5Q433,383,368.5,399.5Q304,416,238.5,451Q173,486,112,440.5Q51,395,69.5,322.5Q88,250,70,178Q52,106,119.5,81.5Q187,57,251.5,51.5Q316,46,377,80Q438,114,440,182Q442,250,437.5,316.5Z; 

                  M418.5,296.5Q378,343,352,413Q326,483,252.5,475.5Q179,468,122.5,425.5Q66,383,40,316.5Q14,250,55.5,194.5Q97,139,142,97Q187,55,256.5,35Q326,15,377,68Q428,121,443.5,185.5Q459,250,418.5,296.5Z;

                  M422.5,317.5Q435,385,377,423.5Q319,462,260,432Q201,402,145,384.5Q89,367,52.5,308.5Q16,250,45.5,186.5Q75,123,130.5,88.5Q186,54,242,78Q298,102,339,128.5Q380,155,395,202.5Q410,250,422.5,317.5Z;

                  M426.5,320Q443,390,370,391.5Q297,393,237,433.5Q177,474,115,433.5Q53,393,48.5,321.5Q44,250,83.5,203.5Q123,157,163,130.5Q203,104,255.5,88Q308,72,368,96.5Q428,121,419,185.5Q410,250,426.5,320Z"
                />
              </path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

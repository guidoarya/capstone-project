import { Container, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin, faThLarge } from "@fortawesome/free-solid-svg-icons";
import "./DetailUMKM.css";

const DetailUMKM = () => {
  return (
    <>
      <Container>
        <div className="content-detail">
          <div className="title-umkm">
            <h1>Nama UMKM</h1>
            <h2>Jln. Bandung Indonesia</h2>
          </div>
          <div className="wrap-content-detail">
            <div className="image-detail">
              <h3>
                <FontAwesomeIcon icon={faThLarge} className="icon-map" /> Kategori
              </h3>
              <Image className="image-detail-umkm" src="images/test.jpg"></Image>
            </div>
            <div className="info-umkm">
              <div className="umkm-title">
                <h4>
                  <FontAwesomeIcon icon={faMapPin} className="icon-map" /> Lokasi
                </h4>
                <h3>Deskripsi</h3>
                <p>lomemd dfndn feifieninfie feinfienfienf</p>
                <h3>Item Dijual</h3>
                <p>lomemd dfndn feifieninfie feinfienfienf</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default DetailUMKM;

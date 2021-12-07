import { Container, Image } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./DetailUMKM.css";

const DetailUMKM = () => {
  return (
    <>
      <Container>
        <div className="content-detail">
          <div className="title-umkm">
            <h1>Detail UMKM</h1>
          </div>
          <div className="wrap-content-detail">
            <div className="image-detail">
              <Image className="image-detail-umkm" src="images/test.jpg"></Image>
            </div>
            <div className="info-umkm">
              <div className="umkm-title">
                <h2>Nama UMKM</h2>
                <h4>Lokasi</h4>
                <h4>Kategori</h4>
                <h3>Deskripsi</h3>
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

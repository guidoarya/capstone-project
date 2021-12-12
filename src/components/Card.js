import { React } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Card.css';

function CardUMKM(listUmkm) {
  console.log(listUmkm);
  return (
    <>
      {/* <div className="item-card">
        <Card className="card">
          <Card.Img variant="top" src={umkm.gambar} />
          <Card.Body>
            <Card.Title className="titleUMKM">{umkm.nama_umkm}</Card.Title>
            <Card.Text>{umkm.deskripsi}</Card.Text>
            <div className="d-flex justify-content-center">
              <Link to="/detail-umkm">
                <Button variant="primary" className="btn-detail">
                  Detail
                </Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </div> */}
    </>
  );
}

export default CardUMKM;

import { React } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Card.css";

function CardUMKM() {
  return (
    <>
      <div className="item-card">
        <Card className="card">
          <Card.Img variant="top" src="images/test.jpg" />
          <Card.Body>
            <Card.Title className="titleUMKM">Nama UMKM</Card.Title>
            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            <div className="d-flex justify-content-center">
              <Link to="/detail-umkm">
                <Button variant="primary" className="btn-detail">
                  Detail
                </Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default CardUMKM;

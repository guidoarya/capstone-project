import { Container, Image, Form, FormControl, Button, Dropdown } from "react-bootstrap";
import CardUMKM from "../Card";
import "./LihatUMKM.css";

const LihatUMKM = () => {
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
                <Form className="d-flex">
                  <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                  <Button className="btn-search">Search</Button>
                </Form>
              </div>
              <div className="filter-wrap">
                <h3>Filter</h3>
                <div className="filter-content">
                  <Dropdown className="dropdown">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Kategori
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown className="dropdown">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Asal
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown className="dropdown">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Urutan Ditambahkan
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
            <div className="image-list-page">
              <Image className="image-list" src="images/search-image.svg"></Image>
            </div>
          </div>
          <div className="item-content item-page-list">
            <CardUMKM />
            <CardUMKM />
            <CardUMKM />
            <CardUMKM />
            <CardUMKM />
            <CardUMKM />
          </div>
        </div>
      </Container>
    </>
  );
};

export default LihatUMKM;

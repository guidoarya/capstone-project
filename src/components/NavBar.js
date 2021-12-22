import { React } from 'react';
import { Container, Image, Navbar, Nav } from 'react-bootstrap';
import Hamburger from 'hamburger-react';
import './Navbar.css';

function NavBar() {
  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand className="navbrand " href="/">
            <Image className="image-logo" src="../images/ds.png"></Image>
            <div className="text-brand">
              <p>Bantu</p>
              <p>UMKM</p>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar">
            <Hamburger></Hamburger>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end menu-nav">
              <Nav.Link className="btn-effect" href="/">
                Beranda
              </Nav.Link>
              <Nav.Link className="link-login btn-effect" href="/register">
                Daftar
              </Nav.Link>
              <Nav.Link href="/login">
                <button className="btn-masuk">Login</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

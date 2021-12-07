import { React } from "react";
import { Container, Image, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import "./Navbar.css";

function NavBar() {
  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand className="navbrand " href="/">
            <Image className="image-logo" src="images/ds.png"></Image>
            <div class="text-brand">
              <p>Bantu</p>
              <p>UMKM</p>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar">
            <Hamburger></Hamburger>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end menu-nav">
              <Nav.Link href="/">Beranda</Nav.Link>
              <Nav.Link>
                <Link className="link-login" to="/register">
                  Daftar
                </Link>
              </Nav.Link>
              <Nav.Link href="#">
                <button className="btn-masuk">
                  {" "}
                  <Link className="btn-reg" to="/login">
                    Login
                  </Link>
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

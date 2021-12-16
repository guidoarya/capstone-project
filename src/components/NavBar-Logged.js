import { React } from "react";
import { Container, Image, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import "./Navbar.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

function NavBarLogged() {
  const history = useHistory();

  const Logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand className="navbrand " href="/beranda">
            <Image className="image-logo" src="images/ds.png"></Image>
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
              <Nav.Link href="/beranda">Beranda</Nav.Link>
              <Nav.Link href="#" href="/" onClick={Logout}>
                <button className="btn-keluar">Logout</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarLogged;

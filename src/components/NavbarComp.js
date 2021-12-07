import React from 'react';
import { Navbar, Nav, Container, Button, Image } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './NavbarComp.css';

const NavbarComponent = () => {
  const history = useHistory();

  const Logout = async () => {
    try {
      await axios.delete('http://localhost:5000/logout');
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Navbar className="navbar-component" expand="lg">
      <Container>
        <Navbar.Brand href="/beranda">
          <Image className="logo-img" src="images/logo.png"></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="nav-item my-2 my-lg-0" navbarScroll>
            <Nav.Link href="/beranda">Beranda</Nav.Link>
            <Button onClick={Logout} variant="danger">
              LOGOUT
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;

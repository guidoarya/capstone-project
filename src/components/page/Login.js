/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Form, Button, Container, Image, Navbar, Nav } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import Hamburger from 'hamburger-react';
import Swal from 'sweetalert2';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const history = useHistory();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/login', {
        email: email,
        password: password,
      });
      history.push('/beranda');
    } catch (err) {
      setMsg(err.response.data.msg);
      console.log(msg);
      Swal.fire({
        icon: 'error',
        title: 'Terjadi Kesalahan',
        text: msg,
        confirmButtonColor: '#009dae',
        confirmButtonText: 'Kembali',
      });
    }
  };

  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand className="navbrand " href="/">
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
              <Nav.Link href="/" className="btn-effect">
                Beranda
              </Nav.Link>
              <Nav.Link className="link-login btn-effect" href="/register">
                Daftar
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="login-page">
        <div className="image-login-wrap">
          <Image className="image-login" src="images/login-image.svg"></Image>
        </div>
        <div className="item-login">
          <Form className="form-login" onSubmit={Auth}>
            <p className="mb-4 title-form">Login Form</p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control required className="input" type="email" placeholder="Enter email" defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control required className="input" type="password" placeholder="Password" defaultValue={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button className="btn-login" type="submit">
                Login
              </Button>
            </div>
            <p className="dont_have_acc">
              Belum memiliki akun?{' '}
              <Link className="link-to-regist" to="/register">
                Daftar sekarang!
              </Link>
            </p>

            <p className="admin_login">
              Anda admin?{' '}
              <Link className="link-to-regist" to="/loginAdmin">
                Silahkan login disini
              </Link>
            </p>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Login;

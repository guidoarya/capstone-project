import React, { useState } from 'react';
import { Form, Button, Container, Image, Navbar, Nav } from 'react-bootstrap';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import Swal from 'sweetalert2';
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [nohp, setNoHp] = useState('');
  const [kota, setKota] = useState('');

  const [msg, setMsg] = useState();

  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/users', {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        nohp: nohp,
        kota: kota,
      });
      history.push('/register');
    } catch (err) {
      try {
        await setMsg(err.response.data.msg);
        handleMsg(msg);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleMsg = async (message) => {
    Swal.fire({
      icon: 'error',
      title: 'Terjadi Kesalahan',
      text: message,
      confirmButtonColor: '#009dae',
      confirmButtonText: 'Kembali',
    });
  };

  return (
    <>
      <Container>
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
                <Nav.Link href="/login">
                  <button className="btn-masuk">Login</button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="page-register">
          <div className="form-regis">
            <Form onSubmit={handleRegister}>
              <h1 className="mb-4">Register Form</h1>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter name" defaultValue={name} onChange={(e) => setName(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email" placeholder="Enter email" defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control required type="number" placeholder="Enter your phone number" defaultValue={nohp} onChange={(e) => setNoHp(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control required type="text" placeholder="Enter your city" defaultValue={kota} onChange={(e) => setKota(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" placeholder="Password" defaultValue={password} onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control required type="password" placeholder="Confirm Password" defaultValue={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
              </Form.Group>

              <Button className="btn-submit-register" variant="primary" type="submit">
                Register
              </Button>
            </Form>
            <p className="have_acc">
              Sudah memiliki akun?{' '}
              <Link className="link-to-login" to="/login">
                Login
              </Link>
            </p>
          </div>
          <div className="regis-img-wrap">
            <Image className="image-regis" src="images/regis-image.svg"></Image>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Register;

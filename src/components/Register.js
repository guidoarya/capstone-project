import React, { useState } from 'react';
import { Form, Button, Alert, Container, Row, Col, Image } from 'react-bootstrap';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [nohp, setNoHp] = useState('');
  const [kota, setKota] = useState('');

  const [msg, setMsg] = useState('');

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
      history.push('/');
    } catch (err) {
      if (err.response) {
        setMsg(err.response.data.msg);
      }
    }
  };

  return (
    // <div className="form-container mt-5">
    // 
      // <Form onSubmit={handleRegister}>
      // <h1 className="mb-4">Login Form</h1>
      //   <Alert variant="danger">{msg}</Alert>
      //   <Form.Group className="mb-3">
      //     <Form.Label>Name</Form.Label>
      //     <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
      //   </Form.Group>

      //   <Form.Group className="mb-3">
      //     <Form.Label>Email address</Form.Label>
      //     <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
      //   </Form.Group>

      //   <Form.Group className="mb-3">
      //     <Form.Label>Phone Number</Form.Label>
      //     <Form.Control type="number" placeholder="Enter your phone number" value={nohp} onChange={(e) => setNoHp(e.target.value)} />
      //   </Form.Group>

      //   <Form.Group className="mb-3">
      //     <Form.Label>City</Form.Label>
      //     <Form.Control type="text" placeholder="Enter your city" value={kota} onChange={(e) => setKota(e.target.value)} />
      //   </Form.Group>

      //   <Form.Group className="mb-3" controlId="formBasicPassword">
      //     <Form.Label>Password</Form.Label>
      //     <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      //   </Form.Group>

      //   <Form.Group className="mb-3" controlId="formBasicPassword">
      //     <Form.Label>Confirm Password</Form.Label>
      //     <Form.Control type="password" placeholder="Confirm Password" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
      //   </Form.Group>

      //   <Button variant="primary" type="submit">
      //     Submit
      //   </Button>
      // </Form>
    // </div>
    <Container>
      <Row className="row-container">
        <Col md={6}>
          <Form onSubmit={handleRegister}>
            <h1 className="mb-4">Register Form</h1>
            {/* <Alert variant="danger">{msg}</Alert> */}
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" placeholder="Enter your phone number" value={nohp} onChange={(e) => setNoHp(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter your city" value={kota} onChange={(e) => setKota(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
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
        </Col>
        <Col md={6}>
          <Image className="image-login" src="images/login-img.png"></Image>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;

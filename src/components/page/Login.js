/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Form, Button, Alert, Row, Col, Container, Image, Navbar, Nav } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

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
      if (err.response) {
        setMsg(err.response.data.msg);
      }
    }
  };

  return (
    <>
      <Container className="login-page">
        <div className="image-login-wrap">
          <Image className="image-login" src="images/login-image.svg"></Image>
        </div>
        <div className="item-login">
          <Form className="form-login" onSubmit={Auth}>
            <p className="mb-4 title-form">Login Form</p>
            <p className="alert-login" variant="danger">
              {msg}
            </p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control className="input" type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control className="input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
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
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Login;

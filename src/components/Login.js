import React, { useState } from "react";
import { Form, Button, Alert, Row, Col, Container, Image } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [msg, setMsg] = useState("");
  const history = useHistory();

  const Auth = async e => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });
      history.push("/beranda-logged");
    } catch (err) {
      if (err.response) {
        setMsg(err.response.data.msg);
      }
    }
  };

  return (
    <>
      <Container>
        <Row className="row-container">
          <Col md={6}>
            <Image className="image-login" src="images/login-img.png"></Image>
          </Col>
          <Col md={6}>
            <Form className="form-login" onSubmit={Auth}>
              <p className="mb-4 title-form">Login Form</p>
              {/* <Alert variant="danger">{msg}</Alert> */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className="input" type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control className="input" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
              </Form.Group>

              <Button className="btn-login" type="submit">
                Login
              </Button>
              <p className="dont_have_acc">
                Belum memiliki akun?{" "}
                <Link className="link-to-regist" to="/register">
                  Daftar sekarang!
                </Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;

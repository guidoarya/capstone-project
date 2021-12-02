import {Navbar, Nav, Container, Image, Button, Card} from "react-bootstrap";
import { Link} from 'react-router-dom';
import './Home.css';
import Hamburger from 'hamburger-react'

const Home = () => {
        return (
                <><Navbar expand="lg" className="navbar">
                <Container>
                    <Navbar.Brand className="navbrand " href="#home">
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
                            <Nav.Link href="#">Beranda</Nav.Link>
                            <Nav.Link><Link className="link-login" to="/register">
                                    Daftar
                                </Link></Nav.Link>
                            <Nav.Link href="#">
                                <button className="btn-masuk"> <Link className="btn-reg" to="/login">
                                    Login
                                </Link></button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <div class="hero">
                    <div class = "text">
                        <h1>Daftarkan <span>UMKM</span> Anda Mulai <span>Sekarang</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a leo nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse potenti. Nulla aliquam diam vel accumsan pharetra. </p>
                        <button className="btn-hero"> 
                        <Link className="link-login" to="/login">
                Mulai Sekarang 
              </Link>
              </button>
                    </div>
                    <div class = "images">
                        <Image className="image-hero" src="images/hero-mobile.svg"></Image>
                    </div>
                </div>

                <div className="content-umkm">
                    <div className="title-content">
                        <h2>Lihat <span>UMKM</span></h2>
                    </div>
                    <div className="item-content">
                        <div className="item-card">
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                    </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="item-card">
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                    </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    
                        <div className="item-card">
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                    </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    
                        <div className="item-card">
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                    </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    
                        <div className="item-card">
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                    </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="detail-text">
                        <p>Selengkapnya ----</p>
                    </div>
                 </div>

                 <div className="review">
                     <div className="title-review">
                         <h3>Apa Kata Mereka ?</h3>
                         <p>Beberapa Komentar dari pengguna
                             <br></br>
                        <span>BantuUMKM</span></p>
                     </div>
                     <div className="item-review">
                        <div className="item-card-review">
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                        </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="item-card-review">
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                        </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="item-card-review">
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                        </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                     </div>



                 </div>


                       
            </Container>
            <footer>
                <p>
                Copyright © 2021 - BantuUMKM
                </p>
            </footer>
            </>
        );
}

export default Home;
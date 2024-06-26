import React from "react";
import logo from "../images/logo.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

// This element displays a footer with some of the nav links and customer service contact information.
export default function Footer() {
    return(
        <div className="footer">
            <Container>
                <Row>
                    <Col xs={2}>
                        <img src={logo} alt="RLB Logo" className='footer-logo'/>
                        <p className="copywrite">© 2024 Rare Labs Beauty all rights reserved</p>
                    </Col>
                    <Col>
                        <h5 className="footer-title">Customer Service</h5>

                        <Link className="ig-link" to="https://www.instagram.com/rarebeauty/">Send a message on Instagram</Link>
                        <p>Email: rarelabs@beauty.com</p>
                    </Col>
                    <Col xs={2}>
                        <nav>
                            <div>
                            <Link className="nav2" to="/">Home</Link>
                            </div>
                            <div>
                            <Link className="nav2" to="/about">About</Link>
                            </div>
                            <div>
                            <Link className="nav2" to="/rewards">Your Rewards</Link>
                            </div>
                            <div>
                            <Link className="nav2" to="/shop">Shop</Link>
                            </div>
                        </nav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
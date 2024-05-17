import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import logo from "../images/logo.png"

// This function creates the main header shown in the entire application
export default function Header() {
    return (
        <div>
            <header className="promo-header">
                <p>Coming Soon - Bridal Collection with Mario Dedivanovic</p>
            </header>
            <header className="main-header">
                <Container>
                    <Row>
                        <Col>
                            <img src={logo} alt="RLB Logo" className='header-logo'/>
                        </Col>
                        <Col>
                            <h1>Rare Labs Beauty</h1>
                            <h6 className="slogan">Created with Elegance and Care</h6>
                        </Col>
                        <Col>
                            <nav>
                                    <Link className="nav" to="/">Home</Link>
                                    <Link className="nav" to="/about">About</Link>
                                    <Link className="nav" to="/rewards">Your Rewards</Link>
                                    <Link className="nav" to="/shop">Shop</Link>
                            </nav>
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    );
}
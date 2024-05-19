import React, { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import logo from "../images/logo.png"
import { LogInContext, NameContext } from "../App.js"
import { useSelector } from "react-redux";

// This function creates the main header shown in the entire application
export default function Header() {

    const cartItems = useSelector(state => state.cart.cart);

    const value = useContext(NameContext);
    let [fName, setFName] = value;

    const newValue = useContext(LogInContext);
    let [loggedIn, setLoggedIn] = newValue;

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
                        {(loggedIn === "logged in") ? (
                            <h6 className="nav">{fName} - Silver Rewards Member</h6>
                        ): null}
                            <nav>
                                    <Link className="nav" to="/">Home</Link>
                                    <Link className="nav" to="/about">About</Link>
                                    <Link className="nav" to="/rewards">Your Rewards</Link>
                                    <Link className="nav" to="/shop">Products</Link>
                                    
                                    {cartItems.length > 0 ? (
                                        <Link className="nav" to="/cart">Cart: {cartItems.length}</Link>
                                    ): null}
                            </nav>
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    );
}
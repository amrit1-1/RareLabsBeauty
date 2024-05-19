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

    // Grabbing the cart from the global state in order to display it in the header (only if items are in the cart)
    const cartItems = useSelector(state => state.cart.cart);

    // Using context to grab the user's name to display in the header once logged in 
    const value = useContext(NameContext);
    let [fName, setFName] = value;

    // Using context to see if the user has logged in or not so we know if the name should be displayed in the header or not
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

                        {/* If the user's logged in, their name appears in the header*/}
                        {(loggedIn === "logged in") ? (
                            <h6 className="nav">{fName} - Silver Rewards Member</h6>
                        ): null}

                        {/* List of navigation links for the user to go to different pages*/}
                            <nav>
                                    <Link className="nav" to="/">Home</Link>
                                    <Link className="nav" to="/about">About</Link>
                                    <Link className="nav" to="/rewards">Your Rewards</Link>
                                    <Link className="nav" to="/shop">Products</Link>

                                    {/* If the cart isn't empty, the cart link appears in the header*/}
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
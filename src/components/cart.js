import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, removeAll } from "../redux/cartSlice";
import { Link } from "react-router-dom";

export default function Cart() {

    // Grabbing cart items and putting them into array 'cartItems'
    let cartItems = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();

    // Calculating total price of cart items
    var sum = 0;
    cartItems.forEach(subData => sum += subData.price);

    // Mapping each product in the 'cartItems' array
    const displayingCart = cartItems.map((item) => 
    <Col>
        <Card style={{ width: '9rem' }}>
            <Card.Img variant="top" src={(item.image)} />
            <Card.Body>
                <Card.Title>{(item.name)} - £{(item.price)}</Card.Title>
                <Card.Text>Colour: {(item.selectedColour)}</Card.Text>
                <Button className='add-to-cart' onClick={() => dispatch(removeFromCart(item.id))}>Remove</Button>
            </Card.Body>
        </Card>
    </Col>
    );

    // Toggles 'shipping info' button
    const [shippingInfo, setShippingInfo] = useState(false);

    // Shows 'completed order' message
    const [complete, setComplete] = useState(false);

    // Ensures shipping method is selected before completing order
    const [shipping, setShipping] = useState("");

    function handleSubmit() {
        dispatch(removeAll());
        setComplete(true);
    }

    return (
        <div className="page">
            {/* The entire checkout element is only shown if the user hasn't clicked "checkout'*/}
            {complete === false? (
            <>
            <h1 className="page-title">Checkout</h1>
            <h3>Cart: {cartItems.length}</h3>
            <Container>
                <Row>
                    {displayingCart}
                </Row>
            </Container>

            {/* If the cart is empty, link to 'go to products' appears. otherwise, checkout info is shown. */}
            {cartItems.length === 0? (
                <>
                    <br />
                    <p>Your cart is now empty.</p>
                    <Link className="explore" to="/shop">View Products</Link>
                </>
                
            ): (
                <div>
                <button className="second-button" onClick={() => dispatch(removeAll())}>Empty Cart</button>
                <h3 className="page-title">Total: £{sum}</h3>
                {shippingInfo === false? (
                    <button className="button" onClick={() => setShippingInfo(true)}>Shipping Info</button>
                ): (
                    <>
                    <h4 className="page-title">Our Shipping Services</h4>
                    <p>We currently offer product collection services at our flagship storefronts in London and New York. </p>
                    <p>Your items will be available for collection in 2 business days. You'll recieve an email confirming your purchase as well as an email to notify you that it's ready!</p>
                    <p>Our home-delivery services are coming soon so watch this space... </p>
                    <button className="second-button" onClick={() => setShippingInfo(false)}>Close</button>
                    </>
                )}
                <form>  
                        <select 
                        className='select'
                        value = {shipping}
                        onChange={e => setShipping(e.target.value)}
                        >
                            <option disabled={true} value={""} selected={true}>Choose Shipping</option>
                            <option value={"shipping"}>Collect from RLB London, Oxford St</option>
                            <option value={"shipping"}>Collect from RLB New York, New York</option>
                            <option disabled={true}>Standard Shipping - coming soon</option>
                            <option disabled={true}>Next Day Shipping - coming soon</option>
                        </select>

                        {/*'Complete order!' button is only able to be clicked when the user selects a shipping method*/}
                        <button
                        disabled={shipping === "" ? true: false}
                        className={shipping === "" ? "disabled-button": "button" }
                        onClick={handleSubmit}>
                            Complete Order!</button>
                    </form>
                </div>
            )}
            </>
            ): (
                <>
                {/* This confirmation appears once the user has clicked 'complete order!' with a link back to home */}
                <h1 className="page-title">Order Complete</h1>
                <p>Thanks for shopping with us!</p>
                <p>Your order will be ready for collection in approx 2 business days. Check your emails for your confirmation.</p>
                <Link className="explore" to="/">Back to Home</Link>
                </>
            )}
        </div>
    );
}
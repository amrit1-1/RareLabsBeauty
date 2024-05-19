import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

export default function Cart() {

    // Grabbing cart items and putting them into array 'cartItems'
    const cartItems = useSelector(state => state.cart.cart);
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

    return (
        <div className="page">
            <h1 className="page-title">Checkout</h1>
            <h3>Cart: {cartItems.length}</h3>
            <Container>
                <Row>
                    {displayingCart}
                </Row>
            </Container>

            {/* If the cart is empty, link to go to products appears. otherwise, the total price of cart is shown. */}
            {cartItems.length === 0? (
                <>
                    <br />
                    <p>Your cart is now empty.</p>
                    <Link className="explore" to="/shop">View Products</Link>
                </>
                
            ): (
                <div>
                <h3 className="page-title">Total: £{sum}</h3>
                </div>
            )}
        </div>
    );
}
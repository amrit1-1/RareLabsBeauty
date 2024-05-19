import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginSignup from "./loginSignup.js";

// This defines the rewards page located in the header.
export default function Rewards() {

    // This toggles the details about the rewards if the button is clicked 
    const [infoVisability, setInfoVisability] = useState(false);

    return (
        <div className="page">
            <div>
                <h2 className="page-title">Your Rewards</h2>
                {/* Initially, a 'learn about rewards' button is displayed*/}
                {infoVisability === false? (
                    <button type="button" className="button" onClick={() => setInfoVisability(true)}>LEARN ABOUT REWARDS</button>
                ) : 
                // Upon clicking the button, some details about the rewards scheme is shown.
                (
                    <>
                        <Container>
                            <Row>
                                <p>Register now to be part of our exclusive rewards program!</p>
                            </Row>
                            <Row>
                                <Col>
                                    <h4 className="page-title">Benefits</h4>
                                    <ul className="list">
                                    <li>Promo codes sent right to your inbox every month</li>
                                    <li>Access to exclusive products in our best-selling formulas</li>
                                    <li>Free gift wrap service</li>
                                    </ul>
                                </Col>
                                <Col>
                                    <h4 className="page-title">Events</h4>
                                    <p>Rewards scheme members recieve regular invites to our RLB masterclasses that are held every month. This is currenty available for customers in the U.K, France, U.S. and Australia. Italy and Spain will be coming in the next year.</p>
                                </Col>
                            </Row>
                            <button type="button" className="second-button" onClick={() => setInfoVisability(false)}>CLOSE</button>
                        </Container>
                    </>
                )}
            </div>
            {/* Here i have included the element that controls the user's registration or login */}
            <div>
                <LoginSignup />
            </div>
        </div>
    );
}
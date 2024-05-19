import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import about from "../images/about.png";

// This function returns the 'about' section with some text describing the company and some contact details
export default function About() {
    return(
        <div className="page">
            <div>
                <h2 className="page-title">About</h2>
            </div>
            <Container>
                <Row className="about-box">
                    <Col>
                        <p>Founded on the principles of quality, innovation, and inclusivity, Rare Labs is committed to providing products that not only enhance your natural features but also empower you to express yourself freely and confidently.</p>
                    </Col>
                    <Col>
                        <p>Join us on our journey to redefine beauty standards and inspire confidence in every individual. Experience the elegance and care that define Flawless Cosmetics, and discover the beauty of being flawlessly you.</p>
                    </Col>
                </Row>
                <Row>
                    <img className="about-pic" src={about} />
                </Row>
                <Row>
                    <div className="contact">
                        <h3 className="page-title">Contact Us</h3>
                        <p>Need help finding the right shade? Want to book one of our artists for your event? Feel free to reach out to us:</p>
                        <Row>
                            <Col>
                            <p>Email: rarelabs@beauty.com</p>
                            </Col>
                            <Col>
                            <Link className="ig-link" to="https://www.instagram.com/rarebeauty/">Our Instagram Page</Link>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </Container>
        </div>
    );
}
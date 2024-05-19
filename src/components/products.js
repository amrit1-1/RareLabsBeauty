import brow from '../images/brow_kit.png';
import lip1 from '../images/defining_lipstick.png';
import lip2 from '../images/dewy_lip.png';
import shadow1 from '../images/evening_shadow.png';
import brush from '../images/eye_brush.png';
import highlighter from '../images/silky_highlighter.png';
import blush1 from '../images/luminous_blush.png';
import blush2 from '../images/soft_blush.png';
import sponge from '../images/sponge.png';
import shadow2 from '../images/sunset_shadow.png';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { useState, useEffect } from 'react';

// This is an array of the different product objects I created.
const theProducts = [
    {
        id: 1,
        name: 'Sunset Drama Palette',
        colour: [
            'Valentines packaging', 
            'Christmas packaging', 
            'Halloween packaging'
        ],
        selectedColour: "",
        price: 50,
        description: 'Our signature eyeshadow formula in 7 blendable, pigmented shades. These palettes are perfect for warm-toned skin.',
        image: shadow2
    },
    {
        id: 2,
        name: 'Silk Touch Highlighter',
        colour: [
            'Silver Sparkle', 
            'Rose Gold', 
            'Peach Princess'
        ],
        selectedColour: "",
        price: 30,
        description: 'The pearliest, silkiest highlighting powder for deep skin tones. Shine bright and glow without accentuating skin texture.',
        image: highlighter
    },
    {
        id: 3,
        name: 'Concealer Brush',
        colour: [
            'Beige', 
            'Silver', 
            'Gold'
        ],
        selectedColour: "",
        price: 20,
        description: 'With soft, synthetic brush hairs hand-placed at an angle, this brush seamlessly blends concealer and creates an airbrushed finish.',
        image: brush
    },
    {
        id: 4,
        name: 'Soft Blending Sponge',
        colour: [
            'Beige', 
            'Pink', 
            'Black'
        ],
        selectedColour: "",
        price: 10,
        description: 'A squishy beauty sponge for blending mainly cream & liquid products. Dampen the sponge with water or setting spray for the best results.',
        image: sponge
    },
    {
        id: 5,
        name: 'Luminous Blush',
        colour: [
            'Blood Orange', 
            'Pastel Pink', 
            'Rich Red'
        ],
        selectedColour: "",
        price: 30,
        description: 'This powder blush/highlighter hybrid is the best of both words - leaving a flush of colour and a radiant sheen.',
        image: blush1
    },
    {
        id: 6,
        name: 'Silk Blush',
        colour: [
            'Pearl Pink', 
            'Champagne Gold', 
            'Starlight Silver'
        ],
        selectedColour: "",
        price: 30,
        description: 'An easy-to-blend cream blush that delivers pigmented colour as well as long wearability.',
        image: blush2
    },
    {
        id: 7,
        name: 'Defining Lipstick',
        colour: [
            'Light Nude', 
            'Medium Nude', 
            'Deep Nude'
        ],
        selectedColour: "",
        price: 30,
        description: 'Intense colour with one swipe. All-day wear and transfer proof.',
        image: lip1
    },
    {
        id: 8,
        name: 'Dewy Balm',
        colour: [
            'Pink', 
            'Coral', 
            'Maroon'
        ],
        selectedColour: "",
        price: 25,
        description: 'Sheer colour paired with moisturising shea butter to nourish and flatter the lips.',
        image: lip2
    },
    {
        id: 9,
        name: 'Evening Glam Palette',
        colour: [
            'Valentines packaging', 
            'Christmas packaging', 
            'Halloween packaging'
        ],
        selectedColour: "",
        price: 50,
        description: 'Our signature eyeshadow formula in 7 pigmented shades. These palettes are perfect for most skin tones.',
        image: shadow1
    },
    {
        id: 10,
        name: 'Brow Kit',
        colour: [
            'Blonde', 
            'Brunette', 
            'Jet Black'],
            selectedColour: "",
        price: 30,
        description: 'Two complimentary powder colours to fill-in and shape the brows. Comes in a travel-friendly compact that includes the brush.',
        image: brow
    }
];

export default function Products() {

    const dispatch = useDispatch()

    const [selectedOption, setSelectedOption] = useState("");

    const changingColour = (item) => {
        (item).selectedColour = selectedOption;
        dispatch(addToCart((item)));
        setSelectedOption("");
    }

    const displayingProducts = theProducts.map((theProduct) => 

        <Col>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={theProduct.image} />
            <Card.Body>
                <Card.Title>{theProduct.name} - £{theProduct.price}</Card.Title>
                <Card.Text>{theProduct.description}</Card.Text>
                    <form>  
                        <select 
                        className='select' 
                        required
                        value = {selectedOption}
                        onChange={e => setSelectedOption(e.target.value)}>
                            <option disabled={true} value={""} selected={true}>Choose Colour</option>
                            <option value={theProduct.colour[0]}>{theProduct.colour[0]}</option>
                            <option value={theProduct.colour[1]}>{theProduct.colour[1]}</option>
                            <option value={theProduct.colour[2]}>{theProduct.colour[2]}</option>
                        </select>
                    </form>
                    <Button
                    disabled={selectedOption === "" ? true: false}
                    className='add-to-cart' 
                    onClick={() => changingColour(theProduct) }>
                        Add to Cart</Button>
            </Card.Body>
        </Card>
        </Col>
    );

    return (
        <div>
            <h2 className="page-title">Products</h2>
            <Container>
                <Row>
                    {displayingProducts}
                </Row>
            </Container>
        </div>
    )
}
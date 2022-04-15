import './Dinner.css';
import React from 'react';
import SalomonwithGrapefruitandLentilSalad from './../../../resources-red-onion/images/dinner/dinner1.png'
import LemonSalmonPiccata from './../../../resources-red-onion/images/dinner/dinner2.png'
import Frenchfrieswithcheese from './../../../resources-red-onion/images/dinner/dinner3.png'
import BeefTenderloinWithquinoaPilaf from './../../../resources-red-onion/images/dinner/dinner4.png'
import GarlicButterBakedSalmon from './../../../resources-red-onion/images/dinner/dinner5.png'
import BackedChicken from './../../../resources-red-onion/images/dinner/dinner6.png'
import { Row } from 'react-bootstrap';
import SingleDinner from '../../SingleDinner/SingleDinner';

const dinners = [
    { id: 'dinner1', name: 'Salomon with Grapefruit and Lentil Salad', image: SalomonwithGrapefruitandLentilSalad, price: '$5.99', description: 'Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese ' },
    { id: 'dinner2', name: 'Lemon Salmon Piccata', image: LemonSalmonPiccata, price: '$5.99', description: 'Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese ' },
    { id: 'dinner3', name: 'Frenchfries with cheese', image: Frenchfrieswithcheese, price: '$5.99', description: 'Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese ' },
    { id: 'dinner4', name: 'Beef Tenderloin With Quinoa Pilaf', image: BeefTenderloinWithquinoaPilaf, price: '$5.99', description: 'Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese ' },
    { id: 'dinner5', name: 'Garlic Butter Baked Salmon', image: GarlicButterBakedSalmon, price: '$5.99', description: 'Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese ' },
    { id: 'dinner6', name: 'Backed Chicken', image: BackedChicken, price: '$5.99', description: 'Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese ' },
]

const Dinner = () => {
    return (
        <div>
        <Row xs={1} md={2} lg={3} className="g-4">
        {
            dinners.map(dinner => (<SingleDinner dinner={dinner} key={dinner.id} />))
        }
        </Row>
        
    </div>
    );
};

export default Dinner;
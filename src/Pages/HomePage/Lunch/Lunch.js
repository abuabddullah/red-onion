import './Lunch.css';
import React from 'react';
import HealthyMealPlan from './../../../resources-red-onion/images/lunches/lunch1.png'
import FriedChickenBento from './../../../resources-red-onion/images/lunches/lunch2.png'
import TarragonRubbedSalmon from './../../../resources-red-onion/images/lunches/lunch3.png'
import IndianLunch from './../../../resources-red-onion/images/lunches/lunch4.png'
import BeefSteak from './../../../resources-red-onion/images/lunches/lunch5.png'
import HoneySoyGlazedSalmonwithPoppers from './../../../resources-red-onion/images/lunches/lunch6.png'
import { Row } from 'react-bootstrap';
import SingleLunch from '../../SingleLunch/SingleLunch';

const lunches = [
    { id: 'lunch1', name: 'Healthy Meal Plan', image: HealthyMealPlan, price: '$5.99', description: 'Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese ' },
    { id: 'lunch2', name: 'Fried Chicken Bento', image: FriedChickenBento, price: '$5.99', description: 'Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese ' },
    { id: 'lunch3', name: 'Tarragon Rubbed Salmon', image: TarragonRubbedSalmon, price: '$5.99', description: 'Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese ' },
    { id: 'lunch4', name: 'Indian Lunch', image: IndianLunch, price: '$5.99', description: 'Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese ' },
    { id: 'lunch5', name: 'Beef Steak', image: BeefSteak, price: '$5.99', description: 'Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese ' },
    { id: 'lunch6', name: 'Honey Soy Glazed Salmon with Poppers', image: HoneySoyGlazedSalmonwithPoppers, price: '$5.99', description: 'Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese ' },
]

const Lunch = () => {
    return (
        <div>
        <Row xs={1} md={2} lg={3} className="g-4">
        {
            lunches.map(lunch => (<SingleLunch key={lunch.id} lunch={lunch} />))
        }
        </Row>
        
    </div>
    );
};

export default Lunch;
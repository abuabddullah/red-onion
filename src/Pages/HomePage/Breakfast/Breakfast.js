import './Breakfast.css';
import React from 'react';
import BagelCreamCheese from './../../../resources-red-onion/images/breakfast/breakfast1.png'
import BreakfastSandwitch from './../../../resources-red-onion/images/breakfast/breakfast2.png'
import BakedChicken from './../../../resources-red-onion/images/breakfast/breakfast3.png'
import EggsBenedict from './../../../resources-red-onion/images/breakfast/breakfast4.png'
import ToastCroissantFriedEgg from './../../../resources-red-onion/images/breakfast/breakfast5.png'
import FullBreakfastFriedEggToastBrunch from './../../../resources-red-onion/images/breakfast/breakfast6.png'
import { Row } from 'react-bootstrap';
import SingleBreakfast from './../../SingleBreakfast/SingleBreakfast';


const breakfasts = [
    { id: 'breakfast1', name: 'Bagel Cream Cheese', image: BagelCreamCheese, price: '$5.99', description: 'Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese ' },
    { id: 'breakfast2', name: 'Breakfast Sandwitch', image: BreakfastSandwitch, price: '$5.99', description: 'Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese ' },
    { id: 'breakfast3', name: 'Baked Chicken', image: BakedChicken, price: '$5.99', description: 'Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese ' },
    { id: 'breakfast4', name: 'Eggs Benedict', image: EggsBenedict, price: '$5.99', description: 'Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese ' },
    { id: 'breakfast5', name: 'Toast Croissant Fried Egg', image: ToastCroissantFriedEgg, price: '$5.99', description: 'Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese ' },
    { id: 'breakfast6', name: 'Full Breakfast Fried Egg Toast Brunch', image: FullBreakfastFriedEggToastBrunch, price: '$5.99', description: 'Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese ' },
]


const Breakfast = () => {
    return (
        <div>
            <Row xs={1} md={2} lg={3} className="g-4">
            {
                breakfasts.map(breakfast => <SingleBreakfast key={breakfast.id} breakfast={breakfast} />)
            }
            </Row>
            
        </div>
    );
};

export default Breakfast;
import React from 'react';


import BagelCreamCheese from './../../../resources-red-onion/images/breakfast/breakfast1.png'
import BreakfastSandwitch from './../../../resources-red-onion/images/breakfast/breakfast2.png'
import BakedChicken from './../../../resources-red-onion/images/breakfast/breakfast3.png'
import EggsBenedict from './../../../resources-red-onion/images/breakfast/breakfast4.png'
import ToastCroissantFriedEgg from './../../../resources-red-onion/images/breakfast/breakfast5.png'
import FullBreakfastFriedEggToastBrunch from './../../../resources-red-onion/images/breakfast/breakfast6.png'


import HealthyMealPlan from './../../../resources-red-onion/images/lunches/lunch1.png'
import FriedChickenBento from './../../../resources-red-onion/images/lunches/lunch2.png'
import TarragonRubbedSalmon from './../../../resources-red-onion/images/lunches/lunch3.png'
import IndianLunch from './../../../resources-red-onion/images/lunches/lunch4.png'
import BeefSteak from './../../../resources-red-onion/images/lunches/lunch5.png'
import HoneySoyGlazedSalmonwithPoppers from './../../../resources-red-onion/images/lunches/lunch6.png'



import SalomonwithGrapefruitandLentilSalad from './../../../resources-red-onion/images/dinner/dinner1.png'
import LemonSalmonPiccata from './../../../resources-red-onion/images/dinner/dinner2.png'
import Frenchfrieswithcheese from './../../../resources-red-onion/images/dinner/dinner3.png'
import BeefTenderloinWithquinoaPilaf from './../../../resources-red-onion/images/dinner/dinner4.png'
import GarlicButterBakedSalmon from './../../../resources-red-onion/images/dinner/dinner5.png'
import BackedChicken from './../../../resources-red-onion/images/dinner/dinner6.png'



const breakfasts = [
    { id: 'breakfast1', name: 'Bagel Cream Cheese', image: BagelCreamCheese, price: '$5.99', description: 'Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese ' },
    { id: 'breakfast2', name: 'Breakfast Sandwitch', image: BreakfastSandwitch, price: '$5.99', description: 'Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese ' },
    { id: 'breakfast3', name: 'Baked Chicken', image: BakedChicken, price: '$5.99', description: 'Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese ' },
    { id: 'breakfast4', name: 'Eggs Benedict', image: EggsBenedict, price: '$5.99', description: 'Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese ' },
    { id: 'breakfast5', name: 'Toast Croissant Fried Egg', image: ToastCroissantFriedEgg, price: '$5.99', description: 'Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese ' },
    { id: 'breakfast6', name: 'Full Breakfast Fried Egg Toast Brunch', image: FullBreakfastFriedEggToastBrunch, price: '$5.99', description: 'Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese ' },
]






const lunches = [
    { id: 'lunch1', name: 'Healthy Meal Plan', image: HealthyMealPlan, price: '$5.99', description: 'Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese ' },
    { id: 'lunch2', name: 'Fried Chicken Bento', image: FriedChickenBento, price: '$5.99', description: 'Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese ' },
    { id: 'lunch3', name: 'Tarragon Rubbed Salmon', image: TarragonRubbedSalmon, price: '$5.99', description: 'Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese ' },
    { id: 'lunch4', name: 'Indian Lunch', image: IndianLunch, price: '$5.99', description: 'Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese ' },
    { id: 'lunch5', name: 'Beef Steak', image: BeefSteak, price: '$5.99', description: 'Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese ' },
    { id: 'lunch6', name: 'Honey Soy Glazed Salmon with Poppers', image: HoneySoyGlazedSalmonwithPoppers, price: '$5.99', description: 'Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese ' },
]





const dinners = [
    { id: 'dinner1', name: 'Salomon with Grapefruit and Lentil Salad', image: SalomonwithGrapefruitandLentilSalad, price: '$5.99', description: 'Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese ' },
    { id: 'dinner2', name: 'Lemon Salmon Piccata', image: LemonSalmonPiccata, price: '$5.99', description: 'Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese ' },
    { id: 'dinner3', name: 'Frenchfries with cheese', image: Frenchfrieswithcheese, price: '$5.99', description: 'Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese ' },
    { id: 'dinner4', name: 'Beef Tenderloin With Quinoa Pilaf', image: BeefTenderloinWithquinoaPilaf, price: '$5.99', description: 'Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese ' },
    { id: 'dinner5', name: 'Garlic Butter Baked Salmon', image: GarlicButterBakedSalmon, price: '$5.99', description: 'Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese ' },
    { id: 'dinner6', name: 'Backed Chicken', image: BackedChicken, price: '$5.99', description: 'Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese Bagel with cream cheese ' },
]


const useDatas = () => {
    return {breakfasts,lunches,dinners}
};

export default useDatas;
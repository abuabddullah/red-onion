import './FoodMenu.css';
import React from 'react';
import CustomLink4Home from '../Home/CustomLink4Home';

const FoodMenu = () => {
    return (

        <div className="text-center mx-auto fw-bold">
                        <CustomLink4Home className='text-dark text-decoration-none' to="breakfast">Breakfast</CustomLink4Home>
                        <CustomLink4Home className='text-dark text-decoration-none mx-4' to="lunch">Lunch</CustomLink4Home>
                        <CustomLink4Home className='text-dark text-decoration-none' to="dinner">Dinner</CustomLink4Home>
                    </div>
    );
};

export default FoodMenu;
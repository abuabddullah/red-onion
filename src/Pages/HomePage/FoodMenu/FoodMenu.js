import './FoodMenu.css';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const FoodMenu = () => {
    return (

        <>
            <section className='p-5'>
                <div className="container">
                    <div className="text-center mx-auto fw-bold">
                        <Link className='text-dark text-decoration-none' to="breakfast">Breakfast</Link>
                        <Link className='text-dark text-decoration-none mx-4' to="lunch">Lunch</Link>
                        <Link className='text-dark text-decoration-none' to="dinner">Dinner</Link>
                    </div>

                    <div className='my-5 p-4'>
                        <Outlet />
                    </div>
                </div>
            </section>
        </>
    );
};

export default FoodMenu;
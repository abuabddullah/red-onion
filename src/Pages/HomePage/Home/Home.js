import './Home.css';
import React from 'react';
import Banner from '../Banner/Banner';
import FoodMenu from '../FoodMenu/FoodMenu';
import { Link, Outlet } from 'react-router-dom';
import CustomLink4Home from './CustomLink4Home';
import { Button } from 'react-bootstrap';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner />

            <section className='p-5'>
                <div className="container">
                    <div className="text-center mx-auto fw-bold">
                        <CustomLink4Home className='text-dark text-decoration-none' to="breakfast">Breakfast</CustomLink4Home>
                        <CustomLink4Home className='text-dark text-decoration-none mx-4' to="lunch">Lunch</CustomLink4Home>
                        <CustomLink4Home className='text-dark text-decoration-none' to="dinner">Dinner</CustomLink4Home>
                    </div>

                    <div className='mt-5 p-4'>
                        <Outlet />
                    </div>

                    <div className='text-center my-5'>
                        <Button as={Link} to="/checkout" variant="danger" size="lg" className='rounded-pill px-3'><span className="me-2">Checkout Your Food</span> ↠ </Button>
                    </div>
                </div>
            </section>
            {/* <FoodMenu /> */}

            <WhyChooseUs />
        </div>
    );
};

export default Home;
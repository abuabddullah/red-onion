import './Home.css';
import React from 'react';
import Banner from '../Banner/Banner';
import FoodMenu from '../FoodMenu/FoodMenu';
import { Link, Outlet } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner />

            <section className='p-5'>
                <div className="container">


                    <FoodMenu />

                    <div className='mt-5 p-4'>
                        <Outlet />
                    </div>

                    <div className='text-center my-5'>
                        <Button as={Link} to="/checkout" variant="danger" size="lg" className='rounded-pill px-3'><span className="me-2">Checkout Your Food</span> ↠ </Button>
                    </div>
                </div>
            </section>

            <WhyChooseUs />
        </div>
    );
};

export default Home;
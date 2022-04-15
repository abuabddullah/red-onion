import './Footer.css';
import React from 'react';
import logo from './../../../resources-red-onion/images/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='p-5 bg-dark'>
            <div className="container">
                <div className="row py-2">
                    <div className="col-12 col-lg-6 mb-5">

                        <Link to='/'>
                            <img
                                src={logo}
                                // width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="Red-Onion"
                            />
                        </Link>
                    </div>
                    <div className="col-12 col-lg-3">
                        <ul className="list-unstyled">
                            <li><Link className='text-decoration-none text-white' to='/onlinefood'>About online food</Link></li>
                            <li><Link className='text-decoration-none text-white' to='/ourblog'>Read our blog</Link></li>
                            <li><Link className='text-decoration-none text-white' to='/signup'>Sign up to delivery</Link></li>
                            <li><Link className='text-decoration-none text-white' to='/addrestaurent'>Add your restaurent</Link></li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-3">
                        <ul className="list-unstyled">
                            <li><Link className='text-decoration-none text-white' to='/gethelp'>Get help</Link></li>
                            <li><Link className='text-decoration-none text-white' to='/faq'>Read FAQs</Link></li>
                            <li><Link className='text-decoration-none text-white' to='/viewcities'>View all cities</Link></li>
                            <li><Link className='text-decoration-none text-white' to='/nearrestaurent'>Restaurents near me</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="row py-2 justify-content-end align-items-center">
                    <div className="col-12 col-lg-2">
                    <Link className='text-decoration-none text-white' to='/privacy'>Privacy Policy.</Link> 
                    </div>
                    <div className="col-12 col-lg-2">
                    <Link className='text-decoration-none text-white' to='/termsofuse'>Terms of use</Link> 
                    </div>
                    <div className="col-12 col-lg-2">
                    <Link className='text-decoration-none text-white' to='/pricing'>Pricing</Link> 
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
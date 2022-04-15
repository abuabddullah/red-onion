import './NavBar.css';
import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './../../../resources-red-onion/images/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CustomLink } from './CustomLink';

const NavBar = () => {
    return (
        <Navbar className='p-3' collapseOnSelect expand="lg" bg="white" variant="light" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={logo}
                        // width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Red-Onion"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto fw-bold">
                        <Nav.Link as={CustomLink} to="/carts">
                        <FontAwesomeIcon icon={faCartShopping} />
                        </Nav.Link>
                        <Nav.Link className='mx-lg-4' as={CustomLink} to="/login">Login</Nav.Link>
                        <Button className='rounded-pill px-3 text-white' as={Link} to="/signup" variant="danger">Sign up</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
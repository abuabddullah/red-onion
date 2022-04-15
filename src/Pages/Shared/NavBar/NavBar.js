import './NavBar.css';
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './../../../resources-red-onion/images/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CustomLink } from './CustomLink';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Loading/Loading';
import { Datas4Context } from '../../../App';

const NavBar = () => {
    const {carts,setCarts,addToCarts} = useContext(Datas4Context);
    const [user, loading, error] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
        toast('Signed out');
    }

    if (loading) {
        return <Loading />
    }

    if (error) {
        toast.error(error.message);
    }



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
                            <FontAwesomeIcon icon={faCartShopping} />({carts.length})
                        </Nav.Link>


                        {
                            !user ? <><Nav.Link className='mx-lg-4' as={CustomLink} to="/login">Login</Nav.Link>
                                <Button className='rounded-pill px-3 text-white' as={Link} to="/signup" variant="danger">Sign up</Button></> : <>
                                <Nav.Link className='mx-lg-4' as={CustomLink} to="/profile">{user?.user?.displayName}</Nav.Link>
                                <Button onClick={handleSignOut} className='rounded-pill px-3 text-white' variant="danger">Sign out</Button>
                            </>
                        }



                        <ToastContainer />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
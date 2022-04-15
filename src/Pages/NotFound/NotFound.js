import './NotFound.css';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='p-5'>
            <h1 className='p-5 m-5 text-center text-danger bg-warning rounded-3 w-75 mx-auto'>404 ! Not found</h1>


            <div className="m-5 text-center">
                <Button className='rounded-pill px-5' as={Link} to='/home' variant="danger" size="lg">
                ↞<span className='ms-2'>Go Back to Home</span>
                </Button>
            </div>
        </div>
    );
};

export default NotFound;
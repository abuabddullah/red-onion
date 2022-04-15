import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='p-5 d-flex align-items-center justify-content-center'>
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" />
        <Spinner animation="grow" />
        <Spinner animation="grow" size="sm" />
        </div>
    );
};

export default Loading;
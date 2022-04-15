import './SingleBreakfast.css';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleBreakfast = ({breakfast}) => {
    const { id, name, image, price, description } = breakfast || {};
    return (
        <Col>
            <Card className='px-4 py-2 border-0 hoverShadow'>
                <Card.Img variant="top" src={image} />
                <Card.Body className='mt-3 text-center minH'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        How we dream about our future
                    </Card.Text>
                    <h2>{price}</h2>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleBreakfast;
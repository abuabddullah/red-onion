import './SingleDinner.css';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleDinner = ({dinner}) => {
    const { id, name, image, price, description } = dinner || {};
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

export default SingleDinner;
import './SingleFeature.css';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleFeature = ({feature}) => {
    const { id, title, description, image, icon } = feature || {};
    return (
        <Col>
            <Card className='pb-2 border-0 hoverShadow'>
                <Card.Img style={{minHeight : "400px", objectFit: "cover", borderRadius: "10px"}} variant="top" src={image} />
                <Card.Body className='row mt-3 minH'>
                    <div className="col-3">
                        <img src={icon} alt="icon" className="img-fluid" />
                    </div>
                    <div className="col-9">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 50)}
                    </Card.Text>
                    <Link className='text-decoration-none' to={`/features/${id}`}> Read More <span className='bg-info rounded-pill text-white px-1'>→</span></Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleFeature;
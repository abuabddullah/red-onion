import { Carousel } from 'bootstrap';
import React from 'react';

const SingleCarouselItem = ({item}) => {
    const { description, name, image, price } = item || {}
    return (

        <Carousel.Item>
            <img
                className="d-block w-100"
                src={image}
                alt={name}
            />
            <Carousel.Caption>
                <h3>{name}</h3>
                <p>{description.slice(0,20)+"..."}</p>
            </Carousel.Caption>
        </Carousel.Item>
    );
};

export default SingleCarouselItem;
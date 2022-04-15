import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import SingleCarouselItem from '../SingleCarouselItem/SingleCarouselItem';

const ItemCarosel = ({ restsItems }) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {
                restsItems.map((item, index) => <SingleCarouselItem key={index} item={item} />)
            }
            {/* <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item> */}
            
        </Carousel>
    );
};

export default ItemCarosel;
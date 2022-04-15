import './FoodsCarousel.css';
import React from 'react';
import dinner1 from './../../resources-red-onion/images/dinner/dinner1.png'
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const FoodsCarousel = ({ restFoods }) => {
    const navigate = useNavigate();
    let restFoods0 = restFoods[0]
    let restFoods1 = restFoods[1]
    let restFoods2 = restFoods[2]
    let restFoods3 = restFoods[3]
    let restFoods4 = restFoods[4]


    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <div className="row">
                    <div className="col-6">
                    <img onClick={() => navigate(`/fooddetails/${restFoods0.id}`)}
                    className="d-block w-100"
                    src={restFoods0.image}
                    alt="First slide"
                />
                    </div>
                    
                    <div className="col-6">
                    <img onClick={() => navigate(`/fooddetails/${restFoods1.id}`)}
                    className="d-block w-100"
                    src={restFoods1.image}
                    alt="First slide"
                />
                    </div>                    
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="row">
                    <div className="col-6">
                    <img onClick={() => navigate(`/fooddetails/${restFoods2.id}`)}
                    className="d-block w-100"
                    src={restFoods2.image}
                    alt="First slide"
                />
                    </div>

                    <div className="col-6">
                    <img onClick={() => navigate(`/fooddetails/${restFoods3.id}`)}
                    className="d-block w-100"
                    src={restFoods3.image}
                    alt="First slide"
                />
                    </div>                    
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="row">
                    <div className="col-3">
                    
                    </div>

                    <div className="col-6">
                    <img onClick={() => navigate(`/fooddetails/${restFoods4.id}`)}
                    className="d-block w-100"
                    src={restFoods4.image}
                    alt="First slide"
                />
                    </div>                    
                </div>
            </Carousel.Item>
            
            
        </Carousel>
    );
};

export default FoodsCarousel;
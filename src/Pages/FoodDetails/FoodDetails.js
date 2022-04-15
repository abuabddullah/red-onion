import './FoodDetails.css';
import React, { useContext, useState } from 'react';
import useDatas from '../cutomHooks/useDatas/useDatas';
import { useParams } from 'react-router-dom';
import { Button, Card, FormControl, InputGroup } from 'react-bootstrap';
import { Datas4Context } from '../../App';
import FoodsCarousel from '../FoodsCarousel/FoodsCarousel';

const FoodDetails = () => {
    const { carts, setCarts, addToCarts } = useContext(Datas4Context);
    const { breakfasts, lunches, dinners } = useDatas()
    let [quantity, setQuantity] = useState(0);


    const { id } = useParams()

    let checkedFood;
    let restFoods;
    if (id.includes('breakfast')) {
        checkedFood = breakfasts.find(b => b.id === id)
        restFoods = breakfasts.filter(b => b.id !== id)
    } else if (id.includes('lunch')) {
        checkedFood = lunches.find(b => b.id === id)
        restFoods = lunches.filter(b => b.id !== id)
    } else if (id.includes('dinner')) {
        checkedFood = dinners.find(b => b.id === id)
        restFoods = dinners.filter(b => b.id !== id)
    }

    // console.log(checkedFood);
    // console.log(restFoods);

    const { description, name, image, price } = checkedFood || {}


    const isIncreaseQty = (param) => {
        if (param === true) {
            setQuantity(quantity + 1)
        } else {
            setQuantity(quantity - 1)
            if (quantity < 1) {
                setQuantity(0)
            }
        }
    }

    return (
        <section className='p-5'>
            <div className="container">
                <div className="row  d-flex align-items-center">
                    <div className="col-md-6 order-2 order-md-1">
                        <Card className='border-0  pe-md-5'>
                            <Card.Body>
                                <Card.Title className='fs-1'>{name}</Card.Title>
                                <Card.Text>
                                    {description}
                                </Card.Text>
                                <div className='d-flex mt-4'>
                                    <h2>{price}</h2>

                                    <InputGroup className="mb-3 ms-3">
                                        <InputGroup.Text onClick={() => isIncreaseQty(true)} className="bg-danger text-white fw-bold rounded-pill cursor-pointer position-absolute start-0 z-20 px-2 px-md-4 px-lg-5">+</InputGroup.Text>
                                        <FormControl className='text-center d-inline-block rounded-pill postion-relative' placeholder='1'
                                            value={quantity} />
                                        <InputGroup.Text onClick={() => isIncreaseQty(false)} className="bg-danger text-white fw-bold rounded-pill cursor-pointer position-absolute end-0 z-20 px-2 px-md-4 px-lg-5">-</InputGroup.Text>
                                    </InputGroup>
                                </div>
                                <Button className='rounded-pill px-3 text-white' variant="danger" onClick={() => addToCarts(checkedFood)}>Add to cart</Button>
                            </Card.Body>
                        </Card>



                        <div className="row mt-5">
                            <FoodsCarousel
                                restFoods={restFoods} />
                        </div>

                    </div>
                    <div className="col-md-6  order-1 order-md-2 mb-5 m-lg-0">
                        <img src={image} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoodDetails;
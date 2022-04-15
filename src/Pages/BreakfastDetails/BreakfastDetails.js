import './BreakfastDetails.css';
import React, { useState } from 'react';
import useDatas from '../cutomHooks/useDatas/useDatas';
import { useParams } from 'react-router-dom';
import { Button, Card, FormControl, InputGroup } from 'react-bootstrap';
import ItemCarosel from '../ItemCarosel/ItemCarosel';

const BreakfastDetails = () => {
    let [quantity, setQuantity] = useState(0);
    const { breakfasts } = useDatas()
    const { id } = useParams()
    const getBreakFastItem = breakfasts.find(b => b.id === id)
    // console.log(getBreakFastItem);
    const { description, name, image, price } = getBreakFastItem || {}

    const restsItems = breakfasts.filter(b => b.id !== id)
    // console.log(restsItems);

    const isIncreaseQty = (parm) => {
        if (parm === true) {
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
                                        <InputGroup.Text onClick={() => isIncreaseQty(true)}>+</InputGroup.Text>
                                        <FormControl className='text-center d-inline-block' placeholder='1'
                                        value={quantity} />
                                        <InputGroup.Text onClick={() => isIncreaseQty(false)}>-</InputGroup.Text>
                                    </InputGroup>
                                </div>
                                <Button className='rounded-pill px-3 text-white' variant="danger">Add to cart</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-6  order-1 order-md-2 mb-5 m-lg-0">
                        <img src={image} alt="" className='img-fluid' />
                    </div>
                </div>

                <div className="row">
                    {/* <ItemCarosel restsItems={restsItems} /> */}
                </div>
            </div>
        </section>
    );
};

export default BreakfastDetails;
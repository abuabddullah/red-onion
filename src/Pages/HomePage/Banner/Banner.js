import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

const Banner = () => {
    return (
        
        <section id='banner' className='d-flex align-items-center p-5'>
            <div className="container p-5 my-5">
            <h2 className="fw-bold text-center mb-3">
                Best food waiting for your belly
            </h2>

            <div className=' w-75 mx-auto'>
                <InputGroup className="mb-3">
                    <FormControl
                    className='rounded-pill position-relative'
                        placeholder="Food's name"
                        aria-label="Food's name"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text className='rounded-pill bg-danger border-0 text-white px-3 position-absolute end-0 p-2' id="basic-addon2">Search</InputGroup.Text>
                </InputGroup>
            </div>
            </div>


        </section>
    );
};

export default Banner;
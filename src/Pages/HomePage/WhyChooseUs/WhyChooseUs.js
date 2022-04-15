import './WhyChooseUs.css'
import React from 'react';
import SpecialFeatures from '../SpecialFeatures/SpecialFeatures';

const WhyChooseUs = () => {
    return (
        <section className='p-5'>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12 col-lg-5 text-center text-lg-start ">
                        <h2 className='fw-bold'>Why You Choose Us ?</h2>
                        <p className=''>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed euismod, urna eu tincidunt consectetur.
                        </p>
                    </div>
                </div>
                <SpecialFeatures />
            </div>
            
        </section>
    );
};

export default WhyChooseUs;
import './SpecialFeatures.css';
import React from 'react';
import Chef from './../../../resources-red-onion/images/chef-cook-food-33614.png'
import BellIcon from './../../../resources-red-onion/images/icons/Group 1133.png'
import Waiter from './../../../resources-red-onion/images/adult-blur-blurred-background-687824.png'
import servIcon from './../../../resources-red-onion/images/icons/Group 204.png'
import DeliveryBoy from './../../../resources-red-onion/images/architecture-building-city-2047397.png'
import DeliveryIcon from './../../../resources-red-onion/images/icons/Group 245.png'
import { Row } from 'react-bootstrap';
import SingleFeature from '../SingleFeature/SingleFeature';

const specialFeatures = [
    { id:'feature1', title:'Chef Cook', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur.', image:Chef, icon:BellIcon },
    { id:'feature2', title:'Waiter', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur.', image:Waiter, icon:servIcon },
    { id:'feature3', title:'Delivery', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur.', image:DeliveryBoy, icon:DeliveryIcon },
]

const SpecialFeatures = () => {
    return (
        <section className='mb-5'>
            
        <Row xs={1} md={2} lg={3} className="g-4">
        {
            specialFeatures.map(feature => (<SingleFeature key={feature.id} feature={feature} />))
        }
        </Row>
        </section>
    );
};

export default SpecialFeatures;
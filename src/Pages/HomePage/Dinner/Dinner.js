import './Dinner.css';
import React from 'react';
import { Row } from 'react-bootstrap';
import SingleDinner from '../../SingleDinner/SingleDinner';
import useDatas from '../../cutomHooks/useDatas/useDatas';



const Dinner = () => {
    const {dinners} = useDatas()
    return (
        <div>
        <Row xs={1} md={2} lg={3} className="g-4">
        {
            dinners.map(dinner => (<SingleDinner dinner={dinner} key={dinner.id} />))
        }
        </Row>
        
    </div>
    );
};

export default Dinner;
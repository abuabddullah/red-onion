import './Breakfast.css';
import React from 'react';
import { Row } from 'react-bootstrap';
import SingleBreakfast from './../../SingleBreakfast/SingleBreakfast';
import useDatas from '../../cutomHooks/useDatas/useDatas';


const Breakfast = () => {
    const {breakfasts} = useDatas()
    return (
        <div>
            <Row xs={1} md={2} lg={3} className="g-4">
            {
                breakfasts.map(breakfast => <SingleBreakfast key={breakfast.id} breakfast={breakfast} />)
            }
            </Row>
            
        </div>
    );
};

export default Breakfast;
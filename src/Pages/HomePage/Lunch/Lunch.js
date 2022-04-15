import './Lunch.css';
import React from 'react';
import { Row } from 'react-bootstrap';
import SingleLunch from '../../SingleLunch/SingleLunch';
import useDatas from '../../cutomHooks/useDatas/useDatas';


const Lunch = () => {
    const {lunches} = useDatas()
    return (
        <div>
        <Row xs={1} md={2} lg={3} className="g-4">
        {
            lunches.map(lunch => (<SingleLunch key={lunch.id} lunch={lunch} />))
        }
        </Row>
        
    </div>
    );
};

export default Lunch;
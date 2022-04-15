// import './FoodMenu.css';
// import React from 'react';
// import CustomLink4Home from '../Home/CustomLink4Home';

// const FoodMenu = () => {
//     return (

//         <div className="text-center mx-auto fw-bold">
//                         <CustomLink4Home className='text-dark text-decoration-none' to="breakfast">Breakfast</CustomLink4Home>
//                         <CustomLink4Home className='text-dark text-decoration-none mx-4' to="lunch">Lunch</CustomLink4Home>
//                         <CustomLink4Home className='text-dark text-decoration-none' to="dinner">Dinner</CustomLink4Home>
//                     </div>
//     );
// };

// export default FoodMenu;




import './FoodMenu.css';
import React, { useContext, useState } from 'react';
import useDatas from '../../cutomHooks/useDatas/useDatas';
import { Datas4Context } from '../../../App';
import { Row } from 'react-bootstrap';
import SingleFood from '../../SingleFood/SingleFood';

const FoodMenu = () => {
    const { breakfasts, lunches, dinners } = useContext(Datas4Context);
    const [foods, setFoods] = useState(lunches);

    const loadFoods = (e) => {
        let items = e.target.innerHTML.toLowerCase();
        if (items === "breakfasts") {
            setFoods(breakfasts)
        } else if (items === "lunches") {
            setFoods(lunches)
        } else if (items === "dinners") {
            setFoods(dinners)
        }
    }

    // console.log(foods);

    return (

        <div className="text-center mx-auto fw-bold">
            <span onClick={loadFoods} className='cursor-pointer text-dark text-decoration-none'>Breakfasts</span>
            <span onClick={loadFoods} className='cursor-pointer text-dark text-decoration-none mx-4'>Lunches</span>
            <span onClick={loadFoods} className='cursor-pointer text-dark text-decoration-none'>Dinners</span>

            <div className="mt-5 p-4">

            <Row xs={1} md={2} lg={3} className="g-4">
            {
                foods.map(food => <SingleFood key={food.id} food={food} />)
            }
            </Row>
            </div>
        </div>
    );
};

export default FoodMenu;
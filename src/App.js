// import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import NotFound from './Pages/NotFound/NotFound';
// import Home from './Pages/HomePage/Home/Home';
// import NavBar from './Pages/Shared/NavBar/NavBar';
// import Footer from './Pages/Shared/Footer/Footer';
// // import FoodMenu from './Pages/HomePage/FoodMenu/FoodMenu';
// import Breakfast from './Pages/HomePage/Breakfast/Breakfast';
// import Lunch from './Pages/HomePage/Lunch/Lunch';
// import Dinner from './Pages/HomePage/Dinner/Dinner';
// import Signup from './Pages/Login-Signup pages/Signup/Signup';
// import Login from './Pages/Login-Signup pages/Login/Login';
// import { createContext } from 'react';
// import useDatas from './Pages/cutomHooks/useDatas/useDatas';
// import BreakfastDetails from './Pages/BreakfastDetails/BreakfastDetails';



// export const Datas4Context = createContext()


// function App() {
//   const {breakfasts,lunches,dinners} = useDatas()


//   return (
//     <Datas4Context.Provider value={{breakfasts,lunches,dinners}}>
//     <div className="mainApp">
//       <NavBar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} >
//           <Route path='breakfast' element={<Breakfast />} />
//           <Route path='lunch' element={<Lunch />} />
//           <Route path='dinner' element={<Dinner />} />
//         </Route>

        
//         <Route path='/breakfastdetails/:id' element={<BreakfastDetails />} />

//           <Route path='login' element={<Login />} />
//           <Route path='signup' element={<Signup />} />

//         <Route path="*" element={<NotFound />} />
//       </Routes>

//       <Footer />
//     </div>
//     </Datas4Context.Provider>
//   );
// }

// export default App;








import './App.css';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/HomePage/Home/Home';
import NavBar from './Pages/Shared/NavBar/NavBar';
import Footer from './Pages/Shared/Footer/Footer';
import Signup from './Pages/Login-Signup pages/Signup/Signup';
import Login from './Pages/Login-Signup pages/Login/Login';
import { createContext, useState } from 'react';
import useDatas from './Pages/cutomHooks/useDatas/useDatas';
import FoodDetails from './Pages/FoodDetails/FoodDetails';
import Carts from './Pages/Carts/Carts';
import RequireAuth from './Pages/Login-Signup pages/RequireAuth/RequireAuth';
import Checkout from './Pages/Checkout/Checkout';



export const Datas4Context = createContext()


function App() {
  const {breakfasts,lunches,dinners} = useDatas()
  const [carts,setCarts] = useState([])


  const addToCarts = (item) => {
    const newCarts = [...carts,item]
    setCarts(newCarts)
  }

  return (
    <Datas4Context.Provider value={{breakfasts,lunches,dinners,carts,setCarts,addToCarts}}>
    <div className="mainApp">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />        
        <Route path='/fooddetails/:id' element={<FoodDetails />} />

          <Route path='carts' element={
            <RequireAuth>
            <Carts />
            </RequireAuth>
          } />
          <Route path='checkout' element={
            <RequireAuth>
            <Checkout />
            </RequireAuth>
          } />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
    </Datas4Context.Provider>
  );
}

export default App;


import './App.css';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/HomePage/Home/Home';
import NavBar from './Pages/Shared/NavBar/NavBar';
import Footer from './Pages/Shared/Footer/Footer';
// import FoodMenu from './Pages/HomePage/FoodMenu/FoodMenu';
import Breakfast from './Pages/HomePage/Breakfast/Breakfast';
import Lunch from './Pages/HomePage/Lunch/Lunch';
import Dinner from './Pages/HomePage/Dinner/Dinner';
import Signup from './Pages/Login-Signup pages/Signup/Signup';
import Login from './Pages/Login-Signup pages/Login/Login';
import { createContext } from 'react';
import useDatas from './Pages/cutomHooks/useDatas/useDatas';
import BreakfastDetails from './Pages/BreakfastDetails/BreakfastDetails';



export const Datas4Context = createContext()


function App() {
  const {breakfasts,lunches,dinners} = useDatas()


  return (
    <Datas4Context.Provider value={{breakfasts,lunches,dinners}}>
    <div className="mainApp">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} >
          <Route path='breakfast' element={<Breakfast />} />
          <Route path='lunch' element={<Lunch />} />
          <Route path='dinner' element={<Dinner />} />
        </Route>

        
        <Route path='/breakfastdetails/:id' element={<BreakfastDetails />} />

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

import logo from './logo.svg';
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

function App() {
  return (
    <div className="mainApp">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} >
          <Route path='breakfast' element={<Breakfast />} />
          <Route path='lunch' element={<Lunch />} />
          <Route path='dinner' element={<Dinner />} />
        </Route>

        {/* <Route path="/home/foodmenu" element={<FoodMenu />} >
          <Route path='breakfast' element={<Breakfast />} />
          <Route path='lunch' element={<Lunch />} />
          <Route path='dinner' element={<Dinner />} />
        </Route> */}

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

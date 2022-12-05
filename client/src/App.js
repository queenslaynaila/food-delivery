import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login';
import Home from './components/Home'
import Restaurantcard from './components/Restaurantcard'
import Foodcard from './components/ Foodcard';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {




  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/testing" element={<h1>Test Route</h1>}/>
          <Route path="/" element={ <Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/restaurant' element={<Restaurantcard/>}/>
          <Route path='/food' element={<Foodcard/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

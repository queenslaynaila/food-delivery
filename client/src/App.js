import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login';
import Home from './components/Home'
import { useState,useEffect } from 'react';
import Restaurantcard from './components/Restaurantcard'
import Foodcard from './components/ Foodcard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Restaurantlist from './components/Restaurantlist';
import Signup from './components/Signup';
import Menulist from './components/Menulist';
import Restaurant from './components/Restaurant';

function App() {
  const [user,setUser] = useState(null)
  useEffect(()=>{
    fetch("/me").then((r)=>{
      if(r.ok){
        r.json().then((user)=>setUser(user))
      }
    })
  },[])


  return (
    <BrowserRouter>
      <Navbar user={user} setUser={setUser}/>
        <Routes>
          <Route path="/testing" element={<Restaurant/>}/>
          <Route path="/" element={ <Home/>}/>
          <Route path='/login' element={<Login onLogin={setUser}/>}/>
          <Route path='/restaurant' element={<Restaurantlist/>}/>
          <Route path='/restaurantcard' element={<Restaurantcard/>}/>
          <Route path='/food' element={<Foodcard/>}/>
          <Route path='/foodlist' element={<Menulist/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

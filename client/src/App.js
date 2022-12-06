import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login';
import Home from './components/Home'
import { useState,useEffect } from 'react';
import Restaurantcard from './components/Restaurantcard'
import Foodcard from './components/ Foodcard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Foodlist from './components/Foodlist';
import Signup from './components/Signup';
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
          <Route path="/testing" element={<h1>Test Route</h1>}/>
          <Route path="/" element={ <Home/>}/>
          <Route path='/login' element={<Login onLogin={setUser}/>}/>
          <Route path='/restaurant' element={<Restaurantcard/>}/>
          <Route path='/food' element={<Foodcard/>}/>
          <Route path='/foodlist' element={<Foodlist/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

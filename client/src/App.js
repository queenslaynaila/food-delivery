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
import Cart from './components/Cart';
import Foodcloseup from './components/Foodcloseup';
function App() {
  const [user,setUser] = useState(null)
  const [menus,setMenus] = useState([])
  const [food,setFoods] = useState([])
    useEffect(()=>{
        fetch("/menus").then((r)=>{

            r.json().then((res)=>setFoods(res))


        })
      },[])
  useEffect(()=>{
    fetch("/me").then((r)=>{
      if(r.ok){
        r.json().then((user)=>setUser(user))
      }
    })
  },[])
  useEffect(()=>{
    fetch("/restaurants").then((r)=>{
        r.json().then((res)=>setMenus(res))
    })
  },[])
  

  return (
    <BrowserRouter>
      <Navbar user={user} setUser={setUser}/>
        <Routes>
          <Route path="/testing" element={<Restaurant/>}/>
          <Route path="/" element={ <Home/>}/>
          <Route path='/login' element={<Login onLogin={setUser}/>}/>
          <Route path='/restaurant' element={<Restaurantlist menus={menus}/>}/>
          <Route path='/restaurant/:id' element={<Restaurant restaurants={menus}/>}/>


          <Route path='/food' element={<Foodcard/>}/>
          <Route path='/foodlist' element={<Menulist menus={food}/>}/>

          <Route path='/foodlist/:id' element={<Foodcloseup menus={food}/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

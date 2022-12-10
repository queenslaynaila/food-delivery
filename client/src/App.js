import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login';
import Home from './components/Home'
import { useState,useEffect } from 'react';

import Foodcard from './components/ Foodcard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Restaurantlist from './components/Restaurantlist';
import Signup from './components/Signup';
import Menulist from './components/Menulist';
import Restaurant from './components/Restaurant';
import Cart from './components/Cart';
import Foodcloseup from './components/Foodcloseup';
import Checkout from './components/Checkout';
function App() {
  const [menus,setMenus] = useState([])
  const [food,setFoods] = useState([])
  const [order,setOrders] = useState([])
  useEffect(()=>{
    fetch("/restaurants").then((r)=>{
        r.json().then((res)=>setMenus(res))
    })
  },[])
    useEffect(()=>{
        fetch("/menus").then((r)=>{

            r.json().then((res)=>setFoods(res))


        })
      },[])

      function handleOrders(childData){

        setOrders(order.concat(childData))
      }
      const [user,setUser] = useState(null)

  useEffect(()=>{
    fetch("/me").then((r)=>{
      if(r.ok){
        r.json().then((user)=>setUser(user))
      }
    })
  },[])

  function handleLikes(updatedRestaurant){
    setMenus((menus) =>
      menus.map((menu) => {
        return  menu.id === updatedRestaurant.id ? updatedRestaurant : menu;
      })
    );
  }



  return (
    <BrowserRouter>
      <Navbar user={user} setUser={setUser} order={order}/>
        <Routes>
          <Route path="/testing" element={<Restaurant/>}/>
          <Route path="/" element={ <Home />}/>
          <Route path='/login' element={<Login onLogin={setUser}/>}/>
          <Route path='/restaurant' element={<Restaurantlist onLike={handleLikes} user={user} menus={menus}/>}/>
          <Route path='/restaurant/:id' element={<Restaurant   restaurants={menus} user={user}/>}/>


          <Route path='/food' element={<Foodcard handleOrders={handleOrders} />}/>
          <Route path='/foodlist' element={<Menulist handleOrders={handleOrders} menus={food}/>}/>

          <Route path='/foodlist/:id' element={<Foodcloseup menus={food} handleOrders={handleOrders}/>}/>
          <Route path='/signup' element={<Signup onLogin={setUser}/>}/>
          <Route path='/cart' element={<Cart order={order}/>}/>
          <Route path='/checkout' element={<Checkout></Checkout>}></Route>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

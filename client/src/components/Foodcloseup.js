import React from 'react'
import { useParams } from 'react-router-dom'

import '../styles/close.css'
export default function Foodcloseup({menus,handleOrders}) {

  const params= useParams()
  const reschosen = menus.find((res) => res.id === Number(params.id));
  function addToCart(){

    handleOrders(reschosen)


 }
  return (
    <div className='ProductDetail'>
    <h1 className='pagetitle'>{reschosen.restaurant.name}</h1>
    <div className='Item' >
        <div className='productImage'>
            <img src={reschosen.image_url} alt="" />
        </div>
        <div className='Description'>
            <h1>{reschosen.menu_name}</h1>
            <h2>Category:{reschosen.category.category_name}  </h2>
            <h2>KES:{reschosen.price} </h2>
            <p>{reschosen.description}</p>
            <div style={{gap:"5px"}}>
                <button  onClick={addToCart} className="addTOCart__btn"  >ORDER</button>
                <button  className="addTOCart__btn" >CHECKOUT</button>
            </div>
        </div>
    </div>

</div>

  )
}


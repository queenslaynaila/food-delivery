import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/restaurantcard.css'
import { useState  } from 'react';
import {  Col  } from "reactstrap";

export default function  Foodcard({handleOrders,menu }) {

  const [ordered, setOrdered] = useState(false)


  function addToCart(){
 
     setOrdered(!ordered)
     handleOrders(menu)


  }
  return (

<Col  lg="3" md="4" sm="6" xs="6"  className="mt-5">
<div className="product__item"    >
      <div className="product__img">
        <img src={menu.image_url} alt="product-img" className="w-50 h-50" />
      </div>

      <div className="product__content">
        <h5>
          <Link  to={`/foodlist/${menu.id}`}>{menu.menu_name}</Link>
        </h5>
        <div className=" d-flex align-items-center justify-content-between ">
          <span className="product__price">KES:{menu.price}</span>
          <button onClick={addToCart} className="addTOCart__btn"  >
            ORDER
          </button>
        </div>
      </div>
    </div>
</Col>

  )
}

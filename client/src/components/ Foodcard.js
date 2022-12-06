import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/restaurantcard.css'
export default function  Foodcard() {
  const menu =
    {
      menu_name:"Streetwise 1",
      category_id:2,
      restaurant_id:1,
      description:"1 Chicken Piece with Regular Chips",
      price:370,
      image_url:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9hODRiYmJhZi01MjY0LTRmNmYtYmY0MC1jODVhMzc0ZDFkZmIuanBlZw==",
      status:"available"
    }


  return (
     <>

<div className="explore-card cur-po">
      <div className="explore-card-cover">
        <img
          src={menu.image_url}
          className="explore-card-image"
          alt={menu.menu_name}
        />
        <div className="delivery-time">30</div>

      </div>
      <div className="res-row">
        <div className="res-name">{menu.menu_name}</div>

          <div className="res-rating absolute-center">
            {menu.price} <i className="fi fi-sr-star absolute-center" />
          </div>

      </div>
      <div className="res-row">

        <div className="res-price">{menu.price}</div>
      </div>

    </div>

     </>
  )
}

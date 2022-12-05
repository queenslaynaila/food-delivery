import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/foodcard.css'
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

       <div className='product_item'>
         <div className='product_img'>
            <img src={menu.image_url} className="w-50"></img>

         </div>
         <div className='product_content'>
          <h5>
            <Link to="/">{menu.menu_name}</Link>
          </h5>
          <div className='d-flex align-items-center justify-content-between'>
            <span className='product_price'>$100</span>
            <button className='addToCart_btn'>Add to cart</button>
          </div>
         </div>
       </div>
      
     </>
  )
}

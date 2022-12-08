 import React from 'react'
 import { Card,CardImg,CardBody, CardTitle,CardText,Row} from 'reactstrap'
 import '../styles/l.css'
 import { useState,useEffect } from 'react';
 import Foodcard from './ Foodcard'
 import { useParams,Link } from 'react-router-dom'
import Menulist from './Menulist';
export default function Restaurant({restaurants}) {
  const params= useParams()
  const reschosen = restaurants.find((res) => res.id === Number(params.id));

  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(reschosen );


  const data = "holder.js/100px180"


  return (

    <>
    <Card   className="my-2 ">
      <CardImg
        alt="Card image cap rescard"
        src={reschosen.image_url}
        style={{
          height: 180

        }}
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">
           {reschosen.name}
        </CardTitle>
        <CardText>
           {reschosen.description}
        </CardText>


      </CardBody>
    </Card>
     <div className='mainbar'>
      <div className='sidebar'>
        <h2>Categories</h2>
        <a href='/'>Pizza</a>
        <a href='/'>Fastfood</a>
        <a href='/'>Drinks</a>
        <a href='/'>Coffee</a>
        <a href='/'>Chicken</a>
        <a href='/'>Burgers</a>
        <a href='/'>Snacks</a>
        <a href='/'>Sharing</a>
      </div>
      <div className='content'>
        <h2>Menus</h2>
        
      </div>
      </div>


  </>
  )
}


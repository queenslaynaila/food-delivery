 import React from 'react'
 import { Card,CardImg,CardBody, CardTitle,CardText,Row,Col} from 'reactstrap'
 import '../styles/l.css'
 import { useState,useEffect } from 'react';
 import Foodcard from './ Foodcard'
 import { useParams,Link } from 'react-router-dom'
import Menulist from './Menulist';
export default function Restaurant({restaurants}) {
   const params= useParams()
  //  console.log(restaurants[0].menus[0])

  const reschosen = restaurants.find((res) => res.id === Number(params.id));
   const menus = reschosen.menus
   console.log(menus)


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
        <section className="pt-0">
        <Row>
      {menus ? menus.map((item)=>{
         return <Foodcard menu={item}></Foodcard>
      }):<h1>There are no menus for this restaurnt yet</h1>}
      </Row>
      </section>
      </div>
    </div>



  </>
  )
}


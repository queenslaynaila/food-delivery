import React from 'react'
import { useState,useEffect } from 'react'
 import '../styles/p.css'
 import Restaurantcard from './Restaurantcard'
 import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
export default function Restaurantlist() {
  const [menus,setMenus] = useState([])
  useEffect(()=>{
      fetch("/restaurants").then((r)=>{
          r.json().then((res)=>setMenus(res))
      })
    },[])


  return (
    <section className="pt-0">
      <Row>

      {menus.map(menu=> <Restaurantcard res={menu}/>)}

      </Row>

    </section>


  )
}
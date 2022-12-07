import React from 'react'
import { useState,useEffect } from 'react'
 import '../styles/p.css'
 import Restaurantcard from './Restaurantcard'
 import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
export default function Restaurantlist({menus}) {

console.log(menus)

  return (
    <section className="pt-0">
      <Row>

      {menus.map(menu=> <Restaurantcard res={menu}/>)}

      </Row>

    </section>


  )
}

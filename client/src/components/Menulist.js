import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import Foodcard from './ Foodcard'
import { useState,useEffect } from 'react';
export default function Menulist({menus} ) {


  return (
    <section className="pt-0">

   <Container>
   <Row>
        {menus?menus.map(menu=> <Foodcard menu={menu}></Foodcard>):<p>bbbb</p>}


        </Row>
   </Container>






    </section>
  )
}


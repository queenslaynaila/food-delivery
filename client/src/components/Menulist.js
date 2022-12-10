import React from 'react'
import { Container, Row } from "reactstrap";
import Foodcard from './ Foodcard'
 
import '../styles/menu.css'
export default function Menulist(props ) {


  return (
    <section className="pt-0">


    <Container>

      <Row>




        {props.menus?props.menus.map(menu=> <Foodcard menu={menu} handleOrders={props.handleOrders}></Foodcard>):<p>bbbb</p>}
       </Row>
    </Container>






    </section>
  )
}


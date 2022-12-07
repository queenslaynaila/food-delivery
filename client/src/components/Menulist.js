import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import Foodcard from './ Foodcard'
import { useState,useEffect } from 'react';
export default function Menulist() {
    const [menus,setMenus] = useState([])
    useEffect(()=>{
        fetch("/menus").then((r)=>{

            r.json().then((res)=>setMenus(res))


        })
      },[])
      
  return (
    <section className="pt-0">


        <Row>
        {menus?menus.map(menu=> <Foodcard menu={menu}></Foodcard>):<p>bbbb</p>}


        </Row>





    </section>
  )
}


import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/restaurantcard.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
export default function  Foodcard({menu}) {



  return (

<Col lg="3" md="4" sm="6" xs="6"  className="mt-5">
<div className="product__item">
      <div className="product__img">
        <img src={menu.image_url} alt="product-img" className="w-50 h-50" />
      </div>

      <div className="product__content">
        <h5>
          <Link to='/'>{menu.menu_name}</Link>
        </h5>
        <div className=" d-flex align-items-center justify-content-between ">
          <span className="product__price">${menu.price}</span>
          <button className="addTOCart__btn"  >
           ORDER
          </button>
        </div>
      </div>
    </div>
</Col>

  )
}

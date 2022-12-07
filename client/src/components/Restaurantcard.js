import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
export default function Restaurantcard({res}) {
  const data =
  {
    menu_name:"Galitos",
    category_id:2,
    restaurant_id:1,
    description:"1 Chicken Piece with Regular Chips",
    price:370,
    image_url:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9hODRiYmJhZi01MjY0LTRmNmYtYmY0MC1jODVhMzc0ZDFkZmIuanBlZw==",
    status:"available",
    likes:20,
    data:"red",
    restaurantAddress:"nairobi"
  }

  return (
    <Col lg="3" md="4" sm="6" xs="6"  className="mt-5">
    <div className="card border-light " style={{width:"18rem"}}>
      <img  className='card-img-top"' src={res.image_url}></img>
      <div class="card-body">
        <h5 className="card-title">{res.name}</h5>
        <p className='resname'>{res.description}</p>

        <p class="card-text">
        <small class="text-muted">Opens at:10:00am Closes at:8.00pm</small>

        </p>
        <small>20 likes</small>
      </div>

    </div>

</Col>
  )
}


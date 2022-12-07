import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from 'react-router-dom'
export default function Restaurantcard({res}) {


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


        <p> 20 likes  <i class='bx bx-like'></i></p>

        <Link style={{textDecoration:"none"}} to={`/restaurant/${res.id}`}> VIEW MORE</Link>


      </div>

    </div>

</Col>
  )
}

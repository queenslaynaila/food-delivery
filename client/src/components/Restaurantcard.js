import React ,{useState}from 'react'
import {  Col} from "reactstrap";
import { Link } from 'react-router-dom'
export default function Restaurantcard({res,onLike,user }) {




function handleClick(){
  if (user){
    let likeObject ={likes:res.likes+1}

    fetch(`restaurants/${res.id}`, {
         method: `PATCH`,
         body: JSON.stringify(likeObject),
         headers: { 'Content-type': `application/json; charset=UTF-8` },
       }).then((response) => response.json())
       .then((res)=>onLike(res))

  } else
  alert ("LOG IN TO LIKE")




}
  return (
    <Col lg="3" md="4" sm="6" xs="6"  className="mt-5">
    <div className="card border-light " style={{width:"18rem"}}>
      <img  className='card-img-top"' src={res.image_url} alt="restaurant-sample"></img>
      <div class="card-body">
        <h5 className="card-title">{res.name}</h5>
        <p className='resname'>{res.description}</p>

        <p class="card-text">
        <small class="text-muted">Opens:{res.open_time} Closes at:{res.closing_time}</small>

        </p>


        <p>{res.likes} <i onClick={handleClick} class='bx bx-like'></i></p>
         
        <Link style={{textDecoration:"none"}} to={`/restaurant/${res.id}`}> VIEW MORE</Link>


      </div>

    </div>

</Col>
  )
}

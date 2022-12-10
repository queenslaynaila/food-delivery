import React from 'react'
import { CardImg,CardBody ,CardText,Row,Col,Container,CardSubtitle} from 'reactstrap'
import '../styles/l.css'
import '../styles/restaurant.css'
import { useState } from 'react';

import Foodcard from './ Foodcard'

import { useParams } from 'react-router-dom'

export default function Restaurant({restaurants,user}) {

 let profile =  "https://images.pexels.com/photos/7129713/pexels-photo-7129713.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  const params= useParams()
  const reschosen = restaurants.find((res) => res.id === Number(params.id));
  const menus = reschosen.menus
  const reviewsres = reschosen.reviews


  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(e){
   setSearchTerm(e.target.value)

  }
 return (

   <>
   <section className="common__section">
     <Container>
       <h2 className="text-white">{reschosen.name}</h2>




       <CardText  className="text-white">
          {reschosen.description}
       </CardText>




     </Container>
   </section>
   <Container className='try'>

   <Col >
   <div class="topnav">
 <a  href="#home">ORDER ONLINE</a>
 <a href="#review">REVIEW</a>

 </div>
   </Col>



 <Row>
           <Col lg="6" md="6" sm="6" xs="12">
             <div className="search__widget d-flex align-items-center justify-content-between ">
               <input
                 type="text"
                 placeholder="I'm looking for...."
                 value={searchTerm}
                 onChange={(e)=>handleChange(e)}
               />
               <span>
                 <i class="ri-search-line"></i>
               </span>
             </div>
           </Col>
           <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
             <div className="sorting__widget text-end">
               <select className="w-50">
                 <option>Default</option>
                 <option value="ascending">Sharing</option>
                 <option value="descending">Fast-Food</option>
                 <option value="high-price">Pizza</option>
                 <option value="low-price">Drinks</option>
                 <option value="low-price">Chicken</option>
               </select>
             </div>
           </Col>
           </Row>
<Row  >
{menus.length > 1 ? menus.map(menu=> <Foodcard menu={menu} ></Foodcard>):<p>THE RESTAURANT ABOVE DOES NOT HAVE A MENU YET</p>}
</Row>
<section id="review">
 <h1>REVIEWS</h1>


     <CardBody>
       {reviewsres.length > 0 ? reviewsres.map(item=>( <div className="reviews-top">
         <div className="user-details">
           <CardImg
             className="avatar"
             src={
               profile }
             alt="user avatar"
           />
           <CardSubtitle className="mb-2 text-muted" tag="h6">
             {item.reviewer}
           </CardSubtitle>
           {[...Array(item.rating)].map((star) => {
       return (
         <CardSubtitle tag="h5">⭐ </CardSubtitle>
       );
     })}

         </div>
         <div className="reviews-body">
           <CardText>
             {item.comment}
           </CardText>
         </div>
         <CardText>

           <p>{item.likes} likes<i class='bx bx-like'></i></p>


         </CardText>
       </div>))
      :<h1>THere are no reviews for this restaurant</h1>}


     </CardBody>


</section>



   </Container>


 </>
 )
}

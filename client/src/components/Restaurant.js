import React from 'react'
import { CardImg,CardBody ,CardText,Row,Col,Container,CardSubtitle} from 'reactstrap'
import '../styles/l.css'
import '../styles/restaurant.css'
import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Foodcard from './ Foodcard'
import { useParams } from 'react-router-dom'

export default function Restaurant({restaurants,user,handleRestaurant}) {

  const params= useParams()
  const reschosen = restaurants.find((res) => res.id === Number(params.id));

  const reviewsres = reschosen.reviews
  const [rating,setRating] = useState(null)
  const [comment,setComment] = useState(null)
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);
  const [searchTerm, setSearchTerm] = useState("");
  const [menus,setMenus] = useState(reschosen.menus)
  let profile =  "https://images.pexels.com/photos/7129713/pexels-photo-7129713.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

  function handlePost(){
    if (!user){
      setModal(!modal);
      alert ("Only logged in users can add reviews")
    }else{
      let data = {restaurant_id:reschosen.id,
        customer_id:user.id ,
        rating:rating,
        likes:0,
        comment:comment,
        reviewer:user.username,
        commented_on:new Date().toLocaleDateString()};
        fetch("/reviews", {
          method: "POST",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(response => {
          reviewsres.push(response)
        })
    }
    console.log(reviewsres)




  }
  function handleChange(e){
   setSearchTerm(e.target.value)
   

    let datay = menus.filter(menu=>(menu.menu_name).toLowerCase().includes(searchTerm.toLowerCase()))
   setMenus(datay)
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
          <input type="text" placeholder="I'm looking for...." value={searchTerm}
          onChange={(e)=>handleChange(e)}/>
          <span><i class="ri-search-line"></i></span>
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
      <div>
      <Button color="danger" onClick={toggle}>NEW REVIEW</Button>
              <Modal isOpen={modal} toggle={toggle} size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered  >
                <ModalHeader  id="contained-modal-title-vcenter" toggle={toggle}>TELL US YOUR EXPERIENCE</ModalHeader>

                <div class="modal-content">

                  <div class="card-body text-center" >

                      <div class="comment-box ">
                      <p>How would you rate us?</p>
                      <div class="rating"  >
                      <input type="radio" onSelect={(e)=>setRating(e.target.value)}  name="rating" value="1" id="5"></input>
                        <label for="5">1</label>
                        <input type="radio" onClick={(e)=>setRating(e.target.value)} name="rating" value="2" id="4"></input>
                        <label for="4">2</label>
                        <input type="radio" onClick={(e)=>setRating(e.target.value)} name="rating" value="3" id="3"></input>
                        <label for="3">3</label>
                        <input type="radio"  onClick={(e)=>setRating(e.target.value)} name="rating" value="4" id="2"></input>
                        <label for="2">4</label>
                        <input type="radio" onClick={(e)=>setRating(e.target.value)} name="rating" value="4" id="1"></input>
                        <label for="1">5</label>
                      </div>
                      <div class="comment-area"> <textarea onInput={(e)=>setComment(e.target.value)}  class="form-control" placeholder="what is your view?" rows="4"  ></textarea> </div>


              </div></div></div>

                <ModalFooter>
                  <Button color="danger"   onClick={handlePost}>SUBMIT REVIEW</Button>{' '}
                  <Button color="danger" onClick={ toggle}>EXIT</Button>
                </ModalFooter>
              </Modal>
            </div>


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
            :<p>There are no reviews for this restaurant yet.Add one</p>}



          </CardBody>


    </section>
   </Container>
  </>
 )
}

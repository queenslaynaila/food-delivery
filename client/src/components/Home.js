import React from 'react'
import '../styles/home.css'
import order from '../assets/orderhomw.png'
import {Container,Row,Col,ListGroup,ListGroupItem} from 'reactstrap'
import {useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom'
import Categorycard from './Categorycard'
import step1 from '../assets/order.png'
import step2 from '../assets/confirmorder.png'
import step3 from '../assets/deliver.png'
export default function Home() {
  let navigate = useNavigate()
  const  orderflow = [
    {
    display:"Easy to order",
    img:step1
    },
    {
    display:"Fastest delivery",
    img:step2
    },
    {
    display:"Best of quality",
    img:step3
  }
  ]
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className='hero_content'>
              <h5>Because good people need good food</h5>
              <h1 className='mb-4 hero_title'>
                <span>FASTEST</span> DELIVERY IN YOUR TOWN
              </h1>
               <p>Happy Eating!</p>
               <div className='hero_btns d-flex align-items-center gap-5 mt-4'>
                 <button className='order_btn d-flex align-items-center justify-content-between' onClick={()=>navigate('/restaurant')}>Restaurants</button>
                 <button className='all_foods_btn align-items-center justify-content-between' onClick={()=>navigate('/foodlist')}>
                   Menu
                 </button>
               </div>
            </div>
          </Col>
          <Col lg="6" md="6">
             <div className='hero_img'>
               <img src={order} className="w-100"></img>
             </div>
          </Col>
        </Row>
      </Container>
      <Categorycard></Categorycard>
      <Container>
        <Row>
          <Col lg="12" className='text-center'>
            <h5 className='feature_subtitle'>What we serve?</h5>
            <h2 className='feature_title'>Your favorite food</h2>
            <h2 className='feature_title'>By your favorite partner</h2>
          </Col>
          {orderflow.map((instruction,index)=>(
            <Col lg="4" md="6" sm="6" key={index} className="mt-5">
              <div className='feature_item text-center px-5 py-3'>
                <img src={instruction.img} alt="orderflow" className='w-25 mb-3'></img>
                <h5>{instruction.display}</h5>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>

  )
}

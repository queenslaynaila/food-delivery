import React from 'react'
import { useState,useEffect } from 'react'
import {Container,Row,Col} from 'reactstrap'
import '../styles/category.css'
export default function Categorycard() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("/categories")
      .then((r) => r.json())
      .then((data) => {
        setCategory(data);
      });
  },[]);



  return (
     <Container>
      <Row>
        {category.map((item,index)=>(
          <Col lg="3" md="4" sm="6" xs="6" className='mb-4' key={index}>
          <div className='category_item d-flex align-items-center gap-3'>
            <div className='category_img '>
              <img src={item.image_url} alt="food categories images"></img>
            </div>
            <p>{item.category_name}</p>
            </div>
          </Col>
        ))}
      </Row>
     </Container>
  )
}


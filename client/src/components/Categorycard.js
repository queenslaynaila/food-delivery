import React from 'react'
import {Container,Row,Col} from 'reactstrap'
import img1 from '../assets/category-01.png'
import img2 from '../assets/category-02.png'
import img3 from '../assets/category-03.png'
import img4 from '../assets/category-04.png'
import '../styles/category.css'
export default function Categorycard() {
  const categoryData = [
    {display:"Fastfood",
    img:img1
  },
  {display:"Fastfood",
  img:img2
  },
  {display:"Fastfood",
  img:img3
  },
  {display:"Fastfood",
  img:img4
  }
  ]
  return (
     <Container>
      <Row>
        {categoryData.map((item,index)=>(
          <Col lg="3" md="4" sm="6" xs="6" className='mb-4' key={index}>
          <div className='category_item d-flex align-items-center gap-3'>
            <div className='category_img'>
              <img src={item.img}></img>
            </div>
            <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
     </Container>
  )
}


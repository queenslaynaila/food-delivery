import React from 'react'
import {Container,Row,Col} from 'reactstrap'
import Foodcard from './ Foodcard'
import ReactPaginate from 'react-paginate'
export default function Foodlist() {
 const food = ([
    {
      menu_name:"Streetwise 1",
      category_id:2,
      restaurant_id:1,
      description:"1 Chicken Piece with Regular Chips",
      price:370,
      image_url:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9hODRiYmJhZi01MjY0LTRmNmYtYmY0MC1jODVhMzc0ZDFkZmIuanBlZw==",
      status:"available"
    },
    {
      menu_name:"Streetwise 2",
      category_id: 2,
      restaurant_id:1,
      description:"2 Chicken Piece with Regular Chips",
      price:450,
      image_url:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9hODRiYmJhZi01MjY0LTRmNmYtYmY0MC1jODVhMzc0ZDFkZmIuanBlZw==",
      status:"available"
    },
    {
      menu_name:"Streetwise 3",
      category_id:2,
      restaurant_id:1,
      description:"3 Chicken Piece with Regular Chips",
      price:650,
      image_url:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9hODRiYmJhZi01MjY0LTRmNmYtYmY0MC1jODVhMzc0ZDFkZmIuanBlZw==",
      status:"available"
    },
    {
      menu_name:"4 Zinger Wings",
      category_id:7,
      restaurant_id:1,
      description:"4 Hot and Crispy Wings.",
      price:490,
      image_url:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9hODRiYmJhZi01MjY0LTRmNmYtYmY0MC1jODVhMzc0ZDFkZmIuanBlZw==",
      status:"available"
    },
    {
      menu_name:"8 Zinger Wings",
      category_id:7,
      restaurant_id:1,
      description:"8 Hot and Crispy Wings.",
      price:790,
      image_url:"https://d1ralsognjng37.cloudfront.net/16457121-d225-4716-a363-512759ed696a.jpeg",
      status:"available"
    },
    {
      menu_name:"12 Zinger Wings",
      category_id:7,
      restaurant_id:1,
      description:"12 Hot and Crispy Wings.",
      price:990,
      image_url:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvOGI1MGYxMTRhNGU1MDdjYmJmZmNlZDJmYTdjYzE5ODIvODU5YmFmZjFkNzYwNDJhNDVlMzE5ZDFkZTgwYWVjN2EuanBlZw==",
      status:"available"
    },
    {
      menu_name:"Streetwise 5",
      category_id:8,
      restaurant_id:1,
      description:"5 Chicken Piece with Large Chips",
      price:1200.00,
      image_url:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvNzJjMDQxNWRhYmY5NjcyMTlkYjcyZDdmMDA1ZTlmNTAvODU5YmFmZjFkNzYwNDJhNDVlMzE5ZDFkZTgwYWVjN2EuanBlZw==",
      status:"available"
    },
    {
      menu_name:"Sticky Fiver",
      category_id:8,
      restaurant_id:1,
      description:"5 Chicken Pieces Dipped in Sticky Sauce with Family Chips",
      price:1600.00,
      image_url:"https://d1ralsognjng37.cloudfront.net/16457121-d225-4716-a363-512759ed696a.jpeg",
      status:"available"
    },
     {
      menu_name:"Streetwise 7r",
      category_id:8,
      restaurant_id:1,
      description:"7 Chicken Pieces with Family Chips and a 1.25lt Soda",
      price:2600.00,
      image_url:"https://d1ralsognjng37.cloudfront.net/16457121-d225-4716-a363-512759ed696a.jpeg",
      status:"available"
    },
    {
      menu_name:"Wazito Bucket",
      category_id:8,
      restaurant_id:1,
      description:"11 Chicken Pieces with Family Chips",
      price:2600.00,
      image_url:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMTVlYzZjNGM1MjBjYjU2MGE4MDg3NTkwMWIwZWI2ZGMvODU5YmFmZjFkNzYwNDJhNDVlMzE5ZDFkZTgwYWVjN2EuanBlZw==",
      status:"available"
    },
    {
      menu_name:"350 ml Soda",
      category_id:3,
      restaurant_id:1,
      description:"Flavor of choice",
      price:100,
      image_url:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMTYyNjg4NWRkNjAyZDA0ZTM1N2E3YjE2Yjg5ODNkZGEvODU5YmFmZjFkNzYwNDJhNDVlMzE5ZDFkZTgwYWVjN2EuanBlZw==",
      status:"available"
    },
    {
      menu_name:"500 ml Soda",
      category_id:3,
      restaurant_id:1,
      description:"Flavor of choice",
      price:130,
      image_url:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMTYyNjg4NWRkNjAyZDA0ZTM1N2E3YjE2Yjg5ODNkZGEvODU5YmFmZjFkNzYwNDJhNDVlMzE5ZDFkZTgwYWVjN2EuanBlZw==",
      status:"available"
    },
    {
      menu_name:"1.25l Soda",
      category_id:3,
      restaurant_id:1,
      description:"Flavor of choice",
      price:330,
      image_url:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMTYyNjg4NWRkNjAyZDA0ZTM1N2E3YjE2Yjg5ODNkZGEvODU5YmFmZjFkNzYwNDJhNDVlMzE5ZDFkZTgwYWVjN2EuanBlZw==",
      status:"available"
    },
    {
      menu_name:"KFC Creamy Krusher",
      category_id:3,
      restaurant_id:1,
      description:"Flavor of choice",
      price:330,
      image_url:"",
      status:"available"
    },
    {
      menu_name:"KFC Ice Lolly",
      category_id:3,
      restaurant_id:1,
      description:"Flavor of choice",
      price:100,
      image_url:"",
      status:"available"
    },
    {
      menu_name:"1 Pc Chicken",
      category_id:5,
      restaurant_id:1,
      description:"1 Pc Chicken Served either in Original Recipe Or Hot and Crispy",
      price:200,
      image_url:"",
      status:"available"
    },
    {
      menu_name:"9 Pc Chicken",
      category_id:5,
      restaurant_id:1,
      description:"9 Chicken Pieces served either in Original Recipe Or Hot and Crispy",
      price:200,
      image_url:"",
      status:"available"
    },
    {
      menu_name:"12 Pc Chicken",
      category_id:5,
      restaurant_id:1,
      description:"12 Chicken Pieces served either in Original Recipe Or Hot and Crispy",
      price:200,
      image_url:"",
      status:"available"
    },
    {
      menu_name:"15 Pc Chicken",
      category_id:5,
      restaurant_id:1,
      description:"15 Chicken Pieces served either in Original Recipe Or Hot and Crispy",
      price:200,
      image_url:"",
      status:"available"
    },
    {
      menu_name:"21 Pc Chicken",
      category_id:5,
      restaurant_id:1,
      description:"21 Chicken Pieces served either in Original Recipe Or Hot and Crispy",
      price:200,
      image_url:"",
      status:"available"
    }

  ])
  return (
     <div className='d-flex justify-content-b'>
        <Row>
        <Container>
         {food.map((item)=>(
            <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                <Foodcard></Foodcard>
            </Col>
         ))}
         </Container>
         </Row>
     </div>
  )
}


 import React from 'react'
 import { Card,CardImg,CardBody, CardTitle,CardText} from 'reactstrap'
 import '../styles/l.css'
 import { useState,useEffect } from 'react';
 import Foodcard from './ Foodcard'
 import { useParams,Link } from 'react-router-dom'
export default function Restaurant({restaurants}) {
  const params= useParams()
  const reschosen = restaurants.find((res) => res.id === Number(params.id));
 


  const data ="https://picsum.photos/900/180"



  return (

<>
    <Card className="my-2">
    <CardImg
      alt="Card image cap"
      src={data}
      style={{
        height: 180
      }}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
       KFCC
      </CardTitle>
      <CardText>
      Our food is fingerlicking good"
      </CardText>

    </CardBody>
  </Card>



</>
  )
}


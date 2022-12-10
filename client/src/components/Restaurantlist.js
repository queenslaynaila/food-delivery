import React from 'react'

 import '../styles/p.css'
 import Restaurantcard from './Restaurantcard'
 import { Container, Row  } from "reactstrap";
export default function Restaurantlist({menus,onLike,user}) {



  return (
    <section className="pt-0">
<Container  className="bg "
    fluid="sm">
<Row  >

{menus.map(menu=> <Restaurantcard  onLike={onLike} user={user}   res={menu}/>)}

</Row>
</Container>





    </section>


  )
}

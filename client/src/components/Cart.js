import React,{useState,useEffect} from 'react'
import { Container, Row, Col } from "reactstrap";
import '../styles/cart.css'
import {Link} from 'react-router-dom'
import {useNavigate} from "react-router-dom"
export default function Cart({order}) {
  let navigate = useNavigate()
   const [subtotal,setSubTotal] = useState(0)

   const sum = order.reduce(function(a,b){
    return a + parseInt(b.price)
  }, 0)
  useEffect(() => {
    setSubTotal(sum);
  }, [sum]); //set our function as dependen




  return (
    <section>
    <Container>
      <Row>
      <Col lg="12">
      {order.length === 0 ? (
                <h5 className="text-center">Your cart is empty</h5>
              ) : (<table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                  {order.map((item)=>{
                   return ( <tr>
                <td className="text-center cart__img-box">
                  <img src={item.image_url} alt="" />
                </td>
                <td className="text-center">{item.menu_name}</td>
                <td className="text-center">KES {item.price}</td>
                <td className="text-center">1</td>
                <td className="text-center cart__item-del">

                <i class='bx bx-trash'  />

                </td>
              </tr>)
                  })}

                  </tbody>
    </table>)}

    <div className="mt-4">
                <h6>
                  Subtotal:
                  <span className="cart__subtotal">{subtotal}</span>
                </h6>
                <p>Taxes and shipping will calculate at checkout</p>
                <div className="cart__page-btn">
                  <button  onClick={()=>{navigate('/foodlist')}}className="addTOCart__btn me-4">
                    <Link  to="/foods">Continue Shopping</Link>
                  </button>
                  <button className="addTOCart__btn">
                    <Link to="/checkout">Proceed to checkout</Link>
                  </button>
                </div>
              </div>
      </Col>


      </Row>
      </Container>
      </section>
  )
}

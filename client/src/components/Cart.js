import React from 'react'
import { Container, Row, Col } from "reactstrap";
import '../styles/cart.css'
import {Link} from 'react-router-dom'
import {useNavigate} from "react-router-dom"
export default function Cart({order}) {
  let navigate = useNavigate()
    let title = "QIEEMN"
    let price = 20
    let quantity = 40
    let image01="https://d1ralsognjng37.cloudfront.net/7a994894-7763-4cc6-a077-c0ae6c4d9439.jpeg"
     function removeItem(item){

      order.splice(order.findIndex(a => a.id === item.id) , 1)
      console.log(order.count)
     }
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
                <td className="text-center">${item.price}</td>
                <td className="text-center">{quantity}px</td>
                <td className="text-center cart__item-del">

                <i class='bx bx-trash' onClick={()=>removeItem(item)}/>

                </td>
              </tr>)
                  })}

                  </tbody>
    </table>)}

    <div className="mt-4">
                <h6>
                  Subtotal: KES
                  <span className="cart__subtotal">900</span>
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

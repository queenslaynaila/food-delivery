import React from 'react'
import { Container, Row, Col } from "reactstrap";
import '../styles/cart.css'
import {Link} from 'react-router-dom'
import {useNavigate} from "react-router-dom"
export default function Cart() {
  let navigate = useNavigate()
    let title = "QIEEMN"
    let price = 20
    let quantity = 40
    let image01="https://d1ralsognjng37.cloudfront.net/7a994894-7763-4cc6-a077-c0ae6c4d9439.jpeg"
  return (
    <section>
    <Container>
      <Row>
      <Col lg="12">
      <table className="table table-bordered">
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
                  <tr>
      <td className="text-center cart__img-box">
        <img src={image01} alt="" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">${price}</td>
      <td className="text-center">{quantity}px</td>
      <td className="text-center cart__item-del">
      <i class='bx bx-trash'></i>
      </td>
    </tr>
                  </tbody>
    </table>
    <div className="mt-4">
                <h6>
                  Subtotal: $
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

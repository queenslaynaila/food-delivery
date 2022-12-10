import React from 'react'

export default function Checkout({order}) {
  console.log(order)

  return (

  <main class="mt-5 ">
  <div class="container wow fadeIn">
    <h2 class="my-3 h2 text-center">CHECKOUT FORM</h2>
    <div class="row">
      <div class="col-md-8 mb-4">
        <div class="card">
          <form class="card-body">



            <div class="md-form mb-5">
              <label for="address" class="">Address</label>
              <input type="text" id="address" class="form-control" placeholder="1234 Main St"></input>
            </div>
            <div class="md-form mb-5">
             <label for="address-2" class="">Address 2 (optional)</label>
              <input type="text" id="address-2" class="form-control" placeholder="Apartment or suite">
              </input>
            </div>



            <h3>PAYMENT SECTION</h3>
            <div class="d-block my-3">
              <div class="custom-control custom-radio">
                <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required></input>
                <label class="custom-control-label" for="credit">Credit card</label>
              </div>
              <div class="custom-control custom-radio">
                <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required></input>
                <label class="custom-control-label" for="debit">Debit card</label>
              </div>
              <div class="custom-control custom-radio">
                <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required></input>
                <label class="custom-control-label" for="paypal">Paypal</label>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="cc-name">Name on card</label>
                <input type="text" class="form-control" id="cc-name" placeholder="" required></input>

                <small class="text-muted">Full name as displayed on card</small>

              </div>
              <div class="col-md-6 mb-3">
                <label for="cc-number">Credit card number</label>
                <input type="text" class="form-control" id="cc-number" placeholder="" required></input>

              </div>
            </div>
            <div class="row">
              <div class="col-md-3 mb-3">
                <label for="cc-expiration">Expiration</label>
                <input type="text" class="form-control" id="cc-expiration" placeholder="" required></input>

              </div>
              <div class="col-md-3 mb-3">
                <label for="cc-expiration">CVV</label>
                <input type="text" class="form-control" id="cc-cvv" placeholder="" required></input>


              </div>
            </div>

            <button class="btn btn-danger btn-lg btn-block" type="submit">Continue to checkout</button>
          </form>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-muted">Your cart</span>
          <span class="badge badge-secondary badge-pill">3</span>
        </h4>
      <ul class="list-group mb-3 z-depth-1">
      {order.length > 0 ?
           order.map((item)=>(
            <li class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 class="my-0">{item.menu_name}</h6>
              <small class="text-muted">{item.description}</small>
            </div>
            <span class="text-muted">KES:{item.price}</span>
          </li>
           ))

          :<h2>No orders</h2>
          }



          <li class="list-group-item d-flex justify-content-between">
            <span>Total (KES)</span>
            <strong>20</strong>
          </li>
        </ul>

      </div>
    </div>
  </div>

</main>

  )
}


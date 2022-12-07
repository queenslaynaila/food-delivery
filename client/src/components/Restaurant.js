import React from 'react'

export default function Restaurant() {
  let img="https://d1ralsognjng37.cloudfront.net/7a994894-7763-4cc6-a077-c0ae6c4d9439.jpeg"
  return (
    <div class="card mb-3">
    <img class="card-img-top" src={img} alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  )
}

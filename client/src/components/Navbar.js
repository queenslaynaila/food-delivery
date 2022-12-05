import React from 'react'
import '../styles/navbar.css'
import {useNavigate} from "react-router-dom"
export default function Navbar() {
   let navigate = useNavigate()
  return (
   <nav className="navbar navbar-expand-lg fs-5 mb-sm-5 mb-3 py-3">
   <div className="container col-sm-9">
       <a className="navbar-brand" href="#/">
       <i class='bx bx-bowl-rice' ></i>FOODFUN
       </a>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
               data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
               aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav fw-bold ms-auto mb-2 mb-lg-0">
               <li className="nav-item">
                   <a className="nav-link" href="#/" onClick={() => navigate("/")}>
                       <i className="bi bi-question-diamond-fill"/> Help</a>
               </li>

                       <li className="nav-item ms-sm-3 mb-sm-0 mb-2 d-inline-flex">
                           <a className="nav-link login" href="#/" onClick={() => navigate("/login")}>
                               <i className="bi bi-person-fill"/> Login
                           </a>
                       </li>
                       <li className="nav-item ms-sm-3 mb-sm-0 mb-2 d-inline-flex">
                           <a className="nav-link signup" href="#/" onClick={() => navigate("/login")}>
                               <i className="bi bi-person-fill"/> Signup
                           </a>
                       </li>


           </ul>
       </div>
   </div>
</nav>
  )
}

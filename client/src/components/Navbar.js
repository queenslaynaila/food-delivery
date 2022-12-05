import React from 'react'
import '../styles/navbar.css'
import {useNavigate} from "react-router-dom"
import {Container} from 'reactstrap'
import logo from "../assets/navlogo.png"
import { NavLink,Link } from 'react-router-dom'
export default function Navbar() {
   let navigate = useNavigate()
  return (
    <div>
        <nav className="navbar navbar-expand-lg  ">
        <div className="container col-sm-9">
            <a className="navbar-brand" href="#/"onClick={()=>{navigate('/')}} >
               <img src={logo} width="50" height="50" class="d-inline-block align-top" alt=""></img>
               <h5>Foodplus</h5>
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>

            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className='  navbar-nav fw-bold ms-auto mb-2 mb-lg-0 gap-5'>

                <li className="nav-item ms-sm-3 mb-sm-0 mb-2 d-inline-flex">
                                <a className="nav-link login" href="#/" onClick={() => navigate("/login")}>
                                    Restaurant
                                </a>
                            </li>
                            <li className="nav-item ms-sm-3 mb-sm-0 mb-2 d-inline-flex">
                                <a className="nav-link login" href="#/" onClick={() => navigate("/login")}>
                                    Menu
                                </a>
                            </li>
                            <li className="nav-item ms-sm-3 mb-sm-0 mb-2 d-inline-flex">
                                <a className="nav-link login" href="#/" onClick={() => navigate("/login")}>
                                    Help
                                </a>
                            </li>
                </ul>
                <ul className="navbar-nav fw-bold ms-auto mb-2 mb-lg-0">
                            <li className="nav-item ms-sm-3 mb-sm-0 mb-2 d-inline-flex">
                                <a className="nav-link login" href="#/" onClick={() => navigate("/login")}>
                                    <i className="bi bi-person-fill"/> Login
                                </a>
                            </li>
                            <li className="nav-item ms-sm-3 mb-sm-0 mb-2 d-inline-flex">
                                <a className="nav-link login" href="#/" onClick={() => navigate("/login")}>
                                    <i className="bi bi-person-fill"/> Signup
                                </a>
                            </li>

                </ul>
            </div>
        </div>
    </nav>

</div>


  )
}

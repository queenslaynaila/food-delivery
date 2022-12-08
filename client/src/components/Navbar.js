import React from 'react'
import '../styles/navbar.css'
import {useNavigate} from "react-router-dom"
import { useState, useEffect, useRef } from "react";

import logo from "../assets/navlogo.png"

export default function Navbar({user,setUser}) {
    const headerRef = useRef(null);
   let navigate = useNavigate()
   function handleLogoutClick(e) {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        navigate("/")
      }
    });
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("headershrink");
      } else {
        headerRef.current.classList.remove("headershrink");
      }
    });

    return () => window.removeEventListener("scroll",null);
  }, []);

  return (
    <div className="header" ref={headerRef}  >
        <nav className="navbar navbar-expand-lg" >
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
                                <a className="nav-link login" href="#/" onClick={() => navigate("/restaurant")}>
                                    Restaurant
                                </a>
                            </li>
                            <li className="nav-item ms-sm-3 mb-sm-0 mb-2 d-inline-flex">
                                <a className="nav-link login" href="#/" onClick={() => navigate("/foodlist")}>
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
                {user? <li className="nav-item ms-sm-3 mb-sm-0 mb-2 d-inline-flex">
                                <a className="nav-link login" href="#/" onClick={() => navigate("/cart")}>
                                <i class='bx bxs-cart'></i> Cart
                                </a>
                            </li>: <li className="nav-item ms-sm-3 mb-sm-0 mb-2 d-inline-flex">
                                <a className="nav-link login" href="#/" onClick={() => navigate("/login")}>
                                    <i className="bi bi-person-fill"/> Login
                                </a>
                            </li>}


                            {user ?  <li className="nav-item dropdown ms-sm-3 d-inline-flex">
                                        <a className="nav-link signup dropdown-toggle"
                                           href="#/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                              <i className="bi bi-person-fill"/>{user.username}
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                              <a className="dropdown-item  " href="#/"
                                                   > Settings
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item  " href="#/"
                                                   onClick={(e) => handleLogoutClick(e)}>Logout
                                                </a>
                                            </li>
                                        </ul>
                                    </li>:
                                    <li className="nav-item ms-sm-3 mb-sm-0 mb-2 d-inline-flex">
                                        <a className="nav-link login" href="#/"  onClick={() => navigate("/signup")} >
                                             <i className="bi bi-person-fill"/> Signup
                                        </a>
                                    </li>}

                </ul>
            </div>
        </div>
    </nav>

</div>


  )
}

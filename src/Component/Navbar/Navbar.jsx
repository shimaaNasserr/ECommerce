import React, { useContext } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/freshcart-logo.svg'
import { cartContext } from '../../assets/ShareData/cartContext'

export default function Navbar({ userData, logOut }) {
  let {cartData} = useContext(cartContext)

  return (
    <>
      <nav className=' navbar fixed-top  navbar-expand-lg bg-info' >
        <div className="container">
          <Link className="navbar-brand" href="#">
            <img src={logo} className='w-100' alt='' />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {userData ? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <NavLink className={({ isActive }) => isActive == true ? 'nav-link active text-success fw-bold' : "nav-link text-white fw-bold"}  aria-current="page" to="home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive == true ? 'nav-link active text-success fw-bold' : "nav-link text-white fw-bold"}  aria-current="page" to="Brands">Brands</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive == true ? 'nav-link active text-success fw-bold' : "nav-link text-white fw-bold"} aria-current="page" to="category">Category</NavLink>
              </li>

            </ul> : ""}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {userData ? <>
                <li className="nav-item py-2">
                   <a style={{color:'black'}} href='https://www.linkedin.com/in/shimaa-nasser-8a2b8b1b0' target='_blank'><i className='fa-brands fa-linkedin mx-2 '></i></a>
                   <a href='https://instagram.com/shiimaa_nasser?igshid=nd0xvz31rml1' style={{color:'black'}} target='_blank'><i className='fa-brands  fa-instagram mx-2 '></i></a>
                   <a href='https://www.facebook.com/profile.php?id=100006061784650&mibextid=LQQJ4d' style={{color:'black'}} target='_blank'><i className='fa-brands fa-facebook mx-2' ></i></a>
                   <a href='' style={{color:'black'}}  target='_blank'><i className='fa-brands fa-twitter mx-2'></i></a></li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => isActive == true ? 'nav-link active text-success fw-bold' : "nav-link text-white fw-bold"}  aria-current="page" to="profile">Profile</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => isActive == true ? 'nav-link active text-success fw-bold' : "nav-link text-white fw-bold"}  aria-current="page" to="cartDetails">
                    <div  class=" position-relative">
                      <i className='fa-solid fa-shopping-cart text-success fs-4'></i>
                      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                       {cartData?.numOfCartItems?cartData.numOfCartItems:0}
                        <span class="visually-hidden">unread messages</span>
                      </span>
                    </div>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <span className='nav-link carsol text-white fw-bold' onClick={logOut} >LogOut</span>
                </li></> : <>  <li className="nav-item">
                  <NavLink className={({ isActive }) => isActive == true ? 'nav-link active text-success fw-bold' : "nav-link text-white fw-bold"}  aria-current="page" to="login">Login</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => isActive == true ? 'nav-link active text-success fw-bold' : "nav-link text-white fw-bold"}  aria-current="page" to="/">Register</NavLink>
                </li></>}

            </ul>
          </div>
        </div>
      </nav>


      <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    ...
  </div>
</div>

    
    </>
  )
}

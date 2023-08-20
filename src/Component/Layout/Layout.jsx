import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout({userData , logOut}) {
  return (
   <>
   <Navbar logOut={logOut} userData={userData}/>
   <div className='container'>
    <Outlet/>
   </div>
   <Footer/>
   </>
  )
}

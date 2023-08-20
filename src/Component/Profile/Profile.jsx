import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Helmet} from "react-helmet";
// import hello from '../../assets/hello.svg'
import logo from '../../assets/freshcart-logo.svg'
export default function Profile({userData}) {
  // let baseUrl = 'https://ecommerce.routemisr.com'
  // let [productList, setProductList] = useState([])

  // useEffect(() => {
  //   getUser()
  // }, [])

  // async function getUser() {
  //   let { data } = await axios.get(`${baseUrl}/api/v1/users`)
  //   console.log(data);
  //   setProductList(data)
  //   setNumOfCartItems(data?.numOfCartItems)
  //   setLoading(false)
  // }
  return <>
    <Helmet>
                <title>Profile</title>
            </Helmet>
            
   <h1 className='mx-0 mt-2 pt-4'>Welcome {userData?.name}</h1>
   <p className='mx-3'>We hope You Enjoy With Our Website<span className='ms-1'><i class="fa-solid fa-face-smile text-warning"></i></span></p>
   <div className="row">
   <div className='border border-success p-2 col-md-4 '>
    <h3 className='text-success'>Contact Details:</h3>
    <h4 className='mb-0 ms-4'>Name:</h4>
    <p className='ms-4'>{userData?.name}</p>
    <h4 className='mb-0 ms-4'>Email:</h4>
    <p className='ms-4'> Shimaa@gmail.com</p>
    <h4 className='mb-0 ms-4'>Phone:</h4>
    <p className='ms-4'>0103455555</p>
   </div>
   <div className="col-md-8 text-center">
    <img src={logo} alt="hello" className='w-50 ' />
   </div>
   </div>

  
  </>
   
 
}

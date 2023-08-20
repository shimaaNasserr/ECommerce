import React, {  useEffect, useState } from 'react'
import { Navigate, RouterProvider, createBrowserRouter, createHashRouter, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import Layout from './Component/Layout/Layout'
import Register from './Component/Register/Register'
import Home from './Component/Home/Home.jsx'
import Product from './Component/Product/Product'
import Profile from './Component/Profile/Profile'
import Login from './Component/Login/Login'
import Notfound from './Component/Notfound/Notfound'
import jwt_decode from 'jwt-decode'
import ProtectedRouting from './Component/ProtectedRouting/ProtectedRouting'
import ForgetPassword from './Component/ForgetPassword/ForgetPassword'
import ResetPassword from './Component/ForgetPassword/ResetPassword'
import ProductDetails from './Component/ProductDetails/ProductDetails'
import Category from './Component/Category/Category'
import {CategoryContextProvider} from './assets/ShareData/CategoryContext.js'
import CartDetails from './Component/CartDetails/CartDetails'
import { CartContextProvider } from './assets/ShareData/cartContext'
import Checkout from './Component/Checkout/Checkout';
import { Offline, Online } from "react-detect-offline";
import './App.css'
import CategoryDetails from './Component/SubCategory/SubCategory';
import SubCategory from './Component/SubCategory/SubCategory';
import Brands from './Component/Brands/Brands';

export default function App() {
  let [userData, setUserData] = useState(null);
  function saveUserData(data) {
    setUserData(data)
  }
  useEffect(() => {
    if (localStorage.getItem("token")) {
      let token = localStorage.getItem("token")
      // console.log(token);
      let data = jwt_decode(token)
      saveUserData(data)
      console.log(data);
      
     }
  }, [])
  function logOut() {
    setUserData(null)
    localStorage.removeItem("token")
    return <Navigate to='/login' />
  }
  function ProtectedRouting2(props){
    if(localStorage.getItem("token")!==null){
    return  <Navigate to='/home'/>
    }
      else{
        return props.children
      }
  }
  let routers = createHashRouter([{
    path: "", element: <Layout userData={userData} logOut={logOut} />, children: [
      { path: "home", element: <ProtectedRouting><Home/></ProtectedRouting> },
      { path: "product", element: <ProtectedRouting><Product /></ProtectedRouting>},
      { path: "ProductDetails/:id", element: <ProtectedRouting><ProductDetails /></ProtectedRouting> },
      { path: "SubCategory", element: <ProtectedRouting><SubCategory /></ProtectedRouting> },
      { path: "profile", element: <ProtectedRouting><Profile userData={userData} /></ProtectedRouting> },
      { path: "category", element: <ProtectedRouting><Category  /></ProtectedRouting> },
      { path: "Brands", element: <ProtectedRouting><Brands  /></ProtectedRouting> },
      { path: "cartDetails", element: <ProtectedRouting><CartDetails  /></ProtectedRouting> },
      { path: "checkout", element: <ProtectedRouting><Checkout  /></ProtectedRouting> },
      { path: "login", element: <Login saveUserData={saveUserData} /> },
      { path: "ForgetPassword", element: <ForgetPassword/> },
      { path: "resetPassword", element: <ResetPassword/> },
      { index: true, element:<ProtectedRouting2><Register /></ProtectedRouting2>  },
      { path: "*", element: <Notfound /> },

    ]
  }
  ])

  return (
  // <CategoryContextProvider>
  //</CategoryContextProvider>
  <CartContextProvider>
           <Offline> <div className='network'>You'r Currently Offline <i class="fa-regular fa-face-meh-blank"></i></div></Offline>
 
    <Toaster/>
      <RouterProvider router={routers} />
  </CartContextProvider>



   
  )
}



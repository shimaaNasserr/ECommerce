import React from 'react'
import { Navigate } from 'react-router-dom';

export default function ProtectedRouting(props) {
    if(localStorage.getItem("token")){
        return props.children; //childern mean the inside content <Home><h1>Hello</h1></Home>
          }
          else{
            return <Navigate to ='/login'/>
          }
}
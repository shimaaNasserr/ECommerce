import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import './Login.css'

export default function Login({saveUserData}) {
  let baseUrl = 'https://ecommerce.routemisr.com'
let [errmsg,setErrmsg]= useState("")
let [loading,setLoading] = useState(false)
let navigate = useNavigate();
let validation = yup.object({
  email: yup.string().required().email("enter valid email"),
  password: yup.string().required().matches(/^[A-Z][a-zA-Z0-9!@#$%^&*()_-]{3,16}$/,"enter valid pass")
})
let myformik = useFormik({
    initialValues:{
    email:'',
    password:'',
    }
  ,
  onSubmit:(newvalues)=>{
    getUserLoginData(newvalues)
  },
  validationSchema:validation,
} 
)
async function getUserLoginData(values){
  setLoading(true)
  let {data} = await axios.post(`${baseUrl}/api/v1/auth/signin`,values).catch((error)=>{
    console.log(error);
    // setErrmsg(error.response.data.errors.msg)
    setErrmsg(error.response.data.message)
    setLoading(false)
  })
  console.log(data);
  setLoading(false) 
if(data.message == 'success'){
  localStorage.setItem("token",data.token) 
  saveUserData(data.user)
  navigate('/home')

}
}
  return (
   <>
   <div className='my-4 mx-5 mt-2 pt-4'>
   <h2>Login Now</h2>
   <form onSubmit={myformik.handleSubmit}>
<div className='mb-3'>
  <label htmlFor='email'>email:</label>
  <input onChange={myformik.handleChange} type="text" id='email' name='email' className='form-control' />
</div>
<p className='text-danger'>{myformik.errors.email}</p>
<div className='mb-3'>
  <label htmlFor='password'>Password:</label>
  <input onChange={myformik.handleChange} type="password" id='password' name='password' className='form-control' />
</div>
<p className='text-danger'>{myformik.errors.password}</p> 

{errmsg != ""? <div className='alert alert-danger'>{errmsg}</div> :""}
<Link to="/ForgetPassword">Forget Password?</Link>
<br/>
{loading? <button type='button' className='btn btn-success'>
  <i className='fa-solid fa-spinner fa-spin'></i>
</button> :<button disabled={!myformik.isValid} className='btn btn-success mt-2' type='submit'>Login</button> }
   </form>
   </div>
   </>
  )
}

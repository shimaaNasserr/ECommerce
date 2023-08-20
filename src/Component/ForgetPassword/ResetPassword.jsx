import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup'

export default function ResetPassword() {
  let baseUrl = 'https://ecommerce.routemisr.com'
    // let [errmsg,setErrmsg]= useState("")
    // let [loading,setLoading] = useState(false)
    let navigate = useNavigate();
    let validation = yup.object({
      email: yup.string().required().email("enter valid email"),
      newPassword: yup.string().required().matches(/^[A-Z][a-zA-Z0-9!@#$%^&*()_-]{3,16}$/,"enter valid pass")
    })
    let myformik = useFormik({
        initialValues:{
        email:'',
        newPassword:'',
        }
      ,
      onSubmit:(newvalues)=>{
        resetNewPassword(newvalues)
      },
      validationSchema:validation,
    } 
    )
    async function resetNewPassword(values){
        let {data} = await axios.put(`${baseUrl}/api/v1/auth/resetPassword`,values)
        console.log(data);
        if(data.token){
            navigate('/login')
        }
       
     
       
    }
  return ( <>
    <form onSubmit={myformik.handleSubmit} className='mt-5'>
<div className='mb-3'>
  <label htmlFor='email'>email:</label>
  <input onChange={myformik.handleChange} type="text" id='email' name='email' className='form-control' />
</div>
<p className='text-danger'>{myformik.errors.email}</p>
<div className='mb-3'>
  <label htmlFor='newPassword'>newPassword:</label>
  <input onChange={myformik.handleChange} type="password" id='newPassword' name='newPassword' className='form-control' />
</div>
<p className='text-danger'>{myformik.errors.newPassword}</p> 
<button type='submit' className='btn btn-success'>Update Password</button>
</form>
    
    </>
  )
  }

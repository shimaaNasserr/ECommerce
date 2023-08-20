import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
export default function Register() {
  let baseUrl = 'https://ecommerce.routemisr.com'
let [errmsg,setErrmsg]= useState("")
let [loading,setLoading] = useState(false)
let navigate = useNavigate();
let validation = Yup.object({
  name: Yup.string().required().min(2,"min 2 char").max(10,"max 10 char"),
  email: Yup.string().required().email("enter valid email"),
  phone: Yup.string().required().matches(/^(011|015|012|010)[0-9]{8}$/ , "enter valid phone"),
  password: Yup.string().required().matches(/^[A-Z][a-zA-Z0-9!@#$%^&*()_-]{3,6}$/,"enter valid pass 'must start with capital litter' "),
  rePassword: Yup.string().oneOf([Yup.ref("password")])
})
let myformik = useFormik({
    initialValues:{
    name:"",
    email:"",
    password:"",
    rePassword:"",
    phone:""
    }
  ,
  onSubmit:(newvalues)=>{
    getUserData(newvalues)
  },
  validationSchema:validation,
} 
)
async function getUserData(values){
  setLoading(true)
  let {data} = await axios.post(`${baseUrl}/api/v1/auth/signup`,values).catch((error)=>{
    console.log(error);
    setErrmsg(error.response.data.message)
    console.log(values);
    setLoading(false)
  })
//   console.log(values);
  console.log(data);
  setLoading(false) 
if(data.message=='success'){
  navigate('/login')
}
}

  return (
   <>
   <div className='my-4 mx-5 mt-2 pt-4'>
   <h2>Register Now:</h2>
   <form onSubmit={myformik.handleSubmit}>
<div className='mb-3'>
  <label htmlFor='name'>name:</label>
  <input onChange={myformik.handleChange} type="text" id='name' name='name' className='form-control' />
  <p className='text-danger'>{myformik.errors.name}</p>
</div>
<div className='mb-3'>
  <label htmlFor='email'>email:</label>
  <input onChange={myformik.handleChange} type="text" id='email' name='email' className='form-control' />
</div>
<div className='mb-3'>
  <label htmlFor='password'>Password:</label>
  <input type="password" onChange={myformik.handleChange}  id='password' name='password' className='form-control' />
</div>
<p className='text-danger'>{myformik.errors.password}</p>

<div className='mb-3'>
  <label htmlFor='rePassword'>rePassword:</label>
  <input type="password" onChange={myformik.handleChange}  id='rePassword' name='rePassword' className='form-control' />
</div>
<p className='text-danger'>{myformik.errors.rePassword}</p> 
<div className='mb-3'>
  <label htmlFor='phone'>Phone:</label>
  <input onChange={myformik.handleChange} type="text" id='phone' name='phone' className='form-control' />
</div>
{errmsg != ""? <div className='alert alert-danger'>{errmsg}</div> :""}
{loading? <button type='button' className='btn btn-success'>
  <i className='fa-solid fa-spinner fa-spin'></i>
</button> :<button disabled={!myformik.isValid} className='btn btn-success' type='submit'>Register</button> }


   </form>
   </div>
   </>
  )
}

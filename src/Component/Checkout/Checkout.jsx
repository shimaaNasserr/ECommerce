import { useFormik } from 'formik'
import React, { useContext } from 'react'
import { cartContext } from '../../assets/ShareData/cartContext';
import axios from 'axios';
import './Checkout.css'

export default function Checkout() {
    let {cartId} = useContext(cartContext)
    let baseUrl = 'https://ecommerce.routemisr.com'


    let formik = useFormik({
        initialValues:{
            "   ":'',
            phone:'',
            city:''
        },
        onSubmit:(val)=>{
            onlinePayment(cartId,val)
          },
    })
    async function onlinePayment(cartId,shippingAddress){
        let body = {
            shippingAddress:shippingAddress
        }
        let headers = {
            token: localStorage.getItem("token")
          }
          let {data} = await axios.post(`${baseUrl}/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,{body},{headers})
          console.log(data);
          if(data?.status=="success"){
           window.location.href =data.session.url
          }
    }
    
  return (
    <div className='w-50 mx-auto py-5'>
<form onSubmit={formik.handleSubmit}>
<label htmlFor="details">Details:</label>
<input type="text" className='form-control mb-3' value={formik.values.details} onChange={formik.handleChange} name='details' id='details' />
<label htmlFor="details">Phone:</label>
<input type="tel" className='form-control mb-3' value={formik.values.phone} onChange={formik.handleChange} name='phone' id='phone' />
<label htmlFor="city">City:</label>
<input type="text" className='form-control mb-3' value={formik.values.city} onChange={formik.handleChange} name='city' id='city' />

<button type='submit' className='btn border border-success w-100  pay'>Pay</button>
</form>
    </div>
  )
}

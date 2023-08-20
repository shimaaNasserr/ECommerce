import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { cartContext } from '../../assets/ShareData/cartContext'
import './CartDetails.css'
import { Link } from 'react-router-dom'
import {Helmet} from "react-helmet";
export default function CartDetails(){
    let {getAllCartData , cartData,removeItem,updateCount,clearCart} = useContext(cartContext)

    useEffect(()=>{
        getAllCartData()
    
    },[])

  return (
    <div>
        <Helmet>
                <title>Cart Details </title>
            </Helmet>
        {cartData? <table style={{verticalAlign:"middle"}} className='table bg-light  table-hover table-bordered text-center pt-5 mt-4'>
            <thead className='bg-success text-white'>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
           {cartData?.data?.products.map((el,i)=>{
            return  <tr key={i}>
            <td className='py-5'>
                <img src={el.product.imageCover} alt='' height={140} className='w-75'/>
            </td>
            <td className='text-success'>{el.product.title}</td>
            <td >
                <button className='btn btn-danger btn-sm rounded cursor' onClick={()=>{updateCount(el.product._id,el.count-=1)}}>-</button>
                <span className='mx-1'>{el.count}</span>
                <button className='btn btn-success btn-sm rounded cursor' onClick={()=>{updateCount(el.product._id,el.count+=1)}}>+</button>

            </td>
            <td>{el.price} <span className=' text-success'>EGP</span> </td>
            <td>
                <i className='fa-solid fa-trash text-danger cursor' onClick={()=>{removeItem(el.product._id)}}></i>
            </td>
        </tr>
           })}
      
                <tr className='table-danger'>
                    <td>Total</td>
                    {cartData.data?<td colSpan={4}>{cartData.data.totalCartPrice}  EGP</td>:<td colSpan={4}>0  EGP</td>}
                </tr>
            </tbody>
        </table>
        :""}
        <button disabled={!cartData?.data} type='button' className='btn btn-danger mx-auto ' onClick={clearCart}>Clear</button>
        <button disabled={!cartData?.data} type='button' className='btn btn-success mx-2 ' ><Link className='text-white text-decoration-none' to='/checkout'>CheckOut</Link></button>
    </div>
  )
}

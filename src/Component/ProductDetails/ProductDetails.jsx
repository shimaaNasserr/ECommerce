import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { toast } from 'react-hot-toast';
import { cartContext } from '../../assets/ShareData/cartContext';
export default function ProductDetails() {
  let {id} = useParams()
  let baseUrl = 'https://ecommerce.routemisr.com'
  let [productDetail,setProductDetail]= useState()
  let [ErrMsg,setErrMsg]= useState()
  let {setNumOfCartItems} = useContext(cartContext)

useEffect(()=>{
  getProductDeatails()
},[])
  async function getProductDeatails(){
    let {data} = await axios.get(`${baseUrl}/api/v1/products/${id}`)
    console.log(data.data);
    setProductDetail(data.data)
  }
async function addItemToCart(id){
  let body = {
    productId:id
  }
  let headers = {
    token: localStorage.getItem("token")
  }
  let  {data} = await axios.post(`${baseUrl}/api/v1/cart`,body,{
    headers
  }).catch((error)=>{
    setErrMsg()
  })
  console.log(data);
 
  if(data?.status == 'success'){
    setNumOfCartItems(data?.numOfCartItems)
    toast.success(data.message , { duration: 2000 })
      // nav('/cartDetails')
 }
  else{
    toast.error('Erorr',{ duration: 3000 })
  }
  console.log(data);
  console.log(body);
  console.log(headers);

}

  return (
<>
{productDetail? <div className='row align-items-center'>
  <div className="col-md-4">
  <OwlCarousel className='owl-theme' loop={true} items={1} autoplay={true}  autoplayTimeout={3000}   >
{productDetail.images.map((el)=>{
  return <div>
       <img src={el} alt="slide1" />
  </div>
})}
           </OwlCarousel>
  </div>
  <div className="col-md-8 ">
    <h2>{productDetail.title}</h2>
    <p>{productDetail.description}</p>
    {/* <span className='text-success'>{productDetail.category.name}</span> */}
    <div className="d-flex justify-content-between">
                  <p>{productDetail.price} EGP</p>
                  <div>
                    <i className='fa-solid fa-star text-warning'></i>{productDetail.ratingsAverage
                    }
                  </div>
                </div>
                <button type='submit' className='btn btn-success w-100' onClick={()=>addItemToCart(productDetail._id)}>+ Add to Cart</button>

    </div>
</div>:""}
</>
  )
}

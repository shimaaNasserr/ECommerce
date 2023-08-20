import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { toast } from 'react-hot-toast';
import { cartContext } from '../../assets/ShareData/cartContext';
import { FadeLoader } from 'react-spinners';
export default function SubCategory() {
  let {id} = useParams()
  let baseUrl = 'https://ecommerce.routemisr.com'
  let [catDetail,setCatDetail]= useState({})
  let [ErrMsg,setErrMsg]= useState()
  let {setNumOfCartItems} = useContext(cartContext)
  let [catList, setcatList] = useState([])
  let [loading, setLoading] = useState(true)
  useEffect(()=>{
    getCategoryDeatails()
  },[])
    async function getCategoryDeatails(){
      let {data} = await axios.get(`${baseUrl}/api/v1/subcategories`)
      console.log(data.data);
      setCatDetail({data})
      setLoading(false)
    }
    // async function addItemToCart(id){
    //     let body = {
    //       catId:id
    //     }
    //     let headers = {
    //       token: localStorage.getItem("token")
    //     }
    //     let  {data} = await axios.post(`${baseUrl}/api/v1/cart`,body,{
    //       headers
    //     }).catch((error)=>{
    //       setErrMsg()
    //     })
    //     console.log(data);
       
    //     if(data?.status == 'success'){
    //       setNumOfCartItems(data?.numOfCartItems)
    //       toast.success(data.message , { duration: 2000 })
    //         // nav('/cartDetails')
    //    }
    //     else{
    //       toast.error('Erorr',{ duration: 3000 })
    //     }
    // }
    return (
        <>
  
        </>
          )
        }

      //   {catDetail? <div className='row align-items-center'>
      //   <div className="col-md-4">
      //   <OwlCarousel className='owl-theme' loop={true} items={1} autoplay={true}  autoplayTimeout={3000}   >
      //        <img src={catDetail.image} alt="slide1" />
     

      //            </OwlCarousel>
      //   </div>
      //   <div className="col-md-8 ">
      //     <h2>{catDetail.title}</h2>
      //     <p>{catDetail.description}</p>
      //     {/* <span className='text-success'>{catDetail.category.name}</span> */}
      //     <div className="d-flex justify-content-between">
      //                   <p>{catDetail.price} EGP</p>
      //                   <div>
      //                     <i className='fa-solid fa-star text-warning'></i>{catDetail.ratingsAverage
      //                     }
      //                   </div>
      //                 </div>
      //                 <button type='submit' className='btn btn-success w-100' onClick={()=>addItemToCart(catDetail._id)}>+ Add to Cart</button>
      
      //     </div>
      // </div>:""}
import React, { useEffect, useState }  from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import  './CategorySlider.css'
import { useContext } from 'react';
import { categoryContext } from '../../assets/ShareData/CategoryContext';
import axios from 'axios';

export default function CategorySlider() {
  let baseUrl = 'https://ecommerce.routemisr.com'
  let [categoryList, setCategoryList] = useState([])

  useEffect(() => {
    getAllDataCategories()
  }, [])

  async function getAllDataCategories() {
    let { data } = await axios.get(`${baseUrl}/api/v1/categories`)
    // console.log(data);
    setCategoryList(data.data)
  }
  return (
    <>
           <OwlCarousel className='owl-theme' loop={true} items={7} margin={0} dots={false} autoplay={true}  autoplayTimeout={1000}>
           {categoryList.map((cat,i)=>{
      return <div key={i} className='imgimg1'>
      <img src={cat.image} alt="slide1" className='imgimg1' />
      </div>
       })}
           </OwlCarousel>
           <OwlCarousel className='owl-theme' loop={true} items={7} margin={0} autoplay={true} autoplayTimeout={2000} >
           {categoryList.map((cat)=>{
      return <div className='imgimg2' >
      <img src={cat.image} alt="slide1"   />
      <h6 className='mt-2 catName' >{cat.name}</h6>
      </div>
       })}
           </OwlCarousel>

    
     
    </>
  )
}



  
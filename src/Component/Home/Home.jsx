import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import MainSlider from '../MainSlider/MainSlider'
import { Link } from 'react-router-dom'
// import $ from 'jquery'
import './Home.css'
import FadeLoader from 'react-spinners/FadeLoader'
import Category from '../CategorySlider/CategorySlider'
import CategorySlider from '../CategorySlider/CategorySlider'
import { cartContext } from '../../assets/ShareData/cartContext'
import {Helmet} from "react-helmet";

export default function Home() {
  let baseUrl = 'https://ecommerce.routemisr.com'
  let [productList, setProductList] = useState([])
  let [loading, setLoading] = useState(true)
  let {setNumOfCartItems} = useContext(cartContext)

  useEffect(() => {
    getAllProducts()
  }, [])

  async function getAllProducts() {
    let { data } = await axios.get(`${baseUrl}/api/v1/products`)
    console.log(data);
    setProductList(data.data)
    setNumOfCartItems(data?.numOfCartItems)
    setLoading(false)
  }
  return (
    <>
     <Helmet>
                <title>Home</title>
            </Helmet>
    <MainSlider />
    <CategorySlider/>
   {loading? <div className='lodingg position-fixed top-0 bottom-0 end-0 start-0'>
    <FadeLoader
        color={'#38D6B7'}
        loading={loading}
        size={80}
      />
      </div>: (
      <div className="row g-5 mt-1">
        {productList.map((product) => {
          return <div key={product._id} className="col-md-2">
            <Link to={'/ProductDetails/'+product._id} className='text-decoration-none text-black'>
              <div className="product border px-2">
                <img src={product.imageCover} className='w-100' alt="" />
                <span className='text-success '>{product.category.name}</span>
                <h2 className='h5 fw-bold text-center'>{product.title.split(" ").slice(0, 2).join(" ")}</h2>
                <div className="d-flex justify-content-between">
                  <p>{product.price} EGP</p>
                  <div>
                    <i className='fa-solid fa-star text-warning'></i>{product.ratingsAverage
                    }
                  </div>
                </div>
              </div>
            </Link>
          </div>
        })}
      </div>)}
    
    </>

  )
}

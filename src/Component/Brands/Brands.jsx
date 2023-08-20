import React, { useContext, useEffect, useState} from 'react'
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';

export default function Brands() {
  let baseUrl = 'https://ecommerce.routemisr.com'
  let [BrandList, setBrandList] = useState([])
  let [loading, setLoading] = useState(true)


  useEffect(() => {
    getAllDataBrands()
  }, [])

  async function getAllDataBrands() {
    let { data } = await axios.get(`${baseUrl}/api/v1/brands`)
    console.log(data);
    setBrandList(data.data)
    setLoading(false)
  }
  return (
    <>
       <Helmet>
                <title>Brands</title>
            </Helmet>
            {loading? <div className='lodingg position-fixed top-0 bottom-0 end-0 start-0'>
    <FadeLoader
        color={'#38D6B7'}
        loading={loading}
        size={80}
      />
      </div>:
         <div className='row  mx-5 mt-1 pt-1'>
           {BrandList.map((cat)=>{
      return <div className='col-md-3' key={cat._id}>
         <Link to={'/SubCategory'} className='text-decoration-none text-black'>
      <img src={cat.image} alt="slide1" height={200}   />
      <h6 className='mt-2 catName' >{cat.name}</h6>
      </Link>
      </div>
       })}
       </div>
}
</>
  )
}

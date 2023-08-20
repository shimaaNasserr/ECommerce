import React, { useContext, useEffect, useState} from 'react'
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';

export default function Category() {
  let baseUrl = 'https://ecommerce.routemisr.com'
  let [categoryList, setCategoryList] = useState([])
  let [loading, setLoading] = useState(true)


  useEffect(() => {
    getAllDataCategories()
  }, [])

  async function getAllDataCategories() {
    let { data } = await axios.get(`${baseUrl}/api/v1/categories`)
    console.log(data);
    setCategoryList(data.data)
    setLoading(false)
  }
  return (
    <>
       <Helmet>
                <title>Category</title>
            </Helmet>
            {loading? <div className='lodingg position-fixed top-0 bottom-0 end-0 start-0'>
    <FadeLoader
        color={'#38D6B7'}
        loading={loading}
        size={80}
      />
      </div>:
         <div className='row  mx-5 mt-5 pt-1'>
           {categoryList.map((cat)=>{
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

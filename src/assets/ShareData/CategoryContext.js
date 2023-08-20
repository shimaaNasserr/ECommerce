import axios from "axios";
import { createContext, useEffect, useState } from "react"; 
export let categoryContext = createContext(null)

 export  function CategoryContextProvider(props){
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
return <categoryContext.Provider value={{categoryList}}>
    {props.childern}
</categoryContext.Provider>
 }
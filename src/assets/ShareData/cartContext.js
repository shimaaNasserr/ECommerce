import axios from "axios";
import { createContext, useEffect, useState } from "react";


export let cartContext = createContext(null)

export  function CartContextProvider(props){
    let baseUrl = 'https://ecommerce.routemisr.com'
    let [cartData, setCartData] = useState()
    let[cartId ,setCartId]=useState(null)
    let[numOfCartItems ,setNumOfCartItems]=useState(null)
useEffect(()=>{
    getAllCartData()
},[])

async function getAllCartData(){
    let headers = {
        token: localStorage.getItem("token")
      }
      let  {data} = await axios.get(`${baseUrl}/api/v1/cart`,{headers})
      setCartData(data)
      console.log(data);
      console.log(data?.data?._id);
      setCartId(data?.data?._id)  
      setNumOfCartItems(data?.numOfCartItems)      
}
async function removeItem(id){
    let headers = {
        token: localStorage.getItem("token")
      }
      let  {data} = await axios.delete(`${baseUrl}/api/v1/cart/${id}`,{headers})
      setCartData(data)
}
async function updateCount(id,count){
    let body = {
        count:count
    }
    let headers = {
        token: localStorage.getItem("token")
      }
      let  {data} = await axios.put(`${baseUrl}/api/v1/cart/${id}`,body,{headers})
      setCartData(data)
}

async function clearCart(){
    let headers = {
        token: localStorage.getItem("token")
      }
      let  {data} = await axios.delete(`${baseUrl}/api/v1/cart`,{headers})
      setCartData(data) 
}

   return <cartContext.Provider value={{cartData,getAllCartData,removeItem,updateCount,clearCart,cartId,numOfCartItems,setNumOfCartItems}}>
        {props.children}
    </cartContext.Provider>

}
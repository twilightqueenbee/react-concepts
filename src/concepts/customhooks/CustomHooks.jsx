import React from 'react'
import useFetch from './utils/usefetchhook';
import { toast } from 'react-toastify';

const CustomHooks = () => {
  const {loading,urldata,error}= useFetch("https://fakestoreapi.com/products",)
    if(error){
        toast.error(error,{position:"top-center"})
    }
  return (
    <div>
        {
          loading?<h1>Loading</h1>:urldata.map((user,index)=>{
                return <p key={index}>{user.title}</p>
            })
        }
    </div>
  )
}

export default CustomHooks
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Table from './Table'

const UseEffectTask1 = () => {
    const [products,setProducts]=useState([])

    const fdata=async () => {
        try {
            const response=await fetch("https://fakestoreapi.com/products")
            const data=await response.json()
            setProducts(data)
        } catch (error) {
            toast.error("Failed to load the data.please try again later",{position:"top-center"})
        }
    }

    useEffect(()=>{
        fdata()
    },[])

    console.log(products)
  return (

    <div>
        <h1>UseEffectTask1</h1>
        {
            products.length===0?<h1>Loading......</h1>:<Table data={products}/>
        }
    </div>
  )
}

export default UseEffectTask1
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosConcept = () => {
    const [products, setProducts] = useState([]);

    const fdata = async () => {
        const {data} = await axios.get("https://fakestoreapi.com/products");
        setProducts(data)
    }

    useEffect (() => {
         fdata()
    }, [])

  return (
    <div>
        <h1>AxiosConcept</h1>
        {
            products.length === 0 ? <h1>Loading...</h1> : products.map((ele, index) => {
                return <h1 key={index}>{ele.title}</h1>
            })
        }
    </div>
  )
}

export default AxiosConcept;

//!Axios: It is a third party library which is used to handle the api/http requests in frontend.
    //! http: 
    // GET: gets the data from frontend to backend
    // POST: gets the data from backend to frontend
    // PUT: keeps the old data and puts the new data
    // PATCH: partial update
    // DELETE
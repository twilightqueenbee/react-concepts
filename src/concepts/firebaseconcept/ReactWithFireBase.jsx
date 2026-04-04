import React from 'react'
import { createDocument, fetchDocuments } from './firebaseCRUD'

const ReactWithFireBase = () => {
    const uploadDocs=async () => {
        await createDocument("users",{username:"sundari",age:22})
    }

    const fdata=async () => {
        const res=await fetchDocuments("users")
        console.log(res)
    }
  return (
    <div>
        <h1>ReactWithFireBase</h1>
        <button className='border' onClick={uploadDocs}>Upload</button>
        <button className='border' onClick={fdata}>Fetch</button>
    </div>
  )
}

export default ReactWithFireBase
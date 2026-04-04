import React, { useState } from 'react'

const Child = ({count,setCount}) => {
    console.log("child")
    
  return (
    <div>
        <h2>{count} in child</h2>
        <button onClick={()=>{setCount(count+1)}}>Update from child</button>
    </div>
  )
}

export default Child
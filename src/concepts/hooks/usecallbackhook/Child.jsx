import React from 'react'

const Child = ({data}) => {
    console.log("child");
    
  return (
    <div>
        <h1>Child</h1>
        <button className='p-3 bg-red-500 text-white cursor-pointer' onClick={() => setCount(count + 1)}>Delete</button>
    </div>
  )
}

export default React.memo(Child);
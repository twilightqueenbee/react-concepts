import React, { useCallback, useState } from 'react'
import Child from './Child'

const UseCallBackHook = () => {
    const [count, setCount] = useState(0);
    console.log("parent");

    // const deleteUser = () => {
    //     console.log("delete user");
    // }
    
    const deleteUser = useCallback(() => {
        console.log("delete user");
    }, []);
  return (
    <div>
        <h1>UseCallBackHook</h1>
        <p className='text-6xl'>{count}</p>
        <button className='p-3 bg-blue-500 text-white cursor-pointer' onClick={() => setCount(count + 1)}>Update</button>
        <hr />  
        <Child data={deleteUser} />
    </div>
  )
}

export default UseCallBackHook
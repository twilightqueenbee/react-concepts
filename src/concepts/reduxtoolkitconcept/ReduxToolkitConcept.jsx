import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decre, incre, reset } from './features/counterSlice'

const ReduxToolkitConcept = () => {
    const count=useSelector((state)=>state.counter)
    const dispatch=useDispatch()
  return (
    <div>
        <h1>{count}</h1>
        <button className='border' onClick={()=>dispatch(incre())}>Increment</button>
        <button className='border' onClick={()=>dispatch(decre())}>Decrement</button>
        <button className='border' onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}

export default ReduxToolkitConcept
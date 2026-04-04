import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleinput, loginsubmit, resetForm } from './features/loginSlice'

const Login = () => {
    const formData=useSelector((state)=>state.login)
    console.log(formData)
    const dispatch=useDispatch()
    const handleInputs=(e)=>{
        const {name,value}=e.target 
        dispatch(handleinput({[name]:value}))
    }
    const handleForm=(e)=>{
        e.preventDefault() 
        dispatch(loginsubmit())
        dispatch(resetForm())
    }
  return (
    <div>
        
        <form onSubmit={handleForm}>
            <input type="email" name="email" value={formData.email} className='border' onChange={handleInputs} />
            <br />
            <input className='border' type="password" name="password" value={formData.password} onChange={handleInputs} />
            <br />
            <button className='border'>submit</button>
        </form>
    </div>
  )
}

export default Login
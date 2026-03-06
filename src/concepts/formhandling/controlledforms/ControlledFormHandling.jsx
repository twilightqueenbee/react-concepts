import React, { useState } from 'react'

const ControlledFormHandling = () => {
    const [formData,setformData]=useState({
        username:""
    })

    const [errors,setErros]=useState(null)

    const handleInput=(e)=>{
        const {name,value}=e.target
        setErros(null)
       setformData({...formData,[name]:value})
    }
    const handleForm=(e)=>{
        e.preventDefault()
        if(!formData.username){
            setErros(true)
        }
        setformData({
            username:""
        })
    }
  return (
    <div>
        <form onSubmit={handleForm}>
            <input type="text" placeholder='username' name='username'  onChange={handleInput} value={formData.username}/>
            {
                errors? <p style={{color:"red"}}>Username is required <sup>*</sup></p>:""
            }
            {/* <input type="email" placeholder='email' name='email'  onChange={handleInput}/>
            <input type="password" placeholder='password' name='password'  onChange={handleInput}/>
            <input type="number" placeholder='phoneno' name='phoneno'  onChange={handleInput}/> */}
            
            <br />
            <button>submit</button>
        </form>
        <h1>{formData.username}</h1>
        <h1>{formData.email}</h1>
        <h1>{formData.password}</h1>
        <h1>{formData.phoneno}</h1>
    </div>
  )
}

export default ControlledFormHandling
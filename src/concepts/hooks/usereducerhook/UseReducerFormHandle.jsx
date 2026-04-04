import React, { useReducer } from 'react'

const UseReducerFormHandle = () => {

    const initialform={
        username:"",
        age:"",
        email:""
    }   // step 2

const formreducer=(state , action)=>{       // step 3
    switch (action.type) {
        case "update":{
            return {...state,...action.payload}
        }
        case "submit":{
                // write the logic to send the data to backend
                console.log("final data")
                console.log(action.payload)
        }
        case "clear":{
            return initialform;
        }
        default:
            return state;
    }
}

const [formData,dispatch]=useReducer(formreducer,initialform) // step 1
    const handleInput=(e)=>{
        const {name,value}=e.target 
        dispatch({type:"update",payload:{[name]:value}})
    }
    const handleForm=(e)=>{
        e.preventDefault()
        dispatch({type:"submit",payload:formData})
        dispatch({type:"clear"})

    }
    
  return (
    <div >
        <form onSubmit={handleForm}>
            <input type="text" className='border' placeholder='your name' name='username' value={formData.username} onChange={handleInput} />

            <input type="text" className='border' placeholder='your email' name='email' value={formData.email} onChange={handleInput} />

            <input type="number" className='border' placeholder='your age' name='age' value={formData.age} onChange={handleInput} />
            <br />
            <br />
            <button className='border'>Submit</button>
        </form>

        <h1>{formData.username}</h1>
    </div>
  )
}

export default UseReducerFormHandle
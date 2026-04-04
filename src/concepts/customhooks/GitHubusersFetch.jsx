import React from 'react'
import useFetch from './utils/usefetchhook'
import { toast } from 'react-toastify'

const GitHubusersFetch = () => {
    const {loading,urldata,error}=useFetch("https://api.github.com/use")
    if(error){
        toast.error(error,{position:"top-center"})
        
    }
  return (
    <div>
        {
            loading?<h1>Loading....</h1>:urldata.map((user,index)=>{
                return <p key={index}>{user.login}</p>
            })
        }
    </div>
  )
}

export default GitHubusersFetch
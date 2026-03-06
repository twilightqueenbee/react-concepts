import React, { useState } from 'react'
import { TbEdit } from 'react-icons/tb'

const UseStateTask2 = () => {
    const [userData,setUserData]=useState({
        username:"sundari",
        age:22,
        email:"sundari@gmail.com",
        phone:123456789,
        gender:"female",
        loc:"BBSR",
        b_group:"B+"
    })
    const {username,age,email,phone,gender,loc,b_group}=userData

    const updateName=()=>{
        const newvalue=prompt("enter your name :")
       setUserData({...userData,username:newvalue})
    }

    const updateage=()=>{
        const newAge=Number(prompt("Enter your age :"))
        setUserData({...userData,age:newAge})
    }
  





  return (
    <div className='task2'>
        
        <div className="card">
            <div className="img">
                L
            </div>
            <div className="text">
                <h2>{username} <TbEdit cursor={"pointer"} onClick={updateName} /></h2>
                <p>{age} <TbEdit cursor={"pointer"} onClick={updateage} /></p>
                <p>{email}</p>
                <p>{gender}</p>
                <p>{phone}</p>
                <p>{loc}</p>
                <p>{b_group}</p>
            </div>
        </div>
    </div>
  )
}

export default UseStateTask2
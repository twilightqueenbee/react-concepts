import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-screen h-19.5 bg-gradient-to-r from-red-500 to-orange-500 text-white flex items-center justify-around p-3.5'>
        <div className='w-[15%] h-full flex items-center justify-center  font-serif font-extrabold tracking-widest cursor-pointer'><Link>Logo</Link></div>
        <ul className='w-[40%] h-full  flex items-center-safe justify-around '>
            <li className='p-2 hover:underline text-white cursor-pointer '><Link to="/home">Home</Link></li>
            <li className='p-2 hover:underline text-white cursor-pointer '><Link to="/about">About</Link></li>
            <li className='p-2 hover:underline text-white cursor-pointer '><Link to="/projects">Projects</Link></li>
            <li className='p-2 hover:underline text-white cursor-pointer '><Link to="/contact">Contact</Link></li>
        </ul>
        <button className='px-2 py-2 hover:bg-amber-500 bg-gradient-to-r from-amber-200 to-yellow-500 rounded-2xl '><Link to="/login">Login</Link></button>
    </div>
  )
}

export default Navbar
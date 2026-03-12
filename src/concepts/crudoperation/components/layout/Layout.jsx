import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='w-screen h-auto '>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout
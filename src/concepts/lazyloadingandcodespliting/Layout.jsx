import React, {Suspense} from 'react'
import { Link, Outlet } from 'react-router-dom'
import Loading from './Loading'
import Button from '@mui/material/Button';

const Layout = () => {
  return (
    <div>
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
        <Button variant="contained">Click Me</Button>
        <hr />
        <Suspense fallback = {<Loading />}>
            <Outlet />
        </Suspense>
    </div>
  )
}

export default Layout
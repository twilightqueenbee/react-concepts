import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import RegisterUser from './components/RegisterUser'
import UpdateUser from './components/UpdateUser'

const ReactFirebaseTask = () => {
    const routes=createBrowserRouter([
        {
            path:"/",
            element:<Dashboard/>
        },
        {
            path:"/register",
            element:<RegisterUser/>
        },
        {
            path:"/updateuser/:userId",
            element:<UpdateUser/>
        }
    ])
  return (
    <div>
        <RouterProvider router={routes}/>
    </div>
  )
}

export default ReactFirebaseTask
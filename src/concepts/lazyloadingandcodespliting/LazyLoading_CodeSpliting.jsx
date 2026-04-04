import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from 'lucide-react'
import ErrorElement from './ErrorElement'

const Home = React.lazy(() => import("./Home"))
const About = React.lazy(() => import("./About"))
const Dashboard = React.lazy(() => import("./Dashboard"))

const LazyLoading_CodeSpliting = () => {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/home",
                    element: <Home />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/dashboard",
                    element: <Dashboard />
                }
            ], 
            errorElement: <ErrorElement/>
        }
    ])
  return (
    <RouterProvider router = {routes}/>
  )
}

export default LazyLoading_CodeSpliting
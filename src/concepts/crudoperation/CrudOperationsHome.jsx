import React from "react";
import { RouterProvider } from "react-router-dom";
import {routes} from './routes/routes';

const CrudOperationsHome = () => {
    return (
        <RouterProvider router={routes}/>
    )
}
export default CrudOperationsHome;
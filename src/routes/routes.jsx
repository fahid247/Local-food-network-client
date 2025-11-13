import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root';
import Home from '../pages/Home';
import AddReview from '../pages/AddReview';
import MyReview from '../pages/MyReview';
import ViewDetails from '../pages/ViewDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';

const router = createBrowserRouter([
    {
        path:"/",
        Component: Root,
        children:[
            {
                index:true,
                Component:Home,
            },
            {
                path:"/addReview",
                Component:AddReview
            },
            {
                path:"/myReview",
                Component:MyReview
            },
            {
                path:"/viewDetails",
                Component: ViewDetails
            }
        ]
    },
    {
        path:"/login",
        Component:Login
    },
    {
        path:"/register",
        Component:Register
    }
])

export default router;
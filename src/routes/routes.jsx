import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root';
import Home from '../pages/Home';
import AddReview from '../pages/AddReview';
import MyReview from '../pages/MyReview';

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
            }
        ]
    }
])

export default router;
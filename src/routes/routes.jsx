import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root';
import Home from '../pages/Home';
import AddReview from '../pages/AddReview';
import MyReview from '../pages/MyReview';
import ViewDetails from '../pages/ViewDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoute from './PrivateRouter';
import EditReview from '../pages/EditReview';
import NotFound from '../pages/NotFound';
import AllReviews from '../pages/AllReviews';

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
                element:<PrivateRoute><AddReview></AddReview></PrivateRoute>
            },
            {
                path:"/myReview",
                element:<PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path:"/viewDetails",
                element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>
            },
            {
                path:"/editReview/:id",
                Component:EditReview
            },
            {
                path:"/allReviews",
                Component:AllReviews
            },
            {
                path:"*",
                Component:NotFound
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
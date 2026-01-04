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
import MyProfile from '../pages/Myprofile';
import UpdateProfile from '../pages/UpdateProfile';
import ComplainBox from '../pages/ComplainBox';
import AboutUs from '../pages/AboutUs';
import DashboardLayout from '../DashboardLayout/DashboardLayout';
import DashHome from '../pages/DashHome';
import MyReviews from '../pages/MyReview';

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
                path:"/viewDetails/:id",
                element:<ViewDetails></ViewDetails>
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
            },
            {
                path:"/myProfile",
                Component: MyProfile
            },
            {
                path:"/updateProfile",
                Component: UpdateProfile
            },
            {
                path:"/complainBox",
                Component: ComplainBox
            },
            {
                path:"/aboutUs",
                Component: AboutUs
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
    },
    {
        path:"/dashboard",
        Component: DashboardLayout,
        children:[
             {
                index:true,
                Component: DashHome
             },
             {
                path:"/dashboard/my-reviews",
                Component: MyReviews
             },
             {
                path:"/dashboard/add-reviews",
                Component: AddReview
             }
        ]
    }
])

export default router;
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './routes/routes.jsx'
import Authprovider from './context/Authprovider.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
        <RouterProvider router={router}></RouterProvider>
    </Authprovider>
    <Toaster></Toaster>
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import {
  createBrowserRouter,
  RouterProvider, 
  Route
} from 'react-router-dom'
import './reset.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <Login/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

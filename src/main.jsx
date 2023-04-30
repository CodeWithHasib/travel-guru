import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import User from './components/user/User.jsx'
import Login from './components/user/Login.jsx'
import Register from './components/user/Register.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path : '/' , element: <Home /> }
    ]
  }, 
  {
    path: '/user',
    element : <User /> , 
    children : [
      {path : 'login' , element : <Login />}, 
      {path : 'register' , element : <Register />}
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

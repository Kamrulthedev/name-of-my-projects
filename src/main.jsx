import React from 'react'
import ReactDOM from 'react-dom/client'
// eslint-disable-next-line no-unused-vars
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Compunents/Home/Home.jsx';
import About from './Compunents/About/About';
import Contect from './Compunents/Contect/Contect';
import Usre from './Compunents/Usres/Usre.jsx'; 


const router = createBrowserRouter([{
  path: '/',
  element: <Home></Home>,
  children : [
    
  {
    path : '/about',
     element : <About></About>
  },
  {
    path: '/Contect',
   
    element : <Contect></Contect>
  },
  {
    path: '/Users',
    loader : ()=>fetch('https://jsonplaceholder.typicode.com/users'),
    element : <Usre></Usre>
  }
  ]
}
])






ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

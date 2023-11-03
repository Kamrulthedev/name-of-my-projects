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
import UserDetiles from './assets/User/Users/UserDetils/UserDetiles.jsx';
import Posts from './assets/User/Users/Posts/Posts.jsx';
import PostDetails from './assets/User/Users/PostDetails/PostDetails.jsx';
import Erropage from './assets/User/Users/ErroPage/Erropage.jsx';


const router = createBrowserRouter([{
  path: '/',
  element: <Home></Home>,
  errorElement: <Erropage></Erropage>,
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
  },
  {
    path : 'User/1',
    element : <UserDetiles></UserDetiles>
  },
  {
    path : '/Posts',
    loader : () => fetch('https://jsonplaceholder.typicode.com/posts'),
    element : <Posts></Posts>
  },
  {
    path: '/post/:postId',
    loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
    element: <PostDetails></PostDetails>
  }
  ]
}
])






ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'



const router = createBrowserRouter ([{
  path: "/",
  element: <div>Hello !!</div>
},
{
  path: "/react",
  element: <div>I am Frist React Router Application</div>

},
{
  path: "/about",
   element : <div>I am in the about page</div>
},
{
  path: "/div",
  element: <div>I am a web Developer for my paletfrom for the proggraming Hero</div>
}
])


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

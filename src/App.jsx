import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import BodyBox from "./components/Bodybox";
import {createBrowserRouter,RouterProvider , Outlet} from "react-router-dom"
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import DetailedCart from "./components/DetailedCart";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const App = ()=>(
  <div id="main-container">
    <Header/>
    <Outlet/>
  </div>
)

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[ {
        path:"/",
        element:<BodyBox/>
      },
      {
        path:"/about",
        element:<AboutUs/>
      },
      {
        path:"/contact",
        element:<ContactUs/>
      },
      {
        path:"/detailedcart/:cartid", // here we are sending id to DetailedCart component 
        element:<DetailedCart/>
      }
    ]
  }
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router}/>)


import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../Utilis/firebase';
import {useDispatch} from "react-redux";
import {addUser, removeUser} from "../Utilis/userSlice"


const Body = () => {
    const dispatch = useDispatch()
    

    const appRouter = createBrowserRouter([

        {
            path:"/",
            element:<Login/>
        },
         {
            path:"/browse",
            element:<Browse/>
        }
    ]);


  return (
    <div>
     <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
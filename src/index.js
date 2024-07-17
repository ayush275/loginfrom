import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './pages/Login';
import Edit from './pages/Edit';
import Table from './pages/table';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,  
} from "react-router-dom";
import User from './pages/User';
import SignUp from './pages/Sign';
import Home from './pages/Home';
import Logout from './pages/Logout';
import Dashboard from './pages/dashboard';

const router = createBrowserRouter([
    {
        path: "",
        element: <SignUp />
       ,
    },
    {
        path: "Login",
        element: <Login/>
        ,
    },
    {
        path: "User",
        element: <User />
        ,
        
    },
    {
        path: "Edit/:id",
        element:<Edit/>
        ,
    },
    {
        path:"table",
        element:<Table/>
        ,
    },
    {
        path:"App",
        element:<App/>
        ,
    },
    {
        path:"Home",
        element:<Home/>
        ,
    },
    {
        path:"addUser",
        element:<addUser/>
        ,

    },
    {
        path:"Logout",
        element:<Logout/>    
    
    },
    { 
        path:"dashboard",
        element:<Dashboard/>

    }


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

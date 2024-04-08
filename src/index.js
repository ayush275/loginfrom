import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './pages/Login';
import Edit from './pages/Edit';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    
} from "react-router-dom";
import User from './pages/User';
import SignUp from './pages/Sign';



const router = createBrowserRouter([
    {
        path: "",
        element: <SignUp />
       ,
    },
    {
        path: "Login",
        element: <Login/>,
    },
    {
        path: "User",
        element: <User />,
        
    },
    {
        path: "Edit/:id",
        element:<Edit/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

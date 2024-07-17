import React, { useState,useEffect} from "react";
import axios from "axios";
import '../style/signin.css';
import NAV from '../nav';
import { Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUserCircle } from "react-icons/fa";
import Container from 'react-bootstrap/Container';


const Login = (navigate) => {
    const [Data, setData] = useState({
        ID:"",
        Name:"",
        lastname:"",
        departement:"",
    });

    const [errorMessage, setErrorMessage] = useState("");
    
    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...Data,
            [e.target.name]: value
        });
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            Id: Data.id,
            Name: Data.name,
            Lastname: Data.lastname,
            Departement: Data.departement
        };
        debugger;
        const Token = localStorage.getItem("token");
        if (Token) {
          axios.defaults.headers.common["Authorization"] = `Bearer ${Token}`;
        }
        axios.post("https://localhost:7205/api/User", userData,).then((response) => {
            toast.info("your account has been created successfully",{
                position:"top-center",
                autoClose:2000
            });       
            navigate("/");
            console.log(response.status, response.Data.token);       
        })
        .catch ((error) => {
            if (error.response) {
                
                console.error("Response data:", error.response.data);
                
            } else if(error.request) { 
                console.error("No response received:", error.request);
               
            }
        });

        setTimeout(() => {
            setErrorMessage("");
        }, 5000);
        
   };
 
    return (
       
        <div className="signinscreen">
             <NAV/> 
            <div className='container'>
            <div className="innerContainer">
            {errorMessage && <h2 className="mes">{errorMessage}</h2>}
            <div style={{cursor: 'pointer'}} >
              <i class="fas fa-arrow-circle-left fa-5x"></i>
            </div>
            <p>SignUp</p> 
            <form onSubmit={handleSubmit} className="sign-up-form">
               
                    <label  htmlFor="text">
                        ID:  </label>
                    <input
                        type="text"
                        name="id"
                        value={Data.id}
                        onChange={handleChange} required
                        
                        maxlength="10"
                    />
                  
                    <label htmlFor="text">
                        Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={Data.name}
                        onChange={handleChange} required
                        maxlength="50"
                       
                    />
                 
                    <label  htmlFor="email">
                        Lastname:</label>
                    <input
                        type="text"
                        name="lastname"
                        value={Data.lastname}
                        onChange={handleChange} required
                        maxlength="50"
                       
                    />
                   
              
                 
                    <label  htmlFor="text">
                        Department:</label>
                    <input
                        type="text"
                        name="departement"
                        value={Data.departement}
                        onChange={handleChange} required
                        maxlength="50"
                    />
                        <button type="submit">Submit</button>
                
                </form>
                </div>
            </div>
            
            </div>
           
    );
};
export default Login;
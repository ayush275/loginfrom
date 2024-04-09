import React, { useState} from "react";
import axios from "axios";
import "../App";
import { Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUserCircle } from "react-icons/fa";

const Login = () => {
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
        axios.post("https://localhost:7205/api/User", userData,).then((response) => {
            toast.info("your account has been created successfully",{
                position:"top-center",
                autoClose:2000
            });       
            //navigate("/");
            console.log(response.status, response.Data.token);
            debugger;

           
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
      
        <div className='dd'>
            <ul>
              <li className="nav-item">
                        <button><Link to="/" className="nav-link"><FaUserCircle color="skyblue"/></Link>LogIn</button>
                    </li>
                
                </ul>
                <ToastContainer/>
            <h1 className='login' >SignUp</h1>        
            {/* <button className="signup-button">
                <a href="/" className="signup-link">LogIn</a>
            </button> */}
            <div className='frm'>
            {errorMessage && <h2 className="mes">{errorMessage}</h2>}
            <form onSubmit={handleSubmit}>
                    <label className='label' htmlFor="text">
                        ID:  </label>
                    <input
                        type="text"
                        name="id"
                        value={Data.id}
                        onChange={handleChange} required
                        style={{
                            width: '200px',
                            borderRadius: '3px'
                        }}
                        maxlength="10"
                    />
                    <br />
                    <br />
                    <label className='label' htmlFor="text">
                        Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={Data.name}
                        onChange={handleChange} required
                        maxlength="50"
                        style={{
                            width: '200px',
                            borderRadius:'3px'
                        } }
                    />
                    <br />
                    <br />
                    <label className='label' htmlFor="email">
                        Lastname:</label>
                    <input
                        type="text"
                        name="lastname"
                        value={Data.lastname}
                        onChange={handleChange} required
                        maxlength="50"
                        style={{
                            width: '200px',
                            borderRadius: '3px'
                        }}
                    />
                   
                    <br />
                    <br />
                    <label className='label' htmlFor="text">
                        Department:</label>
                    <input
                        type="text"
                        name="departement"
                        value={Data.departement}
                        onChange={handleChange} required
                        maxlength="50"
                        style={{
                            width: '200px',
                            borderRadius: '3px'
                        }}
                    />
              
                <br/>
                    <div className='btn'>
                        <button className='btnn' type="submit">Submit</button>
                </div>
                </form>
                
            </div>

            </div>
            
    );
};
export default Login;
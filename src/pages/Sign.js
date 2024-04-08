import React, { useState } from 'react';
import axios from 'axios';
import '../App';
import NAV from '../nav';
import { useNavigate } from "react-router-dom";



const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        Password: ''
    });

    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
   
    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            Name: formData.username,
            Password: formData.password
            
        };
        
        debugger;
        axios.post("https://localhost:7205/api/User/Login", userData).then((response) => {
             navigate("/User");
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
    };


    return (
        <div className='dd'>
            <NAV/>
            <h2 className='login' >LogIn</h2>
            {/* <button className="signup-button">
                <a href="/Login" className="signup-link">SignUp</a>
            </button> */}
            
            <div className='frm'>
             
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label'>Username</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} required style={{
                        width: '200px',
                        borderRadius:'3px'
                    } } />
                        <br />
                        <br/>
                    </div>
                    <div>
                    <label className='label' >Password:</label>
                    <input type="text" name="password" value={formData.password} onChange={handleChange} required style={{
                        width: '200px',
                        borderRadius:'3px'
                       }} />
                       <br />
                     
                    </div>
                    <div className='btn'>
                        <button className='btnn' type="submit">Login</button>
                    </div>
                   
                </form>
            </div>
        </div>
    );
};

export default SignUp;

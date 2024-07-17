import React, { useState } from 'react';
import axios from 'axios';
import '../style/signin.css';
import NAV from '../nav';
import { useNavigate } from "react-router-dom";
import { FaHome, FaShoppingCart, FaUser } from 'react-icons/fa';
import { Navbar, Nav } from 'react-bootstrap';
import ImageCap from '../pages/ImageCap'
const SignUp = (navigation) => {
    const [formData, setFormData] = useState({
        name: '',
        Password: ''
    });
    const navigate = useNavigate();
    const [imageObject, setImageObject] = useState(null);
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
        axios.post("https://localhost:7205/api/User/Login", userData,).then((response) => {
        const Token = response.data.token;
        localStorage.setItem("token", Token);

        if (Token) {
          axios.defaults.headers.common["Authorization"] = `Bearer ${Token}`;
        }
            //window.location.href = '/User';
             navigate("/dashboard");
            console.log(response.status, response.Data.token); 
        })
        .catch((err) => console.log(err));
    };

    return (
        <div className="signinscreen">
          <NAV/>  
            {/* <button className="signup-button">
                <a href="/Login" className="signup-link">SignUp</a>
            </button> */}
            <div className='container'>
            <div className="innerContainer">
            <button> <a href="/Login"><FaUser /> SignIn</a></button>
            <div style={{cursor: 'pointer'}} >
              <i class="fas fa-arrow-circle-left fa-5x"></i>
            </div>   
            <p>Log In</p>
                <form onSubmit={handleSubmit}>
                    <div>
                    <label className='label'>Username</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} required />
                    </div>
                    <div>
                    <label className='label'>Password</label>
                    <input type="text" name="password" value={formData.password} onChange={handleChange} required 
                        />               
                    </div>
                   {/* <ImageCap/> */}
                    <div className='btn'>
                        <button className='btnn' type="submit">Login</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

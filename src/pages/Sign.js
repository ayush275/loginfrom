import React, { useState } from 'react';
import axios from 'axios';
import '../App';
import { IoIosPersonAdd } from "react-icons/io";


const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Clear previous error message
        setError('');

        axios.post('https://localhost:7205/api/User', formData)
            .then(response => {
                console.log('User signed up successfully:', response.data);
                // Redirect to another page or show a success message
            })
            .catch(error => {
                console.error('Error signing up:', error);
                if (error.response) {
                    setError(error.response.data.message);
                } else {
                    setError('An error occurred while signing up.');
                }
            });
    };

    return (
        <div className='dd'>
            <h2 className='login' >LogIn</h2>
            <button className="signup-button">
                <a href="/Login" className="signup-link">SignUp</a>
            </button>
            
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
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required style={{
                        width: '200px',
                        borderRadius:'3px'
                       }} />
                       <br />
                     
                    </div>
                <div className='btn' >
                    <button type="submit">Sign Up</button>
                    </div>
                   
                </form>
            </div>
        </div>
    );
};

export default SignUp;

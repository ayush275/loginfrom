import React from 'react';
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        // Clear user session or token from local storage
        localStorage.removeItem('token');  
        navigate('/')
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Logout Page</h2>
            <p>Are you sure you want to logout?</p>
            <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;

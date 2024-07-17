import React from 'react';
import '../src/dashboardNav.css'

const Navbar = ({toggleSidebar }) => {
    return (
        <nav className="navbar">
            {/* Navbar content goes here */}
            <div className="navbar-title">
            <a onClick={toggleSidebar}>Select Project</a>
                      
           
            </div>
            {/* Additional items like menu, user profile, etc. can go here */}
        </nav>
    );
};

export default Navbar;
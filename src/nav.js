import React, { useState } from 'react';

import { Link} from "react-router-dom"; 
import './nav.css';
import { Navbar, Nav } from 'react-bootstrap';
import { IoIosPersonAdd } from "react-icons/io";
import { FaHome, FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from './img/logo.jpg';
import ForgotPasswordForm from './pages/ForgotPassword '; //
const Hearder = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const toggleForgotPassword = () => {
    setShowForgotPassword(!showForgotPassword);
  };

  const closeForgotPassword = () => {
    setShowForgotPassword(false);
  };
  const getCartCount = () => {
    
  }
  const _handleLogout = () => {
     console.log('clickLogout')
   
  }
    return (
  
      <nav className="navbar">
      <div className="navbar__logo">
        <h2>VaaaN</h2>
      </div>

      <ul className="navbar__links">

        <li>
        <Link to="#" onClick={toggleForgotPassword}>
            Forgot Password
          </Link>
        </li>
          <li>
            <Link  to="/Logout">LogOut</Link>
          </li>
  
      </ul>

      <div className="hamburger__menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
      {showForgotPassword && <ForgotPasswordForm onClose={closeForgotPassword} />}
    </nav>
    );
};

export default Hearder;

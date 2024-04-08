import React from "react";
import { Link} from "react-router-dom"; 
import './nav';
import { IoIosPersonAdd } from "react-icons/io";

const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="container">
              
                <ul className="nav-links">
                    <li className="nav-item">
                        <button><Link to="/Login" className="nav-link"><IoIosPersonAdd color="black" /></Link>SignUp</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

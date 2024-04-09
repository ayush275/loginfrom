
import './style.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import logo from './img/logo.jpg';
import { NAVLINKS } from "./data";

function App(props) {
    const { loggedIn, email } = props
    const navigate = useNavigate()
    const [isHover, setIsHover] = useState(false);
    return (
        <aside className={`sidebar ${isHover ? "active" : ""}`}>
        <div className="open-btn" onClick={() => setIsHover((prev) => !prev)}>
          <span className="material-symbols-outlined">Clickhere</span>
        </div>
        <div className="wrapper">
          <div className="top__wrapper">
            <div className="header">
              <span className="header-logo">
                <img src={logo} alt="" />
              </span>
              <div className="header-details">
                <span className="header-name">Ayush Rathi</span>
                <span className="header-email">rathi876@gmail.com</span>
              </div>
            </div>
            {/* <div className="search-box">
              <span className=" material-symbols-outlined search-icon">
                search
              </span>
              <input type="text" name="searchBox" placeholder="Search..." />
            </div> */}
            <nav className="sidebar-nav">
              <ul className="nav-menu">
                {NAVLINKS.map((item) => {
                  return (
                    <li key={item.name} className="nav-menu__item">
                      <a href={item.path} className="nav-menu__link">
                        <span className="material-symbols-outlined">
                          {item.icon}
                        </span>
                        <span className="text">{item.name}</span>
                      </a>
                    </li>
                  );
                })} 
              </ul>
            </nav>
          </div>
          <div className="footer">
            <a href="/" className="nav-menu__link">
               <span className="material-symbols-outlined footer-icon">
                LogIn
              </span> 
              {/* <span className="footer-text">LogIN</span> */}
            </a>
          </div>
        </div>
      </aside>
    );
}



export default App;






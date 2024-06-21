import React, {useState} from 'react';
import './styles/Navbar.css';
import logo from '../images/Patchbear logo.png';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className="navbar">
        <div className="logo">
            <img src={logo} height={70} width={120}/>
<h1>
    PATCH-BEAR
</h1>
            </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
          <a href="#Hero">
                  Home
                </a>
              </li>
              <li>
                <a href="#ProgressSection">
                  About
                </a>
              </li>
              <li>
                <a href="#About">
                  Services
                </a>
              </li>
              <li>
                <a href="#Footer">
                  Contact
                </a>
          </li>
        </ul>
        <button className="menu-toggle" onClick={toggleSidebar}>
          <i className="fas fa-bars"></i>
          <i className="fas fa-bars"></i>
          <i className="fas fa-bars"></i>
        </button>
        {isOpen && (
          <div className="sidebar">
            <ul>
              <li>
                <a href="#Navbar">
                  Home
                </a>
              </li>
              <li>
                <a href="#ProgressSectionn">
                  About
                </a>
              </li>
              <li>
                <a href="#About">
                  Services
                </a>
              </li>
              <li>
                <a href="#Footer">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    )
}

export default Navbar;

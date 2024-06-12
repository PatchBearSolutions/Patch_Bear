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
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Services">Services</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
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
                <a href="#" onClick={toggleSidebar}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" onClick={toggleSidebar}>
                  About
                </a>
              </li>
              <li>
                <a href="#" onClick={toggleSidebar}>
                  Services
                </a>
              </li>
              <li>
                <a href="#" onClick={toggleSidebar}>
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

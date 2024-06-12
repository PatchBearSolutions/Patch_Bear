import React from 'react';
import './styles/footer.css';
import logo from "../images/Patchbear logo.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaDiscord } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo-container">
                
                    <img className='footer-logo' src={logo}/>
                    <h2>Patch-Bear</h2>
                    <div className="footer-social">
                    <a href="https://facebook.com" aria-label="Facebook">
                        <FaFacebookF />
                    </a>
                    <a href="https://twitter.com" aria-label="Twitter">
                        <FaTwitter />
                    </a>
                    <a href="https://linkedin.com" aria-label="LinkedIn">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://github.com" aria-label="GitHub">
                        <FaGithub />
                    </a>
                    <a href="https://discord.com" aria-label="Discord">
                        <FaDiscord />
                    </a>
                </div>
                </div>
                <div className="footer-links">
                    <div className="footer-column">
                        <h3>Company</h3>
                        <a href="#about">About Us</a>
                        <a href="#careers">Careers</a>
        
                    </div>
                    <div className="footer-column">
                        <h3>Resources</h3>
                        <a href="#support">Services</a>
                        <a href="#docs">Portfolio</a>
                   
                    </div>
                    <div className="footer-column">
                        <h3>Contact</h3>
                        <a href="#contact">Contact Us</a>
                        <a href="#partnerships">Partnerships</a>
                        <a href="#press">Press Release</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Patch Bear. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;

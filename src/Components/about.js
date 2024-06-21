import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import './styles/about.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function About() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 930);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 930);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const settings = {
        arrows: false, 
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="about_container">
            <div className="about_title">
                <h1>About Us</h1>
                <p>
                    With over 5 years of experience in the industry, Patch Bear is dedicated to providing top-notch digital solutions that drive success. 
                    Our team of seasoned professionals is committed to delivering excellence in every project.
                </p>
            </div>
            <div className="about_kids">
                {isMobile ? (
                    <Slider {...settings}>
                        <div className="about">
                            <h1>Frontend</h1>
                            <p>
                                <span>Crafting Engaging User Experiences</span>
                                At Patch bear, we specialize in creating responsive, intuitive, and visually stunning front-end designs. Our expert team leverages the latest technologies to ensure that your website is aesthetically pleasing, functional, and user-friendly across all devices.
                            </p>
                        </div>
                        <div className="about">
                            <h1>Backend</h1>
                            <p>
                                <span>Powerful, Secure, and Scalable Solutions</span>
                                We build secure, high-performance systems that can scale with your growing needs. Our solutions include data management, API development, and cloud integration, all tailored to provide the utmost reliability and security.
                            </p>
                        </div>
                        <div className="about">
                            <h1>Creativity</h1>
                            <p>
                                <span>Innovative Ideas, Unique Solutions</span>
                                Creativity is at the heart of everything we do at Patch bear. Our team is passionate about bringing innovative ideas to life, crafting unique solutions that set you apart from the competition.
                            </p>
                        </div>
                    </Slider>
                ) : (
                    <div className="about_kids_flex">  
                        <div className="about">
                            <h1>Frontend</h1>
                            <p>
                                <span>Crafting Engaging User Experiences</span>
                                At Patch bear, we specialize in creating responsive, intuitive, and visually stunning front-end designs. Our expert team leverages the latest technologies to ensure that your website is aesthetically pleasing, functional, and user-friendly across all devices.
                            </p>
                        </div>
                        <div className="about">
                            <h1>Backend</h1>
                            <p>
                                <span>Powerful, Secure, and Scalable Solutions</span>
                                We build secure, high-performance systems that can scale with your growing needs. Our solutions include data management, API development, and cloud integration, all tailored to provide the utmost reliability and security.
                            </p>
                        </div>
                        <div className="about">
                            <h1>Creativity</h1>
                            <p>
                                <span>Innovative Ideas, Unique Solutions</span>
                                Creativity is at the heart of everything we do at Patch bear. Our team is passionate about bringing innovative ideas to life, crafting unique solutions that set you apart from the competition.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default About;

import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar.js';
import Hero from "../Components/hero";
import ProgressSection from "../Components/progressSection";
import About from "../Components/about";
import VideoSection from '../Components/VideoSection.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Portfolio from '../Components/portfolio.js';
import Footer from '../Components/footer.js';
import ContactUs from '../Components/contactUs.js';




function LandingPage(){
    useEffect(() => {
        AOS.init({
          duration: 1000, // Duration of the animation in milliseconds
          easing: 'ease-in-out', // Easing function for the animation
        });
      }, []);
      
    return(
        <div>
      <section id='Navbar'>
        
      <Navbar/>
      </section>
    

            <section id='Hero' className="fade-section" data-aos="fade-up">
            <Hero/>
            </section>
            <section id='ProgressSection' className="fade-section" data-aos="fade-up">
            <ProgressSection/>
            </section>
            <section id='About' className="fade-section" data-aos="fade-up">
            <About/>
            </section>
            <section id='VideoSection' className="fade-section" data-aos="fade-up">
                <VideoSection/>
            </section>
            <section id='Portfolio' className="fade-section" data-aos="fade-up">
                <Portfolio/>
            </section>
            <section id='ContactUs' className="fade-section" data-aos="fade-up">
        <ContactUs/>
       </section>
        <section id='Footer'>
              <Footer/>
            </section>
       
        </div>
    )
}

export default LandingPage;
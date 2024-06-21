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
    

            <section className="fade-section" data-aos="fade-up">
            <Hero/>
            </section>
            <section className="fade-section" data-aos="fade-up">
            <ProgressSection/>
            </section>
            <section className="fade-section" data-aos="fade-up">
            <About/>
            </section>
            <section className="fade-section" data-aos="fade-up">
                <VideoSection/>
            </section>
            <section className="fade-section" data-aos="fade-up">
                <Portfolio/>
            </section>
            <section className="fade-section" data-aos="fade-up">
        <ContactUs/>
       </section>
        <section>
              <Footer/>
            </section>
       
        </div>
    )
}

export default LandingPage;
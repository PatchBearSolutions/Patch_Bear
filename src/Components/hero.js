import React, { useEffect, useState } from "react";
import './styles/hero.css';
import rightImage from "../images/HERO_PIC.png"

function Hero() {
    const [animationComplete, setAnimationComplete] = useState(false);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const textArray = ["Design", "Build", "Deploy"];

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationComplete(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleTyping = () => {
            const currentText = textArray[loopNum % textArray.length];
            setDisplayText(isDeleting ? currentText.substring(0, displayText.length - 1) : currentText.substring(0, displayText.length + 1));

            setTypingSpeed(isDeleting ? 50 : 150);

            if (!isDeleting && displayText === currentText) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && displayText === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const typingTimer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(typingTimer);
    }, [displayText, isDeleting, loopNum, typingSpeed, textArray]);

    return (
        <div className="hero-container">
        <div className="items_left">
        <div className="hero-text">
                <p className="the_text">At Patch-Bear We <span className="what_we_do">{displayText}</span> Websites</p> 
            </div>
            <button className="discover_btn">Discover</button>
        </div>
            
            <div className="hero-shape">
                
                 <img src={rightImage} height={500} width={300}/>

               
             
            </div>
        </div>
    );
}

export default Hero;

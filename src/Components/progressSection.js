import React, { useEffect, useState } from "react";
import './styles/progressSection.css';
import slope from "../images/rectangle without bg.png";

function ProgressSection() {
    const [animationComplete, setAnimationComplete] = useState(false);
    const [progressValues] = useState([
        { value: 85, label: "FRONTEND" },
        { value: 87, label: "BACKEND" },
        { value: 95, label: "CREATIVITY" }
    ]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationComplete(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="progress_container" id='ProgressSection'>
            <h1 className="progress_title">What We Do</h1>
            <div className="circular-progress-container">
                {progressValues.map((progress, index) => (
                    <div key={index} className="circular-progress-item">
                        <div className="circular-progress">
                            <svg width="200" height="200" viewBox="0 0 200 200">
                                <circle className="bg" cx="100" cy="100" r="90" />
                                <circle
                                    className="progress"
                                    cx="100"
                                    cy="100"
                                    r="90"
                                    strokeDasharray="500"
                                    strokeDashoffset={`${500 - (500 * progress.value) / 100}`}
                                />
                            </svg>
                            
                                <div className="progress-text">{progress.value}%
                                <div className="water-fill" style={{  width: `${100}%` }}>
                                    <h1 className="percentage">{progress.value}%</h1>
                                </div>
                            </div>
                        </div>
                        <div className="progress_texts">{progress.label}</div>
                    </div>
                ))}
            </div>
            {/* <div>
                <img className="slope" src={slope} alt="Slope" />
            </div> */}
        </div>
    );
}

export default ProgressSection;

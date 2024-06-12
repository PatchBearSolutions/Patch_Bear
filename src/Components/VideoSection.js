import React, { useEffect, useRef } from "react";
import video from "./vabout.mp4";
import video2 from "../images/Seamless.mp4";
import "./styles/aboutVideo.css";

function VideoSection() {
    const videoRefs = [useRef(null), useRef(null)];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        videoRefs[index].current.play();
                    } else {
                        videoRefs[index].current.pause();
                    }
                });
            },
            { threshold: 0.5 } // Adjust threshold for better triggering
        );

        videoRefs.forEach((videoRef, index) => {
            if (videoRef.current) {
                observer.observe(videoRef.current);
            }
        });

        return () => {
            videoRefs.forEach((videoRef) => {
                if (videoRef.current) {
                    observer.unobserve(videoRef.current);
                }
            });
        };
    }, []);

    return (
        <div className="about_video">
            <video ref={videoRefs[0]} loop className="hero-video" width={600} muted>
                <source src={video2} type="video/mp4" />
            </video>
            <video ref={videoRefs[1]} loop className="hero-video" width={600} muted>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    );
}

export default VideoSection;

import React, { useEffect, useRef } from "react";
import Video from "../images/dev video.mp4";
import "./styles/aboutVideo.css"

const VideoCarousel = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="video-carousel">
      <video ref={videoRef} width="600" loop muted>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoCarousel;

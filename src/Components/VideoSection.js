import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const videos = [
  { id: 1, src: 'Seamless.mp4', duration: 5000 },
  { id: 2, src: 'vabout.mp4', duration: 5000 },
];

const VideoCarousel = () => {
  const videoRefs = useRef([]);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    afterChange: current => handleVideoPlay(current),
  };

  const handleVideoPlay = (current) => {
    videoRefs.current.forEach((video, index) => {
      if (index === current) {
        video.play();
      } 
      
    });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play();
        } 
      });
    }, options);

    videoRefs.current.forEach((video) => {
      if (video) {
        observer.observe(video);
      }
    });

    // Call handleVideoPlay on initial mount
    handleVideoPlay(0); // Assuming you want the first video to play initially

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) {
          observer.unobserve(video);
        }
      });
    };
  }, []);

  return (
    <div className="video-carousel">
      <Slider {...settings}>
        {videos.map((video, index) => (
          <div key={video.id}>
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video.src}
              width="100%"
              height="auto"
              controls={false}
              muted
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoCarousel;

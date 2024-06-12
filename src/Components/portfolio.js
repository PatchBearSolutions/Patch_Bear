import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slope from "../images/Rectangle swapped.png"
// import image1 from "../images/WhatsApp Image 2024-06-12 at 05.08.27.jpeg";
// import image2 from "../images/SAVE_20240612_050915.jpg";
// import image3 from "../images/WhatsApp Image 2024-06-02 at 15.20.27 (1).jpeg";
// import image4 from "../images/WhatsApp Image 2024-06-02 at 15.20.27.jpeg";
// import image5 from "../images/WhatsApp Image 2024-06-03 at 09.23.23.jpeg";
// import image6 from "../images/WhatsApp Image 2024-06-02 at 18.51.29.jpeg";
import "./styles/portfolio.css";

const images1 = [
  { id: 1, src: '/WhatsApp Image 2024-06-02 at 15.20.27 (1).jpeg', alt: "Image 1" },
  { id: 2, src: '/WhatsApp Image 2024-06-02 at 15.20.27.jpeg', alt: "Image 2" }
];
const images2 = [
  { id: 3, src: '/SAVE_20240612_050915.jpg', alt: "Image 1" },
  { id: 4, src: '/WhatsApp Image 2024-06-12 at 05.08.27.jpeg', alt: "Image 2" }
];

const images3 = [
  { id: 5, src: '/WhatsApp Image 2024-06-03 at 09.23.23.jpeg', alt: "Image 1" },
  { id: 6, src: '/WhatsApp Image 2024-06-02 at 18.51.29.jpeg', alt: "Image 2" }
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function Portfolio() {
  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    setShuffledImages(shuffleArray([...images1]));
  }, []);

  useEffect(() => {
    setShuffledImages(shuffleArray([...images2]));
  }, []);

  useEffect(() => {
    setShuffledImages(shuffleArray([...images3]));
  }, []);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 700);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <div className="Portfolio">
      <h1> Our Portfolio</h1>

      <div className="Portfolio_samples">
    <div className="carousel_container">
    <Slider {...settings}>
      {images1.map(image => (
        <div key={image.id} className="carousel_card">
          <img height={100} width={200} src={image.src} alt={image.alt} className="carousel_image" />
        </div>
      ))}
    </Slider>
  </div>
  <div className="carousel_container">
    <Slider {...settings}>
      {images2.map(image => (
        <div key={image.id} className="carousel_card">
          <img height={100} width={200} src={image.src} alt={image.alt} className="carousel_image" />
        </div>
      ))}
    </Slider>
  </div>
  <div className="carousel_container long">
    <Slider {...settings}>
      {shuffledImages.map(image => (
        <div key={image.id} className="carousel_card">
          <img height={100} width={200} src={image.src} alt={image.alt} className="carousel_image" />
        </div>
      ))}
    </Slider>
  </div>
 
            </div >
            {/* <div>
                <img className="slope" src={slope} alt="Slope" />
            </div> */}
        </div >
    )
}

export default Portfolio;
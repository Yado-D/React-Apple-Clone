import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import './movieSwiper.css';

// Sample data
const carouselData = [
  {
    id: 1,
    imageSrc: "promo_apple_card.jpg",
    title: "iPhone 15 Pro",
    description: "Titanium. So strong. So light. So Pro.",
    buttonText: "Buy",
    buttonLink: "/iphone",
    backgroundColor: "#000"
  },
  {
    id: 2,
    imageSrc: "film3.jpg",
    title: "MacBook Air",
    description: "Supercharged by M2 chip.",
    buttonText: "Buy", 
    buttonLink: "/macbook",
    backgroundColor: "#f5f5f7",
    textColor: "#000"
  },
  {
    id: 3,
    imageSrc: "film2.jpg",
    title: "iPad Pro",
    description: "The ultimate iPad experience.",
    buttonText: "Buy",
    buttonLink: "/ipad",
    backgroundColor: "#000"
  },
  {
    id: 4,
    imageSrc: "film.jpg",
    title: "Apple Watch",
    description: "Smarter. Brighter. Mightier.",
    buttonText: "Buy",
    buttonLink: "/watch",
    backgroundColor: "#fff",
    textColor: "#000"
  },
  {
    id: 5,
    imageSrc: "the_studio.jpg", 
    title: "AirPods Pro",
    description: "Magic like you've never heard.",
    buttonText: "Buy",
    buttonLink: "/airpods",
    backgroundColor: "#000"
  }
];

export function ProductCarousel() {
  return (
    <div className="product-carousel">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={30}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        navigation
        pagination={{ 
          clickable: true,
          dynamicBullets: true 
        }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="apple-carousel"
      >
        {carouselData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className="slide-container"
              style={{ 
                backgroundColor: slide.backgroundColor,
                color: slide.textColor || '#fff'
              }}
            >
              {/* Background Image */}
              <div 
                className="slide-background"
                style={{
                  backgroundImage: `url(/images/${slide.imageSrc})`
                }}
              ></div>
              
              {/* Content */}
              <div className="slide-content">
                <div className="slide-text">
                  <h2 className="slide-title">{slide.title}</h2>
                  <p className="slide-description">{slide.description}</p>
                </div>
                
                <div className="slide-actions">
                  <a href={slide.buttonLink} className="buy-button">
                    {slide.buttonText}
                  </a>
                  <a href={slide.buttonLink} className="learn-link">
                    Learn more ›
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
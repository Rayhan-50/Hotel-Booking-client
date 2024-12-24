


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Slide component
import Slide from "./Slide";

// Import images
import bgimg1 from "../../assets/images/carousel1.jpeg";
import bgimg2 from "../../assets/images/carousel2.jpeg";
import bgimg3 from "../../assets/images/carousel3.jpeg";

export default function Carousel() {
  const slides = [
    {
        image: bgimg1,
        title: "Welcome to Your Dream Stay",
        description: "Discover luxurious rooms tailored for comfort and relaxation.",
        buttonText: "Explore Rooms",
        link: "/rooms",
      },
      {
        image: bgimg2,
        title: "Experience Unmatched Comfort",
        description: "Indulge in the finest amenities and serene surroundings.",
        buttonText: "View Rooms",
        link: "/rooms",
      },
      {
        image: bgimg3,
        title: "Find Your Perfect Escape",
        description: "Book your stay and enjoy an unforgettable experience.",
        buttonText: "Book Now",
        link: "/rooms",
      },
      
  ];

  return (
    <div className="container px-6 py-10 mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Slide
              image={slide.image}
              title={slide.title}
              description={slide.description}
              buttonText={slide.buttonText}
              link={slide.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

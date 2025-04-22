

import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Carousel from "./Carousel";
import Map from "./Map";
import FeaturedRooms from "./FeaturedRooms";
import Reviews from "./Reviews";
import Amenities from "./Amenities";
import SpecialOffers from "./SpecialOffers";

import NewsletterSection from "./NewsletterSection";

const Home = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <Helmet>
        <title>Welcome to My Website</title>
        <meta
          name="description"
          content="Discover the best content, services, and features we have to offer. Explore now!"
        />
        <meta name="keywords" content="home, website, services, features" />
        <meta name="author" content="Your Name" />
      </Helmet>

      {/* Dark Mode Toggle Button */}
      <div className="fixed top-20 right-4 z-50">
      <button
  onClick={() => setDarkMode(!darkMode)}
  className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md transition"
>
  {darkMode ? "Light Mode" : "Dark Mode"}
</button>
      </div>

      <div>
        <Carousel />
        <Map />
        <FeaturedRooms />
        <Reviews />
        <Amenities />
        <SpecialOffers />
        <NewsletterSection></NewsletterSection>
      </div>
    </div>
  );
};

export default Home;

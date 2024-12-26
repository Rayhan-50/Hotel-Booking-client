

import { Helmet } from "react-helmet";
import Carousel from "./Carousel";
import Map from "./Map";
import FeaturedRooms from "./FeaturedRooms";
import Reviews from "./Reviews";
import { useState } from "react";
import Amenities from "./Amenities";
import SpecialOffers from "./SpecialOffers";

const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

   
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

   
    const themeClass = isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black";

    return (
        <div className={`min-h-screen ${themeClass}`}>
            <Helmet>
                <title>Welcome to My Website</title>
                <meta name="description" content="Discover the best content, services, and features we have to offer. Explore now!" />
                <meta name="keywords" content="home, website, services, features" />
                <meta name="author" content="Your Name" />
            </Helmet>

         
            <header className="p-4 flex justify-end">
                <button
                    onClick={toggleDarkMode}
                    className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
                >
                    Toggle {isDarkMode ? "Light" : "Dark"} Mode
                </button>
            </header>

          
            <Carousel />
            <Map />
            <FeaturedRooms />
            <Reviews />
            <Amenities></Amenities>
            <SpecialOffers></SpecialOffers>
        </div>
    );
};

export default Home;






import { Helmet } from "react-helmet";
import Carousel from "./Carousel";
import Map from "./Map";
import FeaturedRooms from "./FeaturedRooms";
import Reviews from "./Reviews";
import Amenities from "./Amenities";
import SpecialOffers from "./SpecialOffers";

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Helmet>
        <title>Welcome to My Website</title>
        <meta
          name="description"
          content="Discover the best content, services, and features we have to offer. Explore now!"
        />
        <meta name="keywords" content="home, website, services, features" />
        <meta name="author" content="Your Name" />
      </Helmet>

     
      

      <div className="bg-white text-black">
        <Carousel />
        <Map />
        <FeaturedRooms />
        <Reviews />
        <Amenities />
        <SpecialOffers />
      </div>
    </div>
  );
};

export default Home;




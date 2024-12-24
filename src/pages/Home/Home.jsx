
import { Helmet } from "react-helmet";
import Carousel from "./Carousel";
import FeaturedRooms from "./FeaturedRooms";
import Map from "./Map";



const Home = () => {
    return (
        <div>
           <Helmet>
        <title>Welcome to My Website</title>
        <meta name="description" content="Discover the best content, services, and features we have to offer. Explore now!" />
        <meta name="keywords" content="home, website, services, features" />
        <meta name="author" content="Your Name" />
      </Helmet>
            <Carousel></Carousel>
            <Map></Map>
            <FeaturedRooms></FeaturedRooms>
        </div>
    );
};

export default Home;
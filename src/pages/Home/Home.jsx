

// import { Helmet } from "react-helmet";
// import Carousel from "./Carousel";
// import Map from "./Map";
// import FeaturedRooms from "./FeaturedRooms";
// import Reviews from "./Reviews";
// import Amenities from "./Amenities";
// import SpecialOffers from "./SpecialOffers";

// const Home = () => {
//   return (
//     <div className="min-h-screen bg-white text-black">
//       <Helmet>
//         <title>Welcome to My Website</title>
//         <meta
//           name="description"
//           content="Discover the best content, services, and features we have to offer. Explore now!"
//         />
//         <meta name="keywords" content="home, website, services, features" />
//         <meta name="author" content="Your Name" />
//       </Helmet>

     
      

//       <div className="bg-white text-black">
//         <Carousel />
//         <Map />
//         <FeaturedRooms />
//         <Reviews />
//         <Amenities />
//         <SpecialOffers />
//       </div>
//     </div>
//   );
// };

// export default Home;




import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Carousel from "./Carousel";
import Map from "./Map";
import FeaturedRooms from "./FeaturedRooms";
import Reviews from "./Reviews";
import Amenities from "./Amenities";
import SpecialOffers from "./SpecialOffers";

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
          className="btn btn-outline btn-sm dark:bg-gray-200 dark:text-black transition "
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
      </div>
    </div>
  );
};

export default Home;

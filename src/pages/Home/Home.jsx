

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




// import { Helmet } from "react-helmet";
// import { useState } from "react";
// import Carousel from "./Carousel";
// import Map from "./Map";
// import FeaturedRooms from "./FeaturedRooms";
// import Reviews from "./Reviews";
// import Amenities from "./Amenities";
// import SpecialOffers from "./SpecialOffers";

// const Home = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <div className={darkMode ? "min-h-screen bg-gray-900 text-white" : "min-h-screen bg-white text-black"}>
//       <Helmet>
//         <title>Welcome to My Website</title>
//         <meta
//           name="description"
//           content="Discover the best content, services, and features we have to offer. Explore now!"
//         />
//         <meta name="keywords" content="home, website, services, features" />
//         <meta name="author" content="Your Name" />
//       </Helmet>

//       <div className="flex justify-end p-4">
//         <button
//           className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
//           onClick={() => setDarkMode(!darkMode)}
//         >
//           {darkMode ? "Light Mode" : "Dark Mode"}
//         </button>
//       </div>

//       <div>
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

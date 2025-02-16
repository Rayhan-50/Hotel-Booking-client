
// import { Link } from "react-router-dom";
// import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-8">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
//         {/* About Us */}
//         <div>
//           <h3 className="text-xl font-bold mb-4">About Us</h3>
//           <p>
//             Welcome to our Hotel Booking Platform, where you can find the best
//             rooms with a seamless booking experience. Enjoy your stay with us!
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-xl font-bold mb-4">Quick Links</h3>
//           <ul className="space-y-2">
//             <li>
//               <Link to="/" className="hover:underline">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/rooms" className="hover:underline">
//                 Rooms
//               </Link>
//             </li>
//             <li>
//               <Link to="/my-bookings" className="hover:underline">
//                 My Bookings
//               </Link>
//             </li>
//             <li>
//               <Link to="#" className="hover:underline">
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//         </div>

       
//         <div>
//           <h3 className="text-xl font-bold mb-4">Contact Us</h3>
//           <p>Email: support@hotelbooking.com</p>
//           <p>Phone: +123 456 7890</p>
//           <p>Address: 123 Main Street, City, Country</p>
//           <div className="flex space-x-4 mt-4">
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-blue-500"
//             >
//               <FaFacebook size={24} />
//             </a>
//             <a
//               href="https://twitter.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-blue-400"
//             >
//               <FaTwitter size={24} />
//             </a>
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-pink-500"
//             >
//               <FaInstagram size={24} />
//             </a>
//           </div>
//         </div>
//       </div>

     
//       <div className="mt-8 border-t border-gray-700 pt-4 text-center">
//         <p>&copy; {new Date().getFullYear()} Hotel Booking Platform. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        
        {/* About Us */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-yellow-400">About Us</h3>
          <p className="text-gray-200">
            Discover the best hotel booking experience with us. Enjoy luxury, comfort, 
            and seamless reservations at your fingertips.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/" className="hover:text-yellow-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/rooms" className="hover:text-yellow-400 transition">
                Rooms
              </Link>
            </li>
            <li>
              <Link to="/my-bookings" className="hover:text-yellow-400 transition">
                My Bookings
              </Link>
            </li>
            
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Contact Us</h3>
          <p className="text-gray-200">📧 support@hotelbooking.com</p>
          <p className="text-gray-200">📞 +123 456 7890</p>
          <p className="text-gray-200">📍 123 Main Street, City, Country</p>
          
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaFacebook size={28} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition"
            >
              <FaTwitter size={28} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
            >
              <FaInstagram size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 border-t border-gray-600 pt-4 text-center">
        <p className="text-gray-300">&copy; {new Date().getFullYear()} Hotel Booking Platform. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;






import { motion } from "framer-motion";

const Amenities = () => {
  const amenities = [
    { icon: "https://i.ibb.co/0s5kqWS/friends-with-wifi-signal-icon.jpg", title: "Free Wi-Fi", description: "Stay connected during your stay." },
    { icon: "https://i.ibb.co/KVvcrG9/umbrella-chair.jpg", title: "Swimming Pool", description: "Relax and unwind by the pool." },
    { icon: "https://i.ibb.co/dbjGfYS/beautiful-african-woman-smiling-enjoying-massage-with-closed-eyes-spa-salon.jpg", title: "Spa", description: "Rejuvenate with our premium spa services." },
    { icon: "https://i.ibb.co/RHTGLT8/young-fitness-man-studio.jpg", title: "Gym", description: "Stay fit with our state-of-the-art equipment." },
    { icon: "https://i.ibb.co/CJCHNcq/rb-54068.png", title: "Free Parking", description: "Convenient parking for all guests." },
    { icon: "https://i.ibb.co/tst2Xbw/rb-66217.png", title: "Pet-Friendly", description: "Bring your furry friends along!" },
  ];

  return (
    <section className="lg:px-28 py-10 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-center">
      {/* Title */}
      <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-10">Our Amenities</h2>

      {/* Amenities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
        {amenities.map((amenity, index) => (
       <motion.div
  className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center min-h-[250px]"
>
  <img
    src={amenity.icon}
    alt={`Icon for ${amenity.title}`} // Add alt text
    className="w-16 h-16 object-contain rounded-full border-2 border-blue-500 dark:border-yellow-400 shadow-md"
  />
  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{amenity.title}</h3>
  <p className="text-gray-600 dark:text-gray-300">{amenity.description}</p>
</motion.div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;

// const Amenities = () => {
//     const amenities = [
//         { icon: "https://i.ibb.co/0s5kqWS/friends-with-wifi-signal-icon.jpg", title: "Free Wi-Fi", description: "Stay connected during your stay." },
//         { icon: "https://i.ibb.co.com/KVvcrG9/umbrella-chair.jpg", title: "Swimming Pool", description: "Relax and unwind by the pool." },
//         { icon: "https://i.ibb.co.com/dbjGfYS/beautiful-african-woman-smiling-enjoying-massage-with-closed-eyes-spa-salon.jpg", title: "Spa", description: "Rejuvenate with our premium spa services." },
//         { icon: "https://i.ibb.co.com/RHTGLT8/young-fitness-man-studio.jpg", title: "Gym", description: "Stay fit with our state-of-the-art equipment." },
//         { icon: "https://i.ibb.co.com/CJCHNcq/rb-54068.png", title: "Free Parking", description: "Convenient parking for all guests." },
//         { icon: "https://i.ibb.co.com/tst2Xbw/rb-66217.png", title: "Pet-Friendly", description: "Bring your furry friends along!" },
//     ];

//     return (
//         <section className="p-8 bg-gray-100 text-center">
//             <h2 className="text-2xl font-bold mb-6">Our Amenities</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                 {amenities.map((amenity, index) => (
//                     <div
//                         key={index}
//                         className="p-2 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
//                     >
//                         <img
//                             src={amenity.icon}
//                             alt={amenity.title}
//                             className="w-full mx-auto mb-4"
//                         />
//                         <h3 className="text-lg font-semibold mb-2">{amenity.title}</h3>
//                         <p className="text-gray-600">{amenity.description}</p>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default Amenities;


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
        <section className="py-16 bg-gradient-to-b from-gray-100 to-gray-200 text-center">
            {/* Title */}
            <h2 className="text-4xl font-extrabold text-gray-800 mb-10">Our Amenities</h2>

            {/* Amenities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
                {amenities.map((amenity, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center"
                    >
                        {/* Icon */}
                        <div className="w-20 h-20 flex items-center justify-center mb-4">
                            <img
                                src={amenity.icon}
                                alt={amenity.title}
                                className="w-16 h-16 object-contain rounded-full border-2 border-gray-300 shadow-md"
                            />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{amenity.title}</h3>

                        {/* Description */}
                        <p className="text-gray-600">{amenity.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Amenities;


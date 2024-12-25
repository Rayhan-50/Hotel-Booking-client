const Amenities = () => {
    const amenities = [
        { icon: "https://i.ibb.co/0s5kqWS/friends-with-wifi-signal-icon.jpg", title: "Free Wi-Fi", description: "Stay connected during your stay." },
        { icon: "https://i.ibb.co.com/KVvcrG9/umbrella-chair.jpg", title: "Swimming Pool", description: "Relax and unwind by the pool." },
        { icon: "https://i.ibb.co.com/dbjGfYS/beautiful-african-woman-smiling-enjoying-massage-with-closed-eyes-spa-salon.jpg", title: "Spa", description: "Rejuvenate with our premium spa services." },
        { icon: "https://i.ibb.co.com/RHTGLT8/young-fitness-man-studio.jpg", title: "Gym", description: "Stay fit with our state-of-the-art equipment." },
        { icon: "https://i.ibb.co.com/CJCHNcq/rb-54068.png", title: "Free Parking", description: "Convenient parking for all guests." },
        { icon: "https://i.ibb.co.com/tst2Xbw/rb-66217.png", title: "Pet-Friendly", description: "Bring your furry friends along!" },
    ];

    return (
        <section className="p-8 bg-gray-100 text-center">
            <h2 className="text-2xl font-bold mb-6">Our Amenities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {amenities.map((amenity, index) => (
                    <div
                        key={index}
                        className="p-2 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
                    >
                        <img
                            src={amenity.icon}
                            alt={amenity.title}
                            className="w-full mx-auto mb-4"
                        />
                        <h3 className="text-lg font-semibold mb-2">{amenity.title}</h3>
                        <p className="text-gray-600">{amenity.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Amenities;

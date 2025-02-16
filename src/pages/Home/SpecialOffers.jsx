import { FaTags, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const SpecialOffers = () => {
  const offers = [
    {
      title: "20% Off Winter Stay",
      description:
        "Book now and enjoy a cozy winter vacation at discounted rates!",
      validity: "Valid until March 31, 2025",
    },
    {
      title: "Early Bird Discount",
      description: "Plan ahead and save big with our early bird deals.",
      validity: "Valid for bookings 30+ days in advance",
    },
    {
      title: "Weekend Getaway Package",
      description:
        "Exclusive deals for weekend stays, including breakfast and spa access.",
      validity: "Valid every Friday to Sunday",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100 text-center">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-10 flex justify-center items-center gap-2">
        <FaTags className="text-blue-600" /> Special Offers
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 transform hover:scale-105"
          >
            <h3 className="text-2xl font-bold text-blue-600 mb-3">
              {offer.title}
            </h3>
            <p className="text-gray-600 mb-4">{offer.description}</p>

            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-4">
              <FaCalendarAlt className="text-blue-500" />
              <span>{offer.validity}</span>
            </div>
            <Link to="/rooms">
              <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-700 transition-all">
                Book Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;

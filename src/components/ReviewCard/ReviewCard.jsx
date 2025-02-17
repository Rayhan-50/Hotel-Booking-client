

import { FaRegCalendarAlt, FaStar, FaUser } from "react-icons/fa";

const ReviewCard = ({ review }) => {
    const { bookingId, userEmail, rating, comment, hotelName, checkInDate, checkOutDate } = review;

    return (
        <div className="border rounded-lg shadow-lg p-6 bg-white transition-transform transform hover:scale-105 duration-300">
            <h2 className="text-xl font-semibold text-center mb-4 text-gray-800">Hotel Review</h2>
            
            <div className="text-gray-700 space-y-2">
                <p className="flex items-center"><FaRegCalendarAlt className="text-blue-500 mr-2" /> <strong>Booking ID:</strong> {bookingId}</p>
                <p className="flex items-center"><FaUser className="text-green-500 mr-2" /> <strong>User Email:</strong> {userEmail}</p>
              
                <div className="flex items-center text-yellow-500 mt-2">
                    <FaStar className="mr-1" />
                    <p className="font-medium text-lg">{rating} / 5</p>
                </div>

                <p className="mt-2 text-gray-600 italic border-l-4 border-blue-400 pl-3">"{comment}"</p>
            </div>
        </div>
    );
};

export default ReviewCard;


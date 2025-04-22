import { FaRegCalendarAlt, FaStar, FaUser } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { bookingId, userEmail, rating, comment, hotelName, checkInDate, checkOutDate } = review;

  return (
    <article
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 p-6"
      aria-label={`Review for ${hotelName} by ${userEmail}`}
    >
      <h2 className="text-xl font-semibold text-center mb-4 text-gray-800 dark:text-gray-100">
        {hotelName} Review
      </h2>
      <div className="text-gray-700 dark:text-gray-300 space-y-2">
        <p className="flex items-center">
          <FaRegCalendarAlt className="text-blue-500 dark:text-yellow-400 mr-2" />
          <strong>Booking ID:</strong> {bookingId}
        </p>
        <p className="flex items-center">
          <FaUser className="text-green-500 dark:text-yellow-400 mr-2" />
          <strong>User:</strong> {userEmail}
        </p>
        {checkInDate && checkOutDate && (
          <p className="flex items-center">
            <FaRegCalendarAlt className="text-blue-500 dark:text-yellow-400 mr-2" />
            <strong>Stay:</strong>{" "}
            {new Date(checkInDate).toLocaleDateString()} -{" "}
            {new Date(checkOutDate).toLocaleDateString()}
          </p>
        )}
        <div className="flex items-center text-yellow-500 mt-2">
          <FaStar className="mr-1" />
          <p className="font-medium text-lg">{rating} / 5</p>
        </div>
        <p className="mt-2 text-gray-600 dark:text-gray-400 italic border-l-4 border-blue-400 dark:border-yellow-400 pl-3">
          "{comment}"
        </p>
      </div>
    </article>
  );
};

export default ReviewCard;


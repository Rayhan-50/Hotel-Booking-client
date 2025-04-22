
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const RoomCard = ({ room, isBooked }) => {
  const { image, title, description, price, reviews, _id } = room;

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300">
  {/* RoomCard content */}
  
      {/* Room Image with Hover Effect */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover rounded-t-lg transform transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Room Details */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2 line-clamp-2">{description}</p>

        <div className="flex justify-between items-center my-4">
          <p className="text-lg font-bold text-blue-600">{price} </p>

          {/* Reviews Section */}
          <div className="flex items-center text-yellow-500">
            <FaStar className="mr-1" />
            <span className="text-sm font-medium">{reviews} Reviews</span>
          </div>
        </div>

        {/* Booking Button */}
        {isBooked ? (
          <button className="w-full bg-gray-300 text-gray-600 py-2 rounded-lg cursor-not-allowed" disabled>
            Unavailable
          </button>
        ) : (
          <Link to={`/rooms/${_id}`}>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
              Book Now
            </button>
          </Link>
        )}
      </div>
   
</div>
   
  );
};

export default RoomCard;

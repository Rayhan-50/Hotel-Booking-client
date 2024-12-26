import { Link } from "react-router-dom";

const RoomCard = ({ room, isBooked }) => {
  const { image, title, description, price, reviews, _id } = room;

  return (
    <div className="card shadow-lg hover:shadow-2xl transition-shadow duration-300">
      {/* Room Image */}
      <img
        src={image}
        alt={title}
        className="h-64 w-full object-cover rounded-t-lg"
      />

      {/* Room Details */}
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>

        <div className="flex justify-between items-center my-2">
          <p className="text-lg font-bold">{price}</p>
          <p className="text-sm text-gray-500">Reviews: {reviews}</p>
        </div>

       
        {isBooked ? (
          <button className="btn w-full bg-gray-300 cursor-not-allowed" disabled>
            Unavailable
          </button>
        ) : (
          <Link to={`/rooms/${_id}`}>
            <button className="btn w-full bg-blue-500 text-white">
              Book Now
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default RoomCard;

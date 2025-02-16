// import { Link } from "react-router-dom";

// const RoomCard = ({ room, isBooked }) => {
//   const { image, title, description, price, reviews, _id } = room;

//   return (
//     <div className="card shadow-lg hover:shadow-2xl transition-shadow duration-300">
//       {/* Room Image */}
//       <img
//         src={image}
//         alt={title}
//         className="h-64 w-full object-cover rounded-t-lg"
//       />

//       {/* Room Details */}
//       <div className="p-4">
//         <h3 className="text-xl font-semibold">{title}</h3>
//         <p className="text-gray-600 mt-2">{description}</p>

//         <div className="flex justify-between items-center my-2">
//           <p className="text-lg font-bold">{price}</p>
//           <p className="text-sm text-gray-500">Reviews: {reviews}</p>
//         </div>

       
//         {isBooked ? (
//           <button className="btn w-full bg-gray-300 cursor-not-allowed" disabled>
//             Unavailable
//           </button>
//         ) : (
//           <Link to={`/rooms/${_id}`}>
//             <button className="btn w-full bg-blue-500 text-white">
//               Book Now
//             </button>
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RoomCard;


import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const RoomCard = ({ room, isBooked }) => {
  const { image, title, description, price, reviews, _id } = room;

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
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

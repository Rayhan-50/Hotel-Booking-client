/* eslint-disable react/prop-types */


// const RoomCard = ({room}) => {
//     const {image,title,description,price,reviews} = room;
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default RoomCard;

import { Link } from "react-router-dom";

const RoomCard = ({ room }) => {
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
        <p className="text-lg font-bold mt-4">{price}</p>
        <p className="text-sm text-gray-500 mt-2">Reviews: {reviews}</p>
        {/* Book Now Button */}
       
       <Link to={`/rooms/${_id}`}>
         <button className="btn btn-primary w-full">Book Now</button>
        </Link>
      
      </div>
    </div>
  );
};

export default RoomCard;

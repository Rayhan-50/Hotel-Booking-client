import { useEffect, useState } from "react";
import RoomCard from "../../components/RoomCard/RoomCard";
import { Link } from "react-router-dom";

const FeaturedRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5173/rooms")
      .then((res) => res.json())
      .then((data) => {
      
        const topRooms = data.slice(0, 6);
        
        setRooms(topRooms);
      })
      .catch((error) => console.error("Error fetching rooms:", error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Rooms</h2>
      <p className="text-center text-gray-600 mb-8">
        Explore our top-rated rooms for an unforgettable stay.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <RoomCard key={room._id} room={room} />
        ))}
      </div>
      <div className="text-center mt-10">
      <Link
          to="/rooms"
          className="btn btn-primary px-6 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition"
        >
          Show All Rooms
        </Link>
      </div>
    </div>
  );
};

export default FeaturedRooms;

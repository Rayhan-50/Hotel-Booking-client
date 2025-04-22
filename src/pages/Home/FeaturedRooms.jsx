import { useEffect, useState } from "react";
import RoomCard from "../../components/RoomCard/RoomCard";
import { Link } from "react-router-dom";

const FeaturedRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://hotel-booking-server-azure.vercel.app/rooms")
      .then((res) => res.json())
      .then((data) => {
        setRooms(data.slice(0, 6));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching rooms:", error);
        setLoading(false);
        toast.error("Failed to load rooms.");
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Rooms</h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
        Explore our top-rated rooms for an unforgettable stay.
      </p>
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="animate-pulse bg-gray-200 dark:bg-gray-700 h-[300px] rounded-lg"
            ></div>
          ))}
        </div>
      ) : (
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {rooms.map((room) => (
            <RoomCard
              key={room._id}
              room={room}
              alt={`Image of ${room.title}`}
            />
          ))}
        </div>
      )}
      <div className="text-center mt-10">
        <Link
          to="/rooms"
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Show All Rooms
        </Link>
      </div>
    </div>
  );
};

export default FeaturedRooms;

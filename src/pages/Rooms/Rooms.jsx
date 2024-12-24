
import { useEffect, useState } from "react";
import RoomCard from "../../components/RoomCard/RoomCard";
import { Helmet } from "react-helmet";


const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/rooms")  
      .then((res) => res.json())
      .then((data) => setRooms(data))
      .catch((error) => console.error("Error fetching rooms:", error));
  }, []);


  
  

  return (
    <div className="container mx-auto px-4 py-8">
        <Helmet>
        <title>Explore Our Rooms | Hotel Booking</title>
        <meta
          name="description"
          content="Browse our luxurious and comfortable rooms tailored to meet your needs. Book now for a memorable stay!"
        />
        <meta name="keywords" content="rooms, hotel, booking, luxury, comfort" />
        <meta name="author" content="Hotel Booking Team" />
      </Helmet>
      <h2 className="text-3xl font-bold text-center mb-6">All Rooms</h2>
      <p className="text-center text-gray-600 mb-8">
        Browse through all our available rooms for your perfect stay.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <RoomCard key={room._id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;

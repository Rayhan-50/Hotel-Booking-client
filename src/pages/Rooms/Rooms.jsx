import { useContext, useEffect, useState } from "react";
import RoomCard from "../../components/RoomCard/RoomCard";
import { Helmet } from "react-helmet";
import AuthContext from "../../context/AuthContext/AuthContext"; 
const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [userBookings, setUserBookings] = useState([]);
  const { user } = useContext(AuthContext); 

  useEffect(() => {
   
    fetch("https://hotel-booking-server-azure.vercel.app/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data))
      .catch((error) => console.error("Error fetching rooms:", error));
  }, []);

  useEffect(() => {
    if (user?.email) {
     
      fetch(`myBookings?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setUserBookings(data))
        .catch((error) => console.error("Error fetching bookings:", error));
    }
  }, [user?.email]);

  
  const isRoomBooked = (roomId) => {
    return userBookings.some((booking) => booking.roomId === roomId); 
  };

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
          <RoomCard
            key={room._id}
            room={room}
            isBooked={isRoomBooked(room._id)} 
          />
        ))}
      </div>
    </div>
  );
};

export default Rooms;

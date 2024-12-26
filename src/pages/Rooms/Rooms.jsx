import { useEffect, useState } from "react";
import { useContext } from "react";
import RoomCard from "../../components/RoomCard/RoomCard";
import { Helmet } from "react-helmet";
import AuthContext from "../../context/AuthContext/AuthContext";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [userBookings, setUserBookings] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data))
      .catch((error) => console.error("Error fetching rooms:", error));
  }, []);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/myBookings?email=${user.email}`)
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
          content="Explore our selection of comfortable and luxurious rooms for your stay."
        />
      </Helmet>

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

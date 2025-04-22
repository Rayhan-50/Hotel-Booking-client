import { useEffect, useState } from "react";
import { useContext } from "react";
import RoomCard from "../../components/RoomCard/RoomCard";
import { Helmet } from "react-helmet";
import AuthContext from "../../context/AuthContext/AuthContext";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [sortOrder, setSortOrder] = useState("default");
  const [userBookings, setUserBookings] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://hotel-booking-server-azure.vercel.app/rooms")
      .then((res) => res.json())
      .then((data) => {
        setRooms(data);
      })
      .catch((error) => toast.error("Failed to load rooms."));
  }, []);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://hotel-booking-server-azure.vercel.app/myBookings?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setUserBookings(data))
        .catch((error) => toast.error("Failed to load bookings."));
    }
  }, [user?.email]);

  const handleSort = (order) => {
    setSortOrder(order);
    const sortedRooms = [...rooms].sort((a, b) =>
      order === "asc" ? a.price - b.price : b.price - a.price
    );
    setRooms(sortedRooms);
  };

  const isRoomBooked = (roomId) => {
    return userBookings.some((booking) => booking.roomId === roomId);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Explore Our Rooms | Hotel Booking</title>
        <meta name="description" content="Explore our selection of comfortable and luxurious rooms for your stay." />
      </Helmet>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Our Rooms</h2>
        <select
          onChange={(e) => handleSort(e.target.value)}
          className="p-2 border rounded-md text-black dark:text-white dark:bg-gray-700"
          aria-label="Sort rooms by price"
        >
          <option value="default">Sort by: Default</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <RoomCard
            key={room._id}
            room={room}
            isBooked={isRoomBooked(room._id)}
            alt={`Image of ${room.title}`}
          />
        ))}
      </div>
    </div>
  );
};
export default Rooms;

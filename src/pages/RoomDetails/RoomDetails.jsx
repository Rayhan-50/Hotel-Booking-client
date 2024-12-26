
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";
import axios from "axios";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useLoaderData, useNavigate } from "react-router-dom";

const RoomDetails = () => {
  const { _id, image, title, description, price, reviews, isBooked } = useLoaderData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingDate, setBookingDate] = useState(null);
  const [isRoomBooked, setIsRoomBooked] = useState(isBooked);
  const { user } = useContext(AuthContext);

  // const notifyBookingSuccess = (date) => {
  //   toast.success(`Room booked successfully for ${date.toLocaleDateString()}`);
  // };

  const handleBookNow = () => {
    if (isRoomBooked) {
      return;
    }
    setIsModalOpen(true);
  };

  const navigate = useNavigate();

  const handleAddToMyBookings = async () => {
    try {
      const response = await axios.post("http://localhost:5000/myBookings", {
        roomId: _id,
        title: title,
        price: price,
        description: description,
        reviews: reviews,
        bookingDate: bookingDate,
        user_email: user.email,
      });
      if (response.status === 201) {
        alert("Room added to your collection!");
        navigate("/rooms");
      } else {
        alert("Failed to add the room. Please try again.");
      }
    } catch (error) {
      console.error("Error adding room to collection:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>My Bookings - Hotel Booking</title>
      </Helmet>
      <div>
        <img src={image} alt={title} className="w-full h-64 object-cover rounded-lg" />
        <h1 className="text-2xl font-bold mt-4">{title}</h1>
        <p className="text-gray-600 mt-2">{description}</p>
        <p className="text-lg font-semibold mt-2">${price}</p>
        <p className="text-gray-500 mt-1">Reviews: {reviews}</p>
      </div>

      <button
        onClick={handleBookNow}
        className={`mt-6 w-full px-4 py-2 rounded-lg transition ${isRoomBooked ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
        disabled={isRoomBooked}
      >
        {isRoomBooked ? "Room Booked" : "Book Now"}
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-lg font-semibold mb-4">Confirm Booking</h2>
            <div>
              <p>
                <strong>Title:</strong> {title}
              </p>
              <p>
                <strong>Description:</strong> {description}
              </p>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Select Booking Date:
                </label>
                <DatePicker
                  selected={bookingDate}
                  onChange={(date) => setBookingDate(date)}
                  minDate={new Date()}
                  className="mt-2 p-2 border rounded w-full text-black"
                  disabled={isRoomBooked}
                />
              </div>
              <div className="flex justify-end mt-6">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 mr-2"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddToMyBookings}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  disabled={isRoomBooked}
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomDetails;

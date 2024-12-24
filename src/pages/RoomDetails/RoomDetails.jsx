
import { useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import axios from "axios";
import AuthContext from "../../context/AuthContext/AuthContext";


const RoomDetails = () => {
  const {_id, image, title, description, price, reviews, isBooked } = useLoaderData(); // Assuming isBooked indicates room availability
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingDate, setBookingDate] = useState(null);
  const [isRoomBooked, setIsRoomBooked] = useState(isBooked);
  console.log(_id, image, title, description, price, reviews )
  const { user } = useContext(AuthContext);
// console.log(user.email)
  const notifyBookingSuccess = (date) => {
    toast.success(`Room booked successfully for ${date.toLocaleDateString()}`);
  };

  const handleBookNow = () => {
    if (isRoomBooked) {
      toast.error("This room is already booked.");
      return;
    }
    setIsModalOpen(true);
  };

  const handleAddToCollection = async () => {
    try {
      const response = await axios.post("http://localhost:5000/myBookings", {
        roomId: _id,
        title: title,
        price: price,
        description: description,
        reviews: reviews,
        bookingDate: bookingDate,
        // user_name: user.name,
        user_email: user.email
      });

      if (response.status === 201) {
        console.log("Sent")
        alert("Room added to your collection!");
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
        <title>{`${title} | Room Details`}</title>
        <meta
          name="description"
          content={`Discover the details of our ${title}. ${description}. Price: $${price}. Rated by ${reviews} guests.`}
        />
        <meta
          name="keywords"
          content={`room details, ${title.toLowerCase()}, hotel, booking, luxury, comfort`}
        />
        <meta name="author" content="Hotel Booking Team" />
      </Helmet>
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-64 object-cover" />

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-600 mt-4">{description}</p>

          <p className="text-lg text-gray-700 mt-4">
            <strong>Why book this room?</strong> Enjoy a comfortable stay with our thoughtfully designed room that combines modern amenities with a relaxing ambiance. Perfect for both business and leisure travelers.
          </p>

          <p className="text-lg font-semibold text-blue-600 mt-4">
            Price: <span className="font-bold">{price}</span>
          </p>

          <p className="text-gray-500 mt-2">
            <strong>Reviews:</strong> Rated by <span className="font-bold">{reviews}</span> guests. Experience our hospitality and join the list of happy customers!
          </p>

          <button
  onClick={handleBookNow}
  className={`mt-6 w-full px-4 py-2 rounded-lg transition ${isRoomBooked ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
  disabled={isRoomBooked} // Disable button if room is already booked
>
  {isRoomBooked ? "Room Booked" : "Book Now"}
</button>

        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md">
            <h2 className="text-xl font-bold mb-4">Booking Summary</h2>
            <p>
              <strong>Room:</strong> {title}
            </p>
            <p>
              <strong>Price:</strong> {price}
            </p>
            <p>
              <strong>Description:</strong> {description}
            </p>

            {/* Date Picker */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Select Booking Date:
              </label>
              <DatePicker
                selected={bookingDate}
                onChange={(date) => setBookingDate(date)}
                minDate={new Date()}
                className="mt-2 p-2 border rounded w-full"
                disabled={isRoomBooked} // Disable date picker if room is already booked
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end mt-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 mr-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
              onClick={handleAddToCollection}
                
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                disabled={isRoomBooked} 
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomDetails;




import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const [currentBookingId, setCurrentBookingId] = useState(null);
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");
  const [newBookingDate, setNewBookingDate] = useState("");
  const { user } = useContext(AuthContext);

  
  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://hotel-booking-server-azure.vercel.app/myBookings?email=${user.email}`)
        .then((res) => setBookings(res.data))
        .catch((error) => console.error("Error fetching bookings:", error));
    }
  }, [user?.email]);

 
  const handleAddBooking = async (room) => {
    try {
      const bookingData = {
       
        roomTitle: room._id,
        price: room.price,
        bookingDate: new Date().toISOString(), 
        user_email: user.email, 
      };

      const response = await axios.post("https://hotel-booking-server-azure.vercel.app/myBookings", bookingData);
    
      if (response.status === 201) {
        Swal.fire("Success!", "Booking added successfully!", "success");
        setBookings((prev) => [...prev, bookingData]); 
      } else {
        alert("Failed to add booking.");
      }
    } catch (error) {
      console.error("Error adding booking:", error);
      alert("An error occurred. Please try again.");
    }
  };

 
  const handleDeleteBooking = async (bookingId) => {
    try {
      const response = await axios.delete(`https://hotel-booking-server-azure.vercel.app/myBookings/${bookingId}`);
      
      if (response.status === 200) {
       
        setBookings((prev) => prev.filter((booking) => booking._id !== bookingId));
        Swal.fire("Deleted!", "Booking deleted successfully!", "success");
      } else {
        Swal.fire("Error!", "Failed to delete booking.", "error");
      }
    } catch (error) {
      console.error("Error deleting booking:", error);
      Swal.fire("Error!", "An error occurred while deleting the booking. Please try again.", "error");
    }
  };

  
  const handleReviewClick = (bookingId) => {
    setCurrentBookingId(bookingId);
    setModalVisible(true);
  };

 
  const handleReviewSubmit = async () => {
    try {
      const response = await axios.post("https://hotel-booking-server-azure.vercel.app/reviews", {
        bookingId: currentBookingId,
        userEmail: user.email,
        rating,
        comment,
      });

      if (response.status === 201) {
        Swal.fire("Success!", "Review submitted successfully!", "success")
        setModalVisible(false);
        setRating(1);
        setComment("");
      } else {
        Swal.fire("Error!", "Failed to submit review. Please try again.", "error");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      Swal.fire("Error!", "Failed to submit review. Please try again.", "error");
    }
  };

 
  const handleUpdateClick = (bookingId, currentDate) => {
    setCurrentBookingId(bookingId);
    setNewBookingDate(currentDate);
    setUpdateModalVisible(true);
  };

 
  const handleUpdateSubmit = async () => {
    try {
      const response = await axios.put(`https://hotel-booking-server-azure.vercel.app/myBookings/${currentBookingId}`, {
        bookingDate: newBookingDate,
      });

      if (response.status === 200) {
        Swal.fire("Success!", "Booking date updated successfully!", "success");
       
        setBookings((prev) =>
          prev.map((booking) =>
            booking._id === currentBookingId ? { ...booking, bookingDate: newBookingDate } : booking
          )
        );
        setUpdateModalVisible(false);
        setNewBookingDate("");
      } else {
        Swal.fire("Error!", "Failed to update booking date.", "error");
      }
    } catch (error) {
      console.error("Error updating booking date:", error);
      Swal.fire("Error!", "An error occurred. Please try again.", "error");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">My Bookings</h2>
      {bookings.length === 0 ? (
        <p className="text-center text-gray-500">No bookings found.</p>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Room Title</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Booking Date</th>
              <th className="border border-gray-300 px-4 py-2">Review</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td className="border border-gray-300 px-4 py-2">{booking.title}</td>
                <td className="border border-gray-300 px-4 py-2">{booking.price}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(booking.bookingDate).toLocaleDateString()}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleReviewClick(booking._id)}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                  >
                    Give Review
                  </button>
                </td>
                <td className="border border-gray-300 px-4 py-2 gap-5">
                  <button
                    onClick={() => handleUpdateClick(booking._id, booking.bookingDate)}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Update Booking
                  </button>
                  <button
                    onClick={() => handleDeleteBooking(booking._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Cancel Booking
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      
      {modalVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h3 className="text-xl font-semibold mb-4">Give a Review</h3>
            <div className="mb-4">
              <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                Rating (1 to 5)
              </label>
              <input
                type="number"
                id="rating"
                value={rating}
                min="1"
                max="5"
                onChange={(e) => setRating(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                Comment
              </label>
              <textarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleReviewSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              >
                Submit
              </button>
              <button
                onClick={() => setModalVisible(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      
      {updateModalVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h3 className="text-xl font-semibold mb-4">Update Booking Date</h3>
            <div className="mb-4">
              <label htmlFor="newBookingDate" className="block text-sm font-medium text-gray-700">
                New Booking Date
              </label>
              <input
                type="date"
                id="newBookingDate"
                value={newBookingDate}
                onChange={(e) => setNewBookingDate(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex justify-end ">
              <button
                onClick={handleUpdateSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              >
                Update
              </button>
              <button
                onClick={() => setUpdateModalVisible(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBookings;



import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import axios from 'axios'; 

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentBookingId, setCurrentBookingId] = useState(null);
  const [rating, setRating] = useState(1); 
  const [comment, setComment] = useState('');
  const { user } = useContext(AuthContext); 

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/myBookings?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setBookings(data))
        .catch((error) => console.error('Error fetching bookings:', error));
    }
  }, [user?.email]);

  const handleUpdateDate = (bookingId, newDate) => {
    fetch(`http://localhost:5000/myBookings/${bookingId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ bookingDate: newDate }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Booking date updated successfully!") {
          setBookings((prevBookings) =>
            prevBookings.map((booking) =>
              booking._id === bookingId
                ? { ...booking, bookingDate: new Date(newDate) }
                : booking
            )
          );
        }
      })
      .catch((error) => console.error('Error updating booking date:', error));
  };

  const handleDeleteBooking = (bookingId) => {
    fetch(`http://localhost:5000/myBookings/${bookingId}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Booking deleted successfully!") {
          setBookings((prevBookings) =>
            prevBookings.filter((booking) => booking._id !== bookingId)
          );
        }
      })
      .catch((error) => console.error('Error deleting booking:', error));
  };

  const handleReviewClick = (bookingId) => {
    setCurrentBookingId(bookingId);
    setModalVisible(true); 
  };

  const handleReviewSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/reviews', {
        bookingId: currentBookingId,
        userEmail: user.email,
        rating,
        comment,
      });
      

      if (response.status === 201) {
        alert('Review submitted successfully!');
        setModalVisible(false); 
        setRating(1);
        setComment(''); 
      } else {
        alert('Failed to submit review. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">My Bookings</h2>
      {bookings.length === 0 ? (
        <p className="text-center text-gray-600">No bookings found.</p>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
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
                <td className="border border-gray-300 px-4 py-2">${booking.price}</td>
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
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() =>
                      handleUpdateDate(booking._id, prompt("Enter new booking date:", new Date(booking.bookingDate).toLocaleDateString()))
                    }
                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                  >
                    Update Date
                  </button>
                  <button
                    onClick={() => handleDeleteBooking(booking._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Review Modal */}
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
    </div>
  );
};

export default MyBookings;

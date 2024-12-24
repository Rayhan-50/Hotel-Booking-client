import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext); // Assuming you have user context

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
    </div>
  );
};

export default MyBookings;

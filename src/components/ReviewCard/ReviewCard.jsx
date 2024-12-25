

const ReviewCard = ({ review }) => {
    const { bookingId, userEmail, rating, comment, _id } = review;

    return (
        <div className="border p-4 rounded shadow-md mb-4">
            <h2 className="text-lg font-bold text-center mb-2">Review</h2>
            <p><strong>Booking ID:</strong> {bookingId}</p>
            <p><strong>User Email:</strong> {userEmail}</p>
            <p><strong>Rating:</strong> {rating} / 5</p>
            <p><strong>Comment:</strong> {comment}</p>
        </div>
    );
};

export default ReviewCard;

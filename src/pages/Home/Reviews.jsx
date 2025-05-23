import { useEffect, useState } from "react";
import ReviewCard from "../../components/ReviewCard/ReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState([]); 

  useEffect(() => {
    fetch("https://hotel-booking-server-azure.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data); 
      })
      .catch((error) => console.error("Error fetching reviews:", error)); 
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Our Reviews</h2>
      <p className="text-center text-gray-600 mb-8">
        Listen to what our clients have to say
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

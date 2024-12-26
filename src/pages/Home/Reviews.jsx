import { useEffect, useState } from "react";


import ReviewCard from "../../components/ReviewCard/ReviewCard";

const Reviews = () => {
  const [reviews, setRevews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5173/reviews")
      .then((res) => res.json())
      .then((data) => {
      
        // const topRooms = data.slice(0, 3);
        // setRevews(topRooms);
        setRevews(data)
      })
      .catch((error) => console.error("Error fetching rooms:", error));
  }, []);
console.log(reviews)
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Our Reviews</h2>
      <p className="text-center text-gray-600 mb-8">
        Listen to what our clients has to say
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

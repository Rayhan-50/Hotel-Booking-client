// import { useEffect, useState } from "react";
// import ReviewCard from "../../components/ReviewCard/ReviewCard";

// const Reviews = () => {
//   const [reviews, setReviews] = useState([]); 

//   useEffect(() => {
//     fetch("http://localhost:5173/reviews")
//       .then((res) => res.json())
//       .then((data) => {
//         setReviews(data); 
//       })
//       .catch((error) => console.error("Error fetching reviews:", error)); 
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-3xl font-bold text-center mb-6">Our Reviews</h2>
//       <p className="text-center text-gray-600 mb-8">
//         Listen to what our clients have to say
//       </p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {reviews.map((review) => (
//           <ReviewCard key={review._id} review={review}></ReviewCard>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Reviews;
import { useEffect, useState } from "react";
import ReviewCard from "../../components/ReviewCard/ReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5173/reviews")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          setReviews(data);
        } else {
          console.warn("No reviews found, displaying static reviews.");
        }
      })
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);

  // Static fallback data
  const staticReviews = [
    {
      _id: "static1",
      name: "John Doe",
      review: "This is a fantastic service! Highly recommended.",
      rating: 5,
    },
    {
      _id: "static2",
      name: "Jane Smith",
      review: "Had a great experience. Will come back for sure!",
      rating: 4,
    },
    {
      _id: "static3",
      name: "Alex Johnson",
      review: "Good value for money. Could improve on response time.",
      rating: 4,
    },
  ];

  const displayReviews = reviews.length > 0 ? reviews : staticReviews;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Our Reviews</h2>
      <p className="text-center text-gray-600 mb-8">
        Listen to what our clients have to say
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayReviews.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

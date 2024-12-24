import { Helmet } from "react-helmet";
import { Link } from "react-router-dom"; // To navigate back to home

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <Helmet>
        <title>404 - Page Not Found</title>
        <meta name="description" content="Oops! The page you are looking for does not exist. Navigate back to the home page." />
      </Helmet>
      <img
        src="https://i.ibb.co.com/S55MLhK/3.jpg" // Replace with your exciting JPG/GIF URL
        alt="404 Not Found"
        className="w-full max-w-lg mb-8"
      />
      <h1 className="text-4xl font-bold text-center text-red-600 mb-4">
        Oops! Page Not Found
      </h1>
      <p className="text-lg text-center text-gray-600 mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;

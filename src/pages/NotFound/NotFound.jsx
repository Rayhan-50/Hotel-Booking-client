import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-50 dark:bg-gray-900">
    <Helmet>
      <title>404 - Page Not Found | Hotel Booking</title>
      <meta name="description" content="Oops! The page you are looking for does not exist. Navigate back to the home page." />
    </Helmet>
    <img
      src="https://i.ibb.co.com/S55MLhK/3.jpg"
      alt="404 Not Found Illustration"
      className="w-full max-w-md mb-8"
    />
    <h1 className="text-4xl font-bold text-center text-red-600 dark:text-red-400 mb-4">
      Oops! Page Not Found
    </h1>
    <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-6">
      The page you are looking for does not exist.
    </p>
    <Link
      to="/"
      className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      aria-label="Return to Home Page"
    >
      Back to Home
    </Link>
  </div>
  );
};

export default NotFound;

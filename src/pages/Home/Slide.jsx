


import { Link } from "react-router-dom";

const Slide = ({ image, title, description, buttonText, link, alt }) => (
  <div
    className="w-full bg-center bg-cover h-[38rem]"
    style={{ backgroundImage: `url(${image})` }}
  >
    <img src={image} alt={alt} className="hidden" /> {/* Hidden for SEO */}
    <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold text-white lg:text-5xl">{title}</h1>
        <p className="mt-4 text-lg text-gray-300 lg:text-xl">{description}</p>
        <Link
          to={link}
          className="inline-block px-6 py-3 mt-6 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label={`Navigate to ${buttonText}`}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  </div>
);

export default Slide;

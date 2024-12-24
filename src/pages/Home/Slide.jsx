


import { Link } from "react-router-dom";

const Slide = ({ image, title, description, buttonText, link }) => {
  return (
    <div
      className="w-full bg-center bg-cover h-[38rem]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold text-white lg:text-5xl">{title}</h1>
          <p className="mt-4 text-lg text-gray-300 lg:text-xl">{description}</p>
          <Link
            to={link}
            className="inline-block px-6 py-3 mt-6 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;

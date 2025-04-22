
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { motion } from "framer-motion";
import markerIcon from "../../assets/images/map.png";

// Custom marker icon with accessibility
const customIcon = new L.Icon({
  iconUrl: markerIcon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  alt: "Hotel location marker",
});

const Map = () => {
  const hotelCoordinates = [40.73061, -73.935242];
  const [isLoading, setIsLoading] = useState(true);

  // Simulate map loading (Leaflet can take a moment to initialize)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust based on actual loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="container px-6 py-16 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
        Our Location
      </h2>
      {isLoading ? (
        <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-[400px] md:h-[500px] w-full rounded-lg shadow-lg"></div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="h-[400px] md:h-[500px] w-full rounded-lg shadow-lg overflow-hidden"
        >
          <MapContainer
            center={hotelCoordinates}
            zoom={13}
            scrollWheelZoom={false}
            className="h-full w-full"
            aria-label="Map showing hotel location"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={hotelCoordinates} icon={customIcon}>
              <Popup>
                Welcome to Our Hotel! <br /> We look forward to your stay.
              </Popup>
            </Marker>
          </MapContainer>
        </motion.div>
      )}
    </section>
  );
};

export default Map;


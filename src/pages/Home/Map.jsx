
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";


import markerIcon from "../../assets/images/map.png";

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const Map = () => {
  
  const hotelCoordinates = [40.73061, -73.935242]; 

  return (
    <div className="container px-6 py-10 mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">
        Our Location
      </h2>
      <MapContainer
        center={hotelCoordinates}
        zoom={13}
        scrollWheelZoom={false}
        className="h-[400px] w-full rounded-lg shadow-lg"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={hotelCoordinates} icon={customIcon}>
          <Popup>
            Welcome to Our Hotel! <br /> We look forward to your stay.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;




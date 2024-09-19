import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface mapProps {
  lat: number;
  long: number; // Example: San Francisco Latitude and Longitude
}

// Define the component using React.FC (Functional Component) with TypeScript
const MyMapComponent = ({ lat, long }: mapProps) => {
  const position: [number, number] = [lat, long]; // Example: San Francisco Latitude and Longitude

  return (
    <MapContainer
      bounds={position}
      style={{ height: "300px", marginTop: 10, width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>San Francisco</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMapComponent;

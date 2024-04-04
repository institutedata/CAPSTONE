/** @format */

// Map.jsx
import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
  // Coordinates for 331 Athlone Drive, Cambridge, New Zealand
  const location = [-37.886837657156235, 175.49380367654538];

  return (
    <MapContainer
      center={location}
      zoom={20}
      style={{
        height: '50vh',
        width: '95%',
        borderRadius: '10px',
        margin: '5vh',
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={location}>
        <Popup>331 Athlone Drive, Cambridge, New Zealand</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;

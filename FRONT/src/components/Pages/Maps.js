import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Maps = () => {
  const center = [33.6844, 73.0479]; // Islamabad coordinates

  return (
    <Map center={center} zoom={12} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Example Marker */}
      <Marker position={[33.6844, 73.0479]}>
        <Popup>
          Islamabad
        </Popup>
      </Marker>
    </Map>
  );
};

export default Maps;

import React from 'react';
import {MapContainer, Marker, TileLayer, Popup} from "react-leaflet";

const Mapa = () => {
  return <MapContainer center={[-36.81857898225379, -73.04047595337346]} zoom={17}>
    <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a hreft="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />

    <Marker position={[-36.81857898225379, -73.04047595337346]}>
      <Popup>
        Avda. Los Carrera 1598, esquina Galvarino, Concepción
      </Popup>
    </Marker>

  </MapContainer>;
};
export default Mapa;
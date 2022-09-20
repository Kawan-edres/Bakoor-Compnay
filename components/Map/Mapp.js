import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import classes from './map.module.css'


import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import * as L from 'leaflet';
import 'leaflet-defaulticon-compatibility'



export default function Mapp({data}) {
  console.log(data);
  return (
    <MapContainer className={classes['leaflet-container']} center={[data.lat, data.long]} zoom={20} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker 
   
       
      position={[data.lat, data.long]}>
        <Popup>
          {data.title}
        </Popup>
      </Marker>
    </MapContainer>
  )
}
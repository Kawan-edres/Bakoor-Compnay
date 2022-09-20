import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import classes from './map.module.css'

export default function Map({data}) {
  const center = useMemo(() => ({ lat: data.lat, lng: data.long }), [data.lat,data.long]);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    data.lat && data.long && (

    <div className={classes.mapContainer} >

    <GoogleMap zoom={15} center={center} mapContainerClassName={classes.map}>
      <MarkerF position={center} />
    </GoogleMap>
    </div>
    )
  );
}

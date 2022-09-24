import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBBLIC_KEY_GOOGLE,
  });
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div style={{ height: "20px" }}>
      <MapG />
    </div>
  );
}
//4.809030035757831, -75.69094167161828
function MapG() {
  const center = useMemo(
    () => ({
      lat: 4.809030035757831,
      lng: -75.69094167161828,
    }),
    []
  );
  return (
    <GoogleMap
      mapContainerStyle={{ height: "500px", width: "800px" }}
      zoom={20}
      center={center}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}

import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

const MapTest = () => {
  const [cordinates, setCordinates] = useState({
    lat: 41.054028,
    lng: 44.615734,
  });

  console.log(process.env.MAP_KEY);

  return (
    <div className="w-full h-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAylJ09laT7k9vKX5UbLQ5zKV0W4BKi3Gw" }}
        defaultCenter={cordinates}
        center={cordinates}
        defaultZoom={10}
        margin={[50, 50, 50, 50]}
        //   options={""}
        onChange={() => {}}
        onChildClick={() => {}}
      ></GoogleMapReact>
    </div>
  );
};

export default MapTest;

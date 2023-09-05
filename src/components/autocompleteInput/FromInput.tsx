import React from "react";
import InputPlaces from "./InputPlaces";
import { Coords } from "google-map-react";

const FromInput = () => {
  const cbSuccess = (address: string, location: Coords) => {
    console.log({ location, description: address });
  };

  let erevan = {
    location: { lat: 40.1872023, lng: 44.515209 },
    description: "Ereván, Армения",
  };
  let vanadzor = {
    location: { lat: 40.807399, lng: 44.4970268 },
    description: "Vanadzor, Армения",
  };

  return (
    // <div>aaa</div>
    <InputPlaces cbSuccess={cbSuccess} type={"from"} />
  );
};

export default FromInput;

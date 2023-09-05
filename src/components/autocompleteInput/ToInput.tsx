import React from "react";
import InputPlaces from "./InputPlaces";

import { Coords } from "google-map-react";

const ToInput = () => {
  const cbSuccess = (address: string, location: Coords) => {
    console.log({ location, description: address });
  };

  return <InputPlaces cbSuccess={cbSuccess} type={"to"} />;
};

export default ToInput;

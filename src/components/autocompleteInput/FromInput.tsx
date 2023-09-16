import React from "react";
import InputPlaces from "./InputPlaces";




const FromInput = ({cbSuccess}:any) => {
 
  return (
    <InputPlaces cbSuccess={cbSuccess} type={"from"} />
  );
};

export default FromInput;

import React, { useState } from "react";
import { testload } from "../data/testload";
import LoadItem from "./LoadItem";
import Loader from "./Loader";
const itemsPerRow = 50;
const Loads = () => {
  const [next, setNext] = useState<number>(itemsPerRow);
  const handleMoreImage = () => {
    setNext(next + 50);
  };

  return (
    <div>
      <div className="w-full h-10 bg-gray-400 flex items-center pl-6">
        <p>{testload.length} Total results </p>
      </div>
      {testload.slice(0, next)?.map((el, i) => (
        <div key={i}>
          <LoadItem {...el} />
        </div>
      ))}
      {next < testload?.length && (
        <div className="w-full flex justify-center py-4 ">
          <button
            onClick={handleMoreImage}
            className="bg-[#1C90F3] text-white text-sm rounded-md px-4 py-2"
          >
            LOAD MORE
          </button>
        </div>
      )}
      {/* <Loader/> */}
    </div>
  );
};

export default Loads;

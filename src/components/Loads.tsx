import React, { useState } from "react";
import { testload } from "../data/testload";
import LoadItem from "./LoadItem";
import Loader from "./Loader";
import { LuFilter, LuFilterX } from "react-icons/lu";
import DashboardFilter from "./DashboardFilter";
import SortLoads from "../UI/UISort";
const itemsPerRow = 50;
const Loads = () => {
  const [next, setNext] = useState<number>(itemsPerRow);
  const handleMoreImage = () => {
    setNext(next + 50);
  };
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div>
        <div className="w-full h-10 bg-gray-400 flex items-center justify-between pl-4 lg:pl-6 pr-8">
          <p>{testload.length} Total results </p>
          <div className="h-full flex items-center gap-4">
            <SortLoads />
            <div
              onClick={() => setOpen(!open)}
              className="cursor-pointer text-xl font-bold"
            >
              {open ? <LuFilterX /> : <LuFilter />}
            </div>
          </div>
        </div>
        <DashboardFilter open={open} />
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
    </>
  );
};

export default Loads;

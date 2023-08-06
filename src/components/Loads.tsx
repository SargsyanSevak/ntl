import React, { useState, useEffect } from "react";
import { testload } from "../data/testload";
import LoadItem from "./LoadItem";
import Loader from "./Loader"; // Replace with your Loader component
import { LuFilter, LuFilterX } from "react-icons/lu";
import { RxUpdate } from "react-icons/rx";
import DashboardFilter from "./DashboardFilter";
import SortLoads from "../UI/UISort";
import { LoadProps } from "../interfaces/LoadProps";
import TruckLoader from "./TruckLoader";

const itemsPerRow = 50;

const Loads = () => {
  const [next, setNext] = useState<number>(itemsPerRow);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState<boolean>(false);
  const [loadData, setLoadData] = useState<LoadProps[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setLoadData(testload);
      setIsLoading(false);
    }, 2000); 
  }, []);

  const handleMoreImage = () => {
    setNext(next + 50);
  };

  return (
    <>
      <div>
        <div className="w-full h-10 bg-[#eaeaea] dark:bg-[#081423] dark:text-white flex items-center justify-between pl-4 pr-4 ">
          <p>{loadData.length} Total results</p>
          <div className="h-full flex items-center gap-4 relative -z-1 dark:text-white">
            <SortLoads />
            <div
              onClick={() => setOpen(!open)}
              className="cursor-pointer text-xl font-bold"
            >
              {open ? <LuFilterX /> : <LuFilter />}
            </div>
          </div>
        </div>
        <div className="lg:block hidden"></div>
        <DashboardFilter open={open} />

        {isLoading ? (
          <div className="w-full h-[calc(100vh-110px)]  flex justify-center items-center">
            <TruckLoader />
          </div>
        ) : (
          <>
            {loadData.slice(0, next)?.map((el, i) => (
              <div key={i} className="pb-[2px]">
                <LoadItem {...el} />
              </div>
            ))}
          </>
        )}

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
      </div>
    </>
  );
};

export default Loads;

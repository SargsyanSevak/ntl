import React, { useEffect, useState } from "react";
import { testTrucks } from "../data/testTrucks"; 
import { LuFilter, LuFilterX } from "react-icons/lu";
import { RxUpdate } from "react-icons/rx";
import DashboardFilter from "./DashboardFilter";
import SortLoads from "../UI/UISort";
import TruckLoader from "./TruckLoader";
import TruckItem from "./TruckItem";
import { TruckProps } from "../interfaces/TruckProps";
const itemsPerRow = 50;

const Truck = () => {
  const [next, setNext] = useState<number>(itemsPerRow);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState<boolean>(false);
  const [loadData, setLoadData] = useState<TruckProps[]>([]);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadData(loadData);
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleMoreLoads = () => {
    setNext(next + 50);
  };
  const handleUpdateData = () => {
    setIsUpdated(true);
    setTimeout(() => {
      setIsUpdated(false);
    }, 2000);
  };
  return (
    <>
      <div>
        <div className="w-full h-10 bg-[#eaeaea] flex items-center justify-between pl-4 pr-4 border-t-[1px] dark:border-t-0 dark:bg-[#0b1c2f] dark:text-white">
          <p className="text-[14px]">{testTrucks.length} գտնված բեռնատարներ</p>
          <div className="h-full flex items-center gap-4 relative -z-1">
            <SortLoads />
            <div
              onClick={() => setOpen(!open)}
              className="cursor-pointer text-xl font-bold"
            >
              {open ? <LuFilterX /> : <LuFilter />}
            </div>
          </div>
        </div>
        <div className="lg:block hidden">
          <div className="w-full h-[30px] bg-gray-300 dark:bg-[#27374D] dark:text-white text-[12px]  flex justify-around gap-[1px] font-semibold text-gray-700 mb-[2px]">
            <div className=" flex justify-start items-center pl-[12px] w-[50px] text-[14px] font-bold">
              <div title={"վերջին թարմացումը"} className="cursor-pointer">
                <span onClick={handleUpdateData}>
                  <RxUpdate
                    className={` ${isUpdated ? "animate-rotate" : ""}`}
                  />
                </span>
              </div>
            </div>
            <div className=" flex justify-start items-center pl-[6px] w-[50px]">
              <div title={"բարձման օր"}>օր</div>
            </div>
            <div className=" flex justify-start items-center pl-[6px] w-[50px]">
              <div title={"տրանսպորտային միջոցի տեսակը"}>տ/մ</div>
            </div>
            <div className=" flex justify-start items-center pl-[6px] w-[40px]">
              <div title={"ամբողջական/հավաքական"}>Ա/Հ</div>
            </div>

            <div className=" flex justify-start items-center pl-[6px] w-[150px]">
              <div title={"բարձման վայր"}>բարձում</div>
            </div>
            <div className=" flex justify-start items-center pl-[6px] w-[35px]">
              <div></div>
            </div>
            <div className="flex justify-start items-center pl-[6px] w-[150px]">
              <div title={"բերնաթափման վայր"}>բեռնաթափում</div>
            </div>
            <div className="flex justify-start items-center pl-[6px] w-[70px]">
              <div title={"հեռավորություն"}>հեռավ.</div>
            </div>
            <div className="flex justify-start items-center pl-[6px] w-[160px]">
              <div>փոխադրող</div>
            </div>
            <div className=" flex justify-start items-center pl-[6px] w-[140px]">
              <div>կոնտակտ</div>
            </div>
            <div className=" flex justify-start items-center pl-[6px] w-[50px]">
              <div>ծավալ</div>
            </div>
            <div className=" flex justify-start items-center pl-[6px] w-[80px]">
              <div>քաշ</div>
            </div>
            <div className=" flex justify-start items-center pl-[6px] w-[70px]">
              <div>գին</div>
            </div>
            {/* <div className="flex justify-start items-center pl-[6px] w-[70px]"></div> */}
          </div>
        </div>
        <DashboardFilter open={open} />

        {isLoading ? (
          <div className="w-full h-[calc(100vh-110px)]  flex justify-center items-center">
            <TruckLoader />
          </div>
        ) : (
          <>
            {loadData.slice(0, next)?.map((el, i) => (
              <div key={i} className="pb-[2px]">
                <TruckItem {...el} />
              </div>
            ))}
          </>
        )}
        {next < testTrucks?.length && (
          <div className="w-full flex justify-center py-4 ">
            <button
              onClick={handleMoreLoads}
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

export default Truck;

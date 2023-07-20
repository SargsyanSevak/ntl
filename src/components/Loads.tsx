import React, { useState } from "react";
import { testload } from "../data/testload";
import LoadItem from "./LoadItem";
import Loader from "./Loader";
import { LuFilter, LuFilterX } from "react-icons/lu";
import {RxUpdate} from 'react-icons/rx'
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
        <div className="w-full h-10 bg-[#eaeaea] flex items-center justify-between pl-4 pr-4 border-t-[1px]">
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
        <div className="lg:block hidden">
          <div className="w-full h-[30px] bg-[#c4c4c4b1] text-[12px]  flex justify-around gap-[1px] font-semibold text-gray-700">
            <div className=" flex justify-start items-center pl-[12px] w-[50px] text-[14px] font-bold">
              <div title={"վերջին թարմացումը"} className="cursor-pointer"><RxUpdate/></div>
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
              <div>պատվիրատու</div>
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
            <div className="flex justify-start items-center pl-[6px] w-[70px]"></div>
          </div>
        </div>
        <DashboardFilter open={open} />
        {testload.slice(0, next)?.map((el, i) => (
          <div key={i} className="pb-[2px]">
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

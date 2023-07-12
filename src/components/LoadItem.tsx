import React, { useState } from "react";
import { LoadProps } from "../interfaces/LoadProps";
import { HiArrowRight } from "react-icons/hi";
import { AiOutlineClockCircle, AiOutlineCalendar } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { TbCurrentLocation } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";
import { BsRecordCircle } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { MdOutlineHeight } from "react-icons/md";
import { Link } from "react-router-dom";
const LoadItem = ({
  id,
  age,
  date,
  truckType,
  loadType,
  pickup,
  delivery,
  distance,
  company,
  contact,
  length,
  weight,
  rate,
}: LoadProps) => {
  function CutString(inputString: string): string {
    if (inputString.length > 15) {
      return inputString.slice(0, 15) + "...";
    }
    return inputString;
  }
  return (
    <>
      <div
        className={`hidden  w-full py-2 bg-slate-300 lg:flex flex-col lg:gap-0 gap-2 lg:flex-row justify-between items-center px-2 lg:px-6 text-[0.75rem] lg:text-[0.9rem] font-bold border-b-2`}
      >
        <div className="age flex justify-start items-center gap-2 ">
          <span className="block lg:hidden">
            <AiOutlineClockCircle />
          </span>
          {age}
        </div>
        <div className="date flex justify-start items-center gap-2 ">
          <span className="block lg:hidden">
            <AiOutlineCalendar />
          </span>
          {date}
        </div>
        <div className="truckType flex justify-center items-center gap-2">
          <span className="block lg:hidden">
            <BsTruck />
          </span>
          {truckType}
        </div>
        <div className="loadType">{loadType[0].toUpperCase()}</div>
        <div className="pickup flex justify-center items-center gap-2">
          <span className="block lg:hidden">
            <TbCurrentLocation />
          </span>
          {CutString(pickup)}
        </div>
        <div className="arrow text-gray-500">
          {" "}
          <HiArrowRight />
        </div>
        <div className="delivery flex justify-center items-center gap-2">
          <span className="block lg:hidden">
            <SlLocationPin />
          </span>
          {CutString(delivery)}
        </div>
        <div className="distance">{distance}կմ</div>
        <div className="company text-[#1C90F3]" title={company}>
          {CutString(company)}
        </div>
        <div className="contact">{contact}</div>
        <div className="length">{length}մ³</div>
        <div className="weight">{weight}կգ</div>
        <div className="rate">{rate}$</div>
        <div className="book">
          <Link to={`/dashboard/Preview/${id}`} className="rounded-md bg-[#1C90F3] px-2 py-2 text-white text-[.8rem] cursor-pointer">
            Դիտել
          </Link>
        </div>
      </div>


      <Link to={`/dashboard/detail/${id}`} className="mobile lg:hidden flex bg-slate-200  border-b-4 border-stone-50 sm:px-4 px-4 text-[0.9rem] md:text-[1.2rem] font-bold">
        <div className="w-[20%] min-h-[100px] flex flex-col justify-around items-start md:items-center">
          <div className="age flex flex-col justify-start items-center gap-2">
            <span className="block lg:hidden">
              <AiOutlineClockCircle />
            </span>
            {age}
          </div>
          <div className="date flex flex-col justify-start items-center gap-2">
            <span className="block lg:hidden">
              <AiOutlineCalendar />
            </span>
            {date}
          </div>
        </div>

        <div className="w-full h-[180px]  pl-[20px] md:pl-[100px] py-4 flex flex-col justify-around ">
          <div className="">
            <div className="pickup flex justify-start items-center gap-2">
              <span className="block lg:hidden">
                <BsRecordCircle />
              </span>
              {CutString(pickup)}
            </div>
            <div className="arrow text-gray-500">
              {" "}
              <div className="h-[20px] w-[2px] bg-gray-500 ml-[6px] md:ml-2"></div>
            </div>
            <div className="delivery flex justify-start items-center gap-2">
              <span className="block lg:hidden text-[#1C90F3] ">
                <HiLocationMarker />
              </span>
              {CutString(delivery)}
            </div>
          </div>
          <div className="flex w-full h-[40px] items-center justify-between">
            <div className="length">{length}մ³</div>
            <div className="weight">{weight}կգ</div>
            <div className="truckType flex justify-center items-center gap-2">
              <span className="block lg:hidden">
                <BsTruck />
              </span>
              {truckType}
            </div>
            <div className="distance">{distance}կմ</div>
          </div>
          <div className="flex w-full h-[40px] justify-between items-center">
            <div className="company text-[#1C90F3]" title={company}>
              {company}
            </div>
            {rate ? <div className="rate">{rate}$</div> : <div> - </div>}
          </div>
        </div>
      </Link>
    </>
  );
};

export default LoadItem;

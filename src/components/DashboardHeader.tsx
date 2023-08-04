import React, { useState } from "react";
import DatePickerUi from "./DatePicker";
import UIInput from "../UI/UIInput";
import Logo from "../assets/mainlogo.svg";
import Avatar from "./Avatar";
import UISelect from "../UI/UISelect";
import Loads from "./Loads";
import DashboardFilter from "./DashboardFilter";
const trucks = [
  {
    id: 1,
    name: "ռեֆ",
  },
  {
    id: 2,
    name: "տենտ",
  },
  {
    id: 3,
    name: "կոնտեյնեռ",
  },
  {
    id: 4,
    name: "ավիա",
  },
];
const fullOrPartial = [
  {
    id: 1,
    name: "ամբողջական",
  },
  {
    id: 2,
    name: "հավաքական",
  },
];
const DashboardHeader = () => {
  return (
    <>
      <div className={`w-full  bg-gray-300 py-2 md:px-4 px-2 lg:px-6 relative`}>
        <div className="flex justify-between items-center">
          <div className=" h-12 relative flex justify-start items-center overflow-hidden -ml-2">
            <img src={Logo} alt="" className="w-[90px] logo" />
          </div>

          <div>
            <p className="text-xl font-bold text-gray-600 md:block hidden">
              {" "}
              NTL LOAD BOARD
            </p>
          </div>
          <div className="absolute md:right-36 right-20 font-bold text-sm">
            <ul className="flex  gap-2">
              <li className="active cursor-pointer">Հայ</li>
              <li className="cursor-pointer">Рус</li>
            </ul>
          </div>
          <div>
            <Avatar showDropDown={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;

import React, { useState } from "react";
import DatePickerUi from "./DatePicker";
import UIInput from "../UI/UIInput";
import Logo from '../assets/logo.svg'
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
      <div className={`w-full  bg-gray-300 py-2 px-4 lg:px-6`}>
        <div className="flex justify-between items-center">
        <img src={Logo} alt="" />
          <div>
            <p className="text-xl font-bold text-gray-600"> NTL LOAD BOARD</p>
          </div>
          <div>
            <Avatar showDropDown={true}/>
          </div>
        </div>
       

      </div>
      <Loads />
    </>
  );
};

export default DashboardHeader;

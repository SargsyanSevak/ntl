
import React, { useState } from "react";
import DatePickerUi from "./DatePicker";
import UIInput from "../UI/UIInput";

import Avatar from "./Avatar";
import UISelect from "../UI/UISelect";
import Loads from "./Loads";

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
const DashboardFilter:React.FC<{open:boolean}> = ({open}) => {

  const [name, setName] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <div className={`${open ? "flex" : "hidden"} px-4 lg:px-6 py-8 gap-4 justify-between flex-wrap lg:flex-nowrap`}>
      
          <DatePickerUi />
          <div className="trucktype w-full sm:w-[48%] lg:w-full">
            <UISelect data={trucks} label="Տ/Մ" />
          </div>
          <UIInput
            label="Բարձում"
            text="օր. Մոսկվա"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
          <UIInput
            label="Բեռնաթափում"
            text="օր. Աբովյան"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
          <div className="trucktype w-full sm:w-[48%] lg:w-full">
            <UISelect data={fullOrPartial} label="Ա/Հ" />
          </div>
          <UIInput
            label="Ծավալ մ³"
            text="90"
            type="number"
            value={name}
            onChange={handleNameChange}
          />
          <UIInput
            label="Քաշ կգ"
            text="20000"
            type="number"
            value={name}
            onChange={handleNameChange}
          />
          <UIInput
            label="Գին"
            text="3400"
            type="number"
            value={name}
            onChange={handleNameChange}
          />
          <div className="flex justify-center items-end">
            <button className="px-10 lg:px-4 py-[8px] bg-[#1C90F3] rounded-md text-white text-sm">
              Որոնել
            </button>
          </div>
          <div className="flex justify-center items-end">
            <div className="px-4 lg:px-3 py-[8px] bg-gray-500 rounded-md flex justify-center items-end text-sm cursor-pointer text-white">
              X
            </div>
          </div>
        </div>
  )
}

export default DashboardFilter

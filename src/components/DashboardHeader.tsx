import React, { useState } from "react";
import DatePickerUi from "./DatePicker";
import UIInput from "../UI/UIInput";
import { LuFilter, LuFilterX } from "react-icons/lu";
import Avatar from "./Avatar";
import UISelect from "../UI/UISelect";
import Loads from "./Loads";
const trucks = [
  {
    id: 1,
    name: "Ref",
  },
  {
    id: 2,
    name: "Tent",
  },
];
const fullOrPartial = [
  {
    id: 1,
    name: "full",
  },
  {
    id: 2,
    name: "partial",
  },
];
const DashboardHeader = () => {
  const [open, setOpen] = useState<boolean | null>(false);
  const [name, setName] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <>
      <div className={`w-full  bg-gray-300 py-2 px-4 lg:px-6`}>
        <div className="flex justify-between items-center">
          <div
            onClick={() => setOpen(!open)}
            className="cursor-pointer text-xl font-bold"
          >
            {open ? <LuFilterX /> : <LuFilter />}
          </div>
          <div>
            <p className="text-xl font-bold text-gray-600">NTL LOAD BOARD</p>
          </div>
          <div>
            <Avatar />
          </div>
        </div>

        <div className={`${open ? "flex" : "hidden"} py-8 gap-4 flex-wrap lg:flex-nowrap`}>
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
            <div className="px-4 lg:px-3 py-[8px] bg-gray-500 rounded-md flex justify-center items-end text-sm cursor-pointer">
              X
            </div>
          </div>
        </div>
      </div>
      <Loads />
    </>
  );
};

export default DashboardHeader;

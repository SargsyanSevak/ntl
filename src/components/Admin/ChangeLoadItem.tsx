import React, { useState } from "react";
import UISelect from "../../UI/UISelect";
import { FiEdit2 } from "react-icons/fi";
import { BsCheck2All } from "react-icons/bs";
import { FiX } from "react-icons/fi";
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
const loadStatus = [
  {
    id: 1,
    name: "ակտիվ",
  },
  {
    id: 2,
    name: "ճանապարհին",
  },
  {
    id: 3,
    name: "դատարկված",
  },
  {
    id: 4,
    name: "վճարված",
  },
  {
    id: 5,
    name: "ջնջել",
  },
];
const ChangeLoadItem = ({
  id,
  pickup,
  delivery,
  date,
  weight,
  length,
  rate,
}: any) => {
  const [value, setValue] = useState("");
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const makeDisabled = () => {
    setIsDisabled(false);
  };
  return (
    <div
      className={`w-full min-h-[50px] bg-slate-300 px-4 flex py-4 lg:py-4 flex-wrap lg:flex-nowrap justify-between items-center gap-4 mb-2 text-sm`}
    >
      <div className="date w-full sm:w-[48%] lg:w-[200px]  h-[40px]  flex items-center">
      <input
        type={isDisabled ? "text" : "date"}
        value={date}
        onChange={(e) => setValue(e.target.value)}
        className="w-full lg:w-full px-2 h-[40px] rounded-md border-none focus:outline-none focus:bg-blue-100"
        disabled={isDisabled}
      />
      </div>
      <div className="trailer w-full sm:w-[48%] lg:w-[200px]  h-[40px]  flex items-center -mt-2">
      <UISelect data={trucks} isDisabled={isDisabled} adminVersion={true}/>
      </div>
      <div className="pickup w-full sm:w-[48%] lg:w-[350px]  h-[40px] ">
      <input
        type="text"
        value={pickup}
        onChange={(e) => setValue(e.target.value)}
        className="w-full h-full px-2 rounded-md border-none focus:outline-none focus:bg-blue-100"
        disabled={isDisabled}
      /> 
      </div>
      <div className="delivery w-full sm:w-[48%] lg:w-[350px]  h-[40px] ">
      <input
        type="text"
        value={delivery}
        onChange={(e) => setValue(e.target.value)}
        className="px-2 w-full   h-[40px] rounded-md border-none focus:outline-none focus:bg-blue-100"
        disabled={isDisabled}
      />
      </div>
      <div className="length w-full sm:w-[48%] lg:w-[100px]  h-[40px]">
      <input
        type="text"
        value={length}
        onChange={(e) => setValue(e.target.value)}
        className="px-2 w-full h-[40px] rounded-md border-none flex justify-center items-center focus:outline-none focus:bg-blue-100"
        disabled={isDisabled}
      />
      </div>
      <div className="weight w-full sm:w-[48%] lg:w-[150px]  h-[40px] ">
      <input
        type="text"
        value={weight}
        onChange={(e) => setValue(e.target.value)}
        className="px-2 w-full h-full rounded-md border-none focus:outline-none focus:bg-blue-100"
        disabled={isDisabled}
      />
      </div>
      <div className="rate w-full sm:w-[48%] lg:w-[150px]  h-[40px]">
      <input
        type="text"
        value={rate}
        onChange={(e) => setValue(e.target.value)}
        className="px-2 w-full h-full rounded-md border-none focus:outline-none focus:bg-blue-100"
        disabled={isDisabled}
      />
      </div>
      <div className="status w-full sm:w-[48%] lg:w-[300px]  h-[40px]  md:-mt-4 -mt-2">
      <UISelect data={loadStatus} isDisabled={isDisabled} adminVersion={true}/>
      </div>
      <div className="btns w-full sm:w-[48%] lg:w-[80px]  h-[40px]  flex items-center justify-end gap-4 rounded-xl">
      <div className={`text-[20px] ${isDisabled ? 'block' : 'hidden'} cursor-pointer bg-gray-700 hover:bg-white hover:text-black transition-all text-white w-10 h-10 rounded-full flex justify-center items-center`}  onClick={makeDisabled}>
          {" "}
          <FiEdit2 />
        </div>
        <div  className={`text-[25px] text-green-700 hover:text-green-800 transition-all ${isDisabled ? 'hidden' : 'block'} cursor-pointer`} onClick={()=> setIsDisabled(true)}>
          <BsCheck2All />
        </div>
        <div className={`text-[25px] text-red-600 hover:text-red-800 transition-all ${isDisabled ? 'hidden' : 'block'} cursor-pointer`}>
          <FiX />
        </div>
      </div>
    </div>
  );
};

export default ChangeLoadItem;

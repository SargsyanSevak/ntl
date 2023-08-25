import React, { useState } from "react";
import UISelect from "../../UI/UISelect";
import { FiEdit2 } from "react-icons/fi";
import { BsCheck2All } from "react-icons/bs";
import { FiX } from "react-icons/fi";
import Toast from "../../UI/UIToast";
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
const ChangeItems= ({
  id,
  pickup,
  delivery,
  date,
  weight,
  length,
  rate,
  comment
}: any) => {
  const [value, setValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const makeDisabled = () => {
    setIsDisabled(false);
  };
  return (
    <>
    
    
  
    <div
      className={`w-full min-h-[50px] bg-slate-300 dark:bg-slate-300 px-4 flex py-4 lg:py-4 flex-wrap lg:flex-nowrap justify-between items-center lg:gap-4 gap-y-[8px] ${isDisabled && 'mb-[5px]'}  text-sm`}
    >
      <div className="date w-full sm:w-[48%] lg:w-[200px]  h-[40px]  flex items-center mb-[1px] md:mb-0">
        <input
          type={isDisabled ? "text" : "date"}
          value={date}
          onChange={(e) => setValue(e.target.value)}
          className="w-full lg:w-full px-2 h-[40px] rounded-md border-none focus:outline-none focus:bg-blue-100"
          disabled={isDisabled}
        />
      </div>
      <div className="trailer w-full sm:w-[48%] lg:w-[200px]  h-[40px]  flex items-center -mt-[6px]  mb-[3px]">
        <UISelect data={trucks} isDisabled={isDisabled} adminVersion={true} />
      </div>
      <div className="pickup w-full sm:w-[48%] lg:w-[350px]  h-[40px]">
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
      <div className="length w-[49%] sm:w-[48%] lg:w-[100px]  h-[40px] relative overflow-hidden">
        <input
          type="text"
          value={length}
          onChange={(e) => setValue(e.target.value)}
          className="px-2 w-full h-[40px] rounded-md border-none flex justify-center items-center focus:outline-none focus:bg-blue-100"
          disabled={isDisabled}
        />
        <div className="w-10 h-10 text-[16px] rounded-md flex lg:hidden  justify-center items-center absolute right-0 bottom-0">մ³</div>
      </div>
      <div className="weight w-[49%] sm:w-[48%] lg:w-[150px]  h-[40px] relative overflow-hidden">
        <input
          type="text"
          value={weight}
          onChange={(e) => setValue(e.target.value)}
          className="px-2 w-full h-full rounded-md border-none focus:outline-none focus:bg-blue-100"
          disabled={isDisabled}
        />
        <div className="w-10 h-10 text-[16px] rounded-md flex lg:hidden  justify-center items-center absolute right-0 bottom-[1.5px]">կգ</div>
      </div>
      <div className="rate w-[49%] sm:w-[48%] lg:w-[150px]  h-[40px] relative overflow-hidden">
        <input
          type="text"
          value={rate}
          onChange={(e) => setValue(e.target.value)}
          className=" px-2 w-full h-full rounded-md border-none focus:outline-none focus:bg-blue-100"
          disabled={isDisabled}
        />
        <div className="w-10 h-10 text-[16px] rounded-md flex lg:hidden justify-center items-center absolute right-0 bottom-0">$</div>
      </div>
      <div className="status w-[49%] sm:w-[48%] lg:w-[300px]  h-[40px]  lg:-mt-4 -mt-4">
        <UISelect
          data={loadStatus}
          isDisabled={isDisabled}
          adminVersion={true}
        />
      </div>
      <div className="btns w-full sm:w-[100%]  lg:w-[80px]  h-[40px]  flex lg:items-center items-end justify-end gap-4 rounded-xl lg:mt-0 mt-[4px]">
        <div
          className={`px-4 py-2 bg-blue-500 text-white rounded-md ${isDisabled ? "block lg:hidden" : "hidden"
            }`}
          onClick={makeDisabled}
        >
          Փոփոխել
        </div>
        <div
          className={`px-4 py-2 bg-green-500 text-white rounded-md  ${isDisabled ? "hidden" : "block lg:hidden"
            }`}
          onClick={() => setIsDisabled(true)}
        >
          Պահպանել
        </div>
        <div
          className={`px-4 py-2 bg-red-500 text-white rounded-md  ${isDisabled ? "hidden" : "block lg:hidden"
            }`}
        >
          Չեղարկել
        </div>
        <div
          className={`text-[20px] ${isDisabled ? "lg:flex hidden" : "hidden"
            }  cursor-pointer bg-gray-700 hover:bg-white hover:text-black transition-all text-white w-10 h-10 rounded-full flex justify-center items-center`}
          onClick={makeDisabled}
        >
          {" "}
          <FiEdit2 />
        </div>
        <div
          className={`text-[25px] text-green-700 hover:text-green-800 transition-all ${isDisabled ? "hidden" : "lg:block hidden"
            } cursor-pointer`}
          onClick={() => setIsDisabled(true)}
        >
          <BsCheck2All />
        </div>
        <div
          className={`text-[25px] text-red-600 hover:text-red-800 transition-all ${isDisabled ? "hidden" : "lg:block hidden"
            } cursor-pointer`}
        >
          <FiX />
        </div>
      </div>
    </div>
    {
      !isDisabled &&  <div className="w-full h-24 bg-slate-300  mb-[5px] border-t-[1px] border-t-slate-400">
         <input
          type="text"
          value={comment}
          onChange={(e) => setValue(e.target.value)}
          className="bg-slate-300  px-2 w-full h-full rounded-md border-none focus:outline-none focus:bg-blue-100"
          
        />
      </div>
    }
   <Toast
        type="success"
        message="Ձեր բեռը հաջողությամբ թարմացվել է"
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
    </>
  );
};

export default ChangeItems;

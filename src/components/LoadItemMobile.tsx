import { LoadProps } from "../interfaces/LoadProps";
import { AiOutlineClockCircle, AiOutlineCalendar } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { BsRecordCircle } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { CutString, checkLengthOfValue } from "../utils/Check";
import CallOptions from "./CallOptions";
import IsClicable from "../hoc/IsClicable";
const LoadItemMobile = ({
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
  boardType,
}: any) => {
  return (
    <IsClicable isClicable={boardType==='load' ? true : false} id={id}>
      {boardType === "load" || (
        <div className="length text-[12px] absolute bottom-3 right-4  z-50 bg-[#2183d9] text-white px-4 py-2  rounded-xl lg:hidden block">
          <CallOptions contact={contact} />
        </div>
      )}
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
          <div className="length">{checkLengthOfValue(length, "մ³")}</div>
          <div className="weight">{checkLengthOfValue(weight, "կգ")}</div>
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
          <div className="rate">{checkLengthOfValue(rate, "$")}</div>
        </div>
      </div>
    </IsClicable>
  );
};

export default LoadItemMobile;

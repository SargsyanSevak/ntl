import { LoadProps } from "../interfaces/LoadProps";
import { AiOutlineClockCircle, AiOutlineCalendar } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { BsRecordCircle } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";
import LoadDesktop from "./LoadDesktop";
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
      return inputString.slice(0, 18) + "...";
    }
    return inputString;
  }
  return (
    <>
      <LoadDesktop
        id={id}
        age={age}
        date={date}
        truckType={truckType}
        loadType={loadType}
        pickup={pickup}
        delivery={delivery}
        distance={distance}
        company={company}
        contact={contact}
        length={length}
        weight={weight}
        rate={rate}
        CutString={CutString}
      />

      <Link
        to={`/dashboard/preview/${id}`}
        className="mobile lg:hidden flex bg-slate-200 dark:bg-[#0E192D] dark:text-slate-200  border-b-4 border-stone-50 sm:px-4 px-4 text-[0.9rem] md:text-[1.2rem] font-bold"
        target="_blank"
      >
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

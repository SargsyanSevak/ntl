import { HiArrowRight } from "react-icons/hi";
import CallOptions from "./CallOptions";
import { checkLengthOfValue } from "../utils/Check";
import { CutString } from "../utils/Check";
const TruckDesktop = ({
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
}: any) => {


  return (
    <div className="max-w-[2000px] lg:flex hidden">
      <div className="w-full h-[32px] bg-slate-200 dark:bg-slate-700 dark:text-slate-200  text-[13px]  flex justify-around gap-[1px] font-[400]">
        <div className="flex justify-start items-center pl-[6px] w-[50px]">
          <div>{age}</div>
        </div>
        <div className=" flex justify-start items-center pl-[6px] w-[50px]">
          <div>{date}</div>
        </div>
        <div className="flex justify-start items-center pl-[6px] w-[50px]">
          <div>{truckType}</div>
        </div>
        <div className=" flex justify-start items-center pl-[6px] w-[40px]">
          <div title={loadType}>{loadType[0].toUpperCase()}</div>
        </div>

        <div className="flex justify-start items-center pl-[6px] w-[150px]">
          <div title={pickup}>{CutString(pickup)}</div>
        </div>
        <div className=" flex justify-start items-center pl-[6px] w-[35px]">
          <div>
            <HiArrowRight />
          </div>
        </div>
        <div className=" flex justify-start items-center pl-[6px] w-[150px]">
          <div title={delivery}>{CutString(checkLengthOfValue(delivery))}</div>
        </div>
        <div className=" flex justify-start items-center pl-[6px] w-[70px]">
          <div>{checkLengthOfValue(distance,'կմ')} </div>
        </div>
        <div className=" flex justify-start items-center pl-[6px] w-[160px] text-[#1C90F3]">
          <div title={company}>{CutString(company)}</div>
        </div>
        <div className=" flex justify-start items-center pl-[6px] w-[140px]">
          <div className="cursor-pointer"><CallOptions contact={contact}/></div>
        </div>
        <div className=" flex justify-start items-center pl-[6px] w-[50px]">
          <div>{checkLengthOfValue(length,'մ³')} </div>
        </div>
        <div className=" flex justify-start items-center pl-[6px] w-[80px]">
          <div>{checkLengthOfValue(weight,'կգ')} </div>
        </div>
        <div className="flex justify-start items-center pl-[6px] w-[70px]">
          <div>{checkLengthOfValue(rate,'$')}</div>
        </div>
      </div>
    </div>
  );
};

export default TruckDesktop;
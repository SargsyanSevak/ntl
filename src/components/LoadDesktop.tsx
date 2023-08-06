import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
const LoadDesktop = ({
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
  CutString,
}: any) => {
  return (
    <div className="max-w-[1600px] lg:flex hidden">
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
          <div title={delivery}>{CutString(delivery)}</div>
        </div>
        <div className=" flex justify-start items-center pl-[6px] w-[70px]">
          <div>{distance} կմ</div>
        </div>
        <div className=" flex justify-start items-center pl-[6px] w-[160px] text-[#1C90F3]">
          <div title={company}>{CutString(company)}</div>
        </div>
        <div className=" flex justify-start items-center pl-[6px] w-[140px]">
          <div>{contact}</div>
        </div>
        <div className=" flex justify-start items-center pl-[6px] w-[50px]">
          <div>{length} մ³</div>
        </div>
        <div className=" flex justify-start items-center pl-[6px] w-[80px]">
          <div>{weight} կգ</div>
        </div>
        <div className="flex justify-start items-center pl-[6px] w-[70px]">
          <div>{rate} $</div>
        </div>
        <div className="flex justify-start items-center pl-[6px] w-[70px]">
          <Link
            to={`/dashboard/preview/${id}`}
            target="_blank"
            type="button"
            className=" font-light text-gray-200 bg-[#15558d] focus:outline-none hover:bg-blue-400 focus:ring-4 focus:ring-gray-200 rounded-xl text-[11px] px-[13px] py-[3px]  flex justify-center items-center transition-all"
          >
            ավելին
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoadDesktop;

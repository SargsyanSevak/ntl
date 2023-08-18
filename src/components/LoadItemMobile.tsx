import { LoadProps } from "../interfaces/LoadProps";
import { AiOutlineClockCircle, AiOutlineCalendar } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { BsRecordCircle } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { CutString, checkLengthOfValue } from "../utils/Check";
import CallOptions from "./CallOptions";
import IsClicable from "../hoc/IsClicable";
import { useState } from "react";
import { AnimatePresence, motion as m } from "framer-motion";
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
  comment,
  commodity,
  boardType,
}: any) => {
  const [showComment, setShowComment] = useState(false);
  const handeOpenComment = () => {
    setShowComment(!showComment);
  };
  return (
    <div className="mb-2">
      <div
        id={id}
        className={`relative  lg:hidden flex bg-slate-200 dark:bg-[#0E192D] dark:text-slate-200   border-stone-50 sm:px-4 px-4 text-[0.9rem] md:text-[1.2rem] font-bold`}
      >
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
          <div
            className="date flex flex-col justify-start items-center gap-2"
            onClick={handeOpenComment}
          >
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
      </div>
      <AnimatePresence initial={false}>
        {showComment && (
          <m.div
            className="lg:hidden flex w-full h-[150px] bg-slate-200  flex-col justify-center items-center px-2 py-4"
            // initial={{ height: 0,opacity:0 }}
            // animate={{ height: "150px",opacity:1 }}
            // transition={{ duration: 0.3, type: "spring",mass: 0.4,damping: 0, }}
            // exit={{ height: 0,opacity:0 }}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "140px" },
              collapsed: { opacity: 0, height: '0px' },
            }}
            transition={{ duration: 0.4, stiffness:400 }}
           
          >
            <m.div className="w-full h-full  flex flex-col justify-around items-center text-[12px] gap-4 dark:text-gray-100"
             variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
             transition={{ duration: 0.2 }}
            >
              {boardType === "load" && (
                <div className="commodity w-full  flex items-center rounded-xl font-bold">
                  Բեռը : <p className="font-normal pl-2">{commodity}</p>
                </div>
              )}

              <div
                className={`comment1  w-full  flex items-center   font-bold`}
              >
                Հավելյալ ինֆորմացիա :{" "}
                <p className="font-normal pl-2">{comment}</p>
              </div>
              {boardType === "load" && (
                <div className="info w-full  flex items-center  font-bold">
                  Վճարում : <p className="font-normal pl-2"></p>
                </div>
              )}
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoadItemMobile;

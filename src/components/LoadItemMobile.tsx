import { LoadProps } from "../interfaces/LoadProps";
import { AiOutlineClockCircle, AiOutlineCalendar } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { BsRecordCircle, BsArrowUpRight } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { CutString, checkLengthOfValue } from "../utils/Check";
import CallOptions from "./CallOptions";
import { useState } from "react";
import { AnimatePresence, motion as m } from "framer-motion";
import { Link } from "react-router-dom";
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
    <div className="mb-2 dark:mb-0" onClick={handeOpenComment}>
      <div
        id={id}
        className={`relative pb-[50px] dark:border-b-4 border-b-gray-500 lg:hidden flex bg-slate-200 dark:bg-[#0E192D] dark:text-slate-200   border-stone-50 sm:px-4 px-4 text-[0.9rem] md:text-[1.2rem] font-bold`}
      >
        <div
          className="length text-[12px] absolute  bottom-[20px] right-4  border-[#2183d9] z-50 border-[0.7px]  text-blue-500 dark:text-gray-300 font-bold  px-2 py-2  rounded-xl lg:hidden block"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <CallOptions contact={contact} />
        </div>
        {boardType === "load" && (
          <Link
          to={`/dashboard/preview/${id}`}
            className="length  text-[12px] absolute  bottom-[20px] left-4 border-[#2183d9]  z-50 border-[0.7px] text-black dark:text-white px-10 py-2  rounded-xl lg:hidden flex justify-center items-center gap-4 tracking-wider"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            Քարեզ{" "}
            <span>
              <BsArrowUpRight />
            </span>
          </Link>
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
      </div>
      <AnimatePresence>
        {showComment && (
          <m.div
            className="lg:hidden flex w-full bg-slate-200 dark:bg-slate-700 border-t-[1px]  border-t-gray-300 dark:border-t-0  text-black dark:text-white"
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <m.div
              variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
              transition={{ duration: 0.2 }}
              className="lg:hidden flex text-[12px] flex-col gap-4 py-4 pr-2 md:pl-[68px] pl-4"
            >
              {boardType === "load" && (
                <div className="commodity w-full  flex items-center rounded-xl font-bold">
                  Բեռը : <p className="font-normal">{commodity}</p>
                </div>
              )}
              <div
                className={`comment1  w-full  flex items-center   font-bold`}
              >
                Comment : <p className="font-normal">{comment}</p>
              </div>
              {boardType === "load" && (
                <div className="info w-full  flex items-center  font-bold">
                  Վճարում : <p className="font-normal"></p>
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

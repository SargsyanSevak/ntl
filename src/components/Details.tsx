import { BsRecordCircle } from "react-icons/bs";
import { HiLocationMarker, HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { HiMail } from "react-icons/hi";
import { FaWeight } from "react-icons/fa";
import { GiResize } from "react-icons/gi";
import { BsTruckFront } from "react-icons/bs";
import { GiPathDistance } from "react-icons/gi";
import refTruck from "../assets/ref-truck.png";
import { Map } from "./Map";
import MapTest from "./MapTest";

const Details = () => {
  return (
    <div className="w-full  bg-white">
      <div className="w-full  md:h-[100vh] bg-white p-0 md:p-4 flex gap-2 flex-wrap-reverse md:flex-nowrap">
        <div className="w-full h-screen md:h-full md:w-[600px] rounded-0 md:rounded-[50px] bg-white md:bg-slate-300 p-0 md:p-2 hidden  md:flex flex-col gap-2 justify-center items-center">
          <div className="w-full h-1/2 bg-slate-100 rounded-0 md:rounded-[50px] overflow-hidden">
            <div className="w-full h-[70%] ">
              <div className="w-full  h-full  flex items-center justify-center">
                <div className="w-1/2 h-full flex flex-col justify-center  text-blue-500 items-center text-2xl">
                  <div>
                    <BsRecordCircle />
                  </div>
                  <div className="w-[2px] h-[30%] bg-blue-500"></div>
                  <div>
                    <HiLocationMarker />
                  </div>
                </div>
                <div className="w-full h-full flex flex-col justify-center items-start ">
                  <h4>Erevan,AM</h4>
                  <h4>2300km</h4>
                  <h4>Moscow,RU</h4>
                </div>
              </div>
            </div>
            <div className="w-full h-[80px] px-4 pb-4 overflow-hidden">
              <div className="w-full h-full rounded-[50px] bg-white flex justify-around items-center pr-2 ">
                <div className="flex flex-col justify-cente items-center w-[calc(100%-80px)] ">
                  <h4 className="font-bold">NTL LOGISTICS INC</h4>
                  <h4>Suren Gasparyan</h4>
                </div>
                <div className="w-[60px] h-[60px] rounded-full bg-blue-500 flex justify-center items-center text-2xl text-white cursor-pointer">
                  <div className="">
                    <FiPhoneCall />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full  h-1/2 bg-slate-100 rounded-none  md:rounded-[50px]">
            <div className="w-full h-[200px] "></div>
            <div className="w-full h-[160px] "></div>
          </div>
        </div>

        <div className=" w-full h-[39vh] rounded-t-[50px] block md:hidden">
          <div className="flex justify-center items-center shadow-xl rounded-b-[50px] font-bold px-4">
            <div className="w-1/3 h-[60px] rounded-xl  flex justify-center items-center gap-2 ">
              <span className="text-xl font-bold text-blue-500">
                <BsRecordCircle />
              </span>{" "}
              Erevan,AM
            </div>
            <div className="w-1/4 h-[60px] rounded-xl flex justify-center items-center gap-2 ">
              <span className="text-4xl font-bold text-blue-500">
                <HiOutlineArrowNarrowRight />
              </span>{" "}
            </div>
            <div className="w-1/3 h-[60px] rounded-xl  flex justify-center items-center gap-2 ">
              <span className="text-xl font-bold text-blue-500">
                <HiLocationMarker />
              </span>{" "}
              Moscow,RU
            </div>
          </div>
          <div className="w-full h-full flex flex-col justify-start items-center rounded-t-[50px] mt-4 shadow shadow-top bg-white">
            <div className="w-full h-[60%] text-xl flex flex-wrap justify-between items-center">
              <div className="w-full h-1/2 flex justify-center items-center overflow-hidden pt-2">
                <img src={refTruck} alt="" className="w-40" />
              </div>
              <div className="flex gap-2 justify-center items-center w-1/2">
                <span>
                  <GiPathDistance />
                </span>
                2300km
              </div>
              <div className="flex gap-2 justify-center items-center w-1/2">
                <span>
                  <GiResize />
                </span>
                86մ³{" "}
              </div>
              <div className="flex gap-2 justify-center items-center w-1/2">
                <span>
                  <FaWeight />
                </span>
                20000կգ
              </div>
              <div className="flex gap-2 justify-center items-center w-1/2">
                <span>
                  <BsTruckFront />
                </span>
                տենտ
              </div>
            </div>
            <div className="w-full h-[40%] px-2 flex justify-end items-end pb-4">
              <div className="w-full h-[80px]  rounded-[50px] shadow flex">
                <div className="w-full h-full flex flex-col justify-center items-center">
                  <h4 className="font-bold text-xl">NTL LOGISTICS LLC</h4>
                  <h4>Gevorg Vardanyan</h4>
                </div>
                <div className="w-[100px] h-[80px]">
                  <div className="w-[80px] h-[80px] bg-blue-400 rounded-full text-4xl font-bold flex justify-center items-center text-white">
                    <FiPhoneCall />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[60vh]  md:h-full rounded-b-[50px] md:rounded-b-[50px]  rounded-0 md:rounded-[50px] bg-slate-300 overflow-hidden shadow-xl">
          <Map />
          {/* <MapTest /> */}
        </div>
      </div>
    </div>
  );
};

export default Details;

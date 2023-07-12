import React from "react";
import { Map } from "./Map";
import { FiPhoneCall } from "react-icons/fi";
import { HiMail } from "react-icons/hi";
import refTruck from "../assets/ref-truck.png";
const Detail = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 border">
      <div className="w-full md:w-[500px] h-[50vh] md:h-screen ">
        <div className="mobile w-full h-full relative rounded-t-[50px]">
          <div className="w-full h-40 bg-slate-300 rounded-t-[50px] border">
            <div className="flex h-[60%] justify-evenly items-center">
              <h4 className="font-bold text-2xl text-gray-700">
                NTL LOGISTICS
              </h4>
              <span className="w-[50px] h-[50px] rounded-full bg-black text-white flex justify-center items-center text-2xl">
                <HiMail />
              </span>
              <span className="w-[50px] h-[50px] rounded-full bg-blue-500 text-white flex justify-center items-center text-2xl">
                <FiPhoneCall />
              </span>
            </div>
          </div>
          <div className="w-full h-full bg-white rounded-t-[50px] shadow-2xl absolute top-24">
            <div className="w-full flex justify-center">
              <img src={refTruck} alt="" className="w-[60%]" />
            </div>
            <div className="w-full flex flex-col justify-between px-4 gap-[5px]">
              <div className="w-full h-[30px] flex gap-4">
                <h4 className="text-gray-400">Pick up</h4>
                <p className="font-semibold text-gray-600">Erevan,Am</p>
              </div>
              <div className="w-full h-[1px] bg-gray-300"></div>
              <div className="w-full h-[30px] flex gap-4">
                <h4 className="text-gray-400">Delivery</h4>
                <p className="font-semibold text-gray-600">Moscow,RU</p>
              </div>
              <div className="w-full h-[1px] bg-gray-300"></div>
              <div className="w-full h-[30px] flex gap-4">
                <h4 className="text-gray-400">Truck</h4>
                <p className="font-semibold text-gray-600">tent</p>
              </div>
              <div className="w-full h-[1px] bg-gray-300"></div>
              <div className="w-full h-[30px] flex gap-4">
                <h4 className="text-gray-400">Weight</h4>
                <p className="font-semibold text-gray-600">23.000kg</p>
              </div>
              <div className="w-full h-[1px] bg-gray-300"></div>
              <div className="w-full h-[30px] flex gap-4">
                <h4 className="text-gray-400">Value</h4>
                <p className="font-semibold text-gray-600">86մ³</p>
              </div>
              <div className="w-full h-[1px] bg-gray-300"></div>
              <div className="w-full h-[30px] flex gap-4">
                <h4 className="text-gray-400">Date</h4>
                <p className="font-semibold text-gray-600">07/07</p>
              </div>
              <div className="w-full h-[1px] bg-gray-300"></div>
              <div className="w-full h-[30px] flex gap-4">
                <h4 className="text-gray-400">Rate</h4>
                <p className="font-semibold text-gray-600">2400$</p>
              </div>
              <div className="w-full h-[1px] bg-gray-300"></div>
            </div>
          </div>
        </div>
        <div className="desktop"></div>
      </div>
      <div className=" w-full  h-[50vh] md:h-screen bg-green-400 rounded-b-[50px] overflow-hidden border">
        <Map />
      </div>
    </div>
  );
};

export default Detail;

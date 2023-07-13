import { Map } from "./Map";
import { FiPhoneCall } from "react-icons/fi";
import { FaWeight } from "react-icons/fa";
import { GiResize } from "react-icons/gi";
import { BsTruckFront } from "react-icons/bs";
import { GiPathDistance } from "react-icons/gi";
import { RiPinDistanceLine } from "react-icons/ri";
import { HiLocationMarker } from "react-icons/hi";
import { BsRecordCircle } from "react-icons/bs";
const Preview = () => {
  return (
    <>
      <div className="desktop w-full h-screen hidden md:flex relative">
        <div className="w-[300px] h-[350px] bg-[#fff] absolute top-4 left-4 z-50 rounded-2xl opacity-[80%]">
        <div className="w-[400px] h-full flex flex-col justify-between">
          <div className="w-full h-full  flex justify-center items-center">
            <div className="h-[300px] w-40  flex flex-col justify-between items-center ">
              <div className="w-12 h-12 rounded-full bg-gray-400 flex justify-center items-center text-white text-2xl">
                <BsRecordCircle />
              </div>
              <div className="w-[2px] h-[70%] bg-slate-400"></div>
              <div className="w-12 h-12 rounded-full bg-gray-400 flex justify-center items-center text-white text-2xl">
                <HiLocationMarker />
              </div>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center ">
              <div className="h-[300px] w-full  flex flex-col justify-between items-start text-[14px] py-2">
                <h4 className="text-[18px]">Erevan,AM</h4>
                <div>
                  <h4 className="text-gray-600">TOTAL TRIP MILES </h4>
                  <p>2300km</p>
                </div>
                <div>
                  <h4 className="text-gray-600">TOTAL TRIP TIME</h4>
                  <p>13 hr 13 min</p>
                </div>
                <h4 className="text-[18px]">Ekaterinburg,RU</h4>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="map w-full h-full bg-green-500">
          <Map />
        </div>
      </div>

      <div className="w-full p-4 h-screen bg-white flex flex-col justify-between md:hidden">
        <div className="map w-full h-[70%] rounded-[20px] overflow-hidden shadow mb-2">
          <Map />
        </div>
        <div className="w-full h-[30%] flex flex-col justify-around items-center gap-2">
          <div className="bg-[#edfcf7] w-full h-[180px] rounded-[20px] shadow">
            <div className="w-full flex justify-around items-center pt-2 text-xl font-bold">
              <h4>Erevan</h4>
              <span className="text-2xl">
                <GiPathDistance />
              </span>
              <h4>Moscow</h4>
            </div>
            <div className="flex flex-wrap  justify-around items-center w-full h-[70%] px-2">
              <div className="shadow-md w-[45%] h-8  rounded-lg flex justify-center items-center gap-2 text-black">
                <span>
                  <RiPinDistanceLine />
                </span>
                <p>2300km</p>
              </div>
              <div className="shadow-md w-[45%] h-8  rounded-lg flex justify-center items-center  gap-2">
                <span>
                  <BsTruckFront />
                </span>
                <p>Tent</p>
              </div>
              <div className="shadow-md w-[45%] h-8  rounded-lg flex justify-center items-center  gap-2">
                <span>
                  <GiResize />
                </span>
                <p>86մ³</p>
              </div>
              <div className=" shadow-md w-[45%] h-8  rounded-lg flex justify-center items-center  gap-2">
                <span>
                  <FaWeight />
                </span>
                <p>13000kg</p>
              </div>
            </div>
          </div>
          <div className="bg-[#edfcf7] w-full h-[70px] rounded-[20px] shadow flex justify-around items-center">
            <div className="flex flex-col justify-center items-center">
              <h4 className="font-bold text-xl">NTL LOGISTICS INC.</h4>
              <h4 className="text-gray-500">Gevorg Vardanyan</h4>
            </div>
            <div>
              <div className="w-[50px] h-[50px] rounded-full bg-[#01c07b] text-white text-xl flex justify-center items-center">
                <FiPhoneCall />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preview;

import { Map } from "./Map";
import { FiPhoneCall } from "react-icons/fi";
import { FaWeight } from "react-icons/fa";
import { GiResize } from "react-icons/gi";
import { BsTruckFront } from "react-icons/bs";
import { GiPathDistance } from "react-icons/gi";
import { RiPinDistanceLine } from "react-icons/ri";
import { HiLocationMarker } from "react-icons/hi";
import { BsRecordCircle } from "react-icons/bs";
import { IoMdArrowBack } from "react-icons/io"; 
import { Link } from "react-router-dom";

const Preview = () => {
  return (
    <>
      <div className="desktop w-full h-screen flex flex-col-reverse relative">
        <div className="w-[300px] h-[350px] bg-[#fff] absolute top-4 left-4 z-50 rounded-2xl opacity-[80%] lg:block hidden">
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
                  <h4 className="text-[18px]">Երևան</h4>
                  <div>
                    <h4 className="text-gray-600">Հեռավորությունը</h4>
                    <p>2300կմ</p>
                  </div>
                  <div>
                    <h4 className="text-gray-600">Տևողությունը</h4>
                    <p>13 ժ 13 րոպե</p>
                  </div>
                  <h4 className="text-[18px]">Եկատերինբուրգ</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to='/' className="flex justify-center items-center lg:hidden w-[50px] h-[50px] rounded-full bg-white absolute top-4 left-4 z-50 shadow-2xl">
            <IoMdArrowBack size={24} color="gray"/>
        </Link>
        <div className="map w-full h-full">
          <Map />
        </div>
      </div>
    </>
  );
};

export default Preview;

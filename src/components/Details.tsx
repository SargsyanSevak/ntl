import { BsRecordCircle } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { HiMail } from "react-icons/hi";
import { Map } from "./Map";
import MapTest from "./MapTest";

const Details = () => {
  return (
    <div className="w-full min-h-screen md:min-h-screen bg-white">
      <div className="w-full  md:h-[100vh] bg-white  p-4 flex gap-2 flex-wrap-reverse md:flex-nowrap">
        <div className="w-full h-screen md:h-full md:w-[600px] rounded-[50px] bg-white md:bg-slate-300 p-0 md:p-2  flex flex-col gap-2 justify-center items-center">
          <div className="w-full h-1/2 bg-slate-100 rounded-[50px] overflow-hidden">
            <div className="w-full h-[70%] ">
              <div className="w-full  h-full  flex items-center justify-center">
                <div className="w-1/2 h-full flex flex-col justify-center gap-2 text-blue-500 items-center text-2xl">
                  <div>
                    <BsRecordCircle />
                  </div>
                  <div className="w-[2px] h-[100px] bg-blue-500"></div>
                  <div>
                    <HiLocationMarker />
                  </div>
                </div>
                <div className="w-full h-full flex flex-col justify-center items-start gap-[45px]">
                  <h4>Erevan,AM</h4>
                  <h4>2300km</h4>
                  <h4>Moscow,RU</h4>
                </div>
              </div>
            </div>
            <div className="w-full h-[30%] px-4 pb-4 overflow-hidden">
              <div className="w-full h-full rounded-[50px] bg-white flex justify-around items-center pr-2 ">
                <div className="flex flex-col justify-cente items-center w-[calc(100%-80px)] ">
                  <h4 className="font-bold">NTL LOGISTICS INC</h4>
                  <h4>Suren Gasparyan</h4>
                </div>
                <div className="w-[60px] h-[60px] rounded-full bg-blue-500 flex justify-center items-center text-2xl text-white cursor-pointer">
                  <div className="">
                    <FiPhoneCall />
                    {/* <HiMail /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full  h-1/2 bg-slate-100 rounded-[50px]"></div>
        </div>
        <div className="w-full h-[50vh] md:h-full   rounded-[50px] bg-slate-300 overflow-hidden">
          <Map />
          {/* <MapTest /> */}
        </div>
      </div>
    </div>
  );
};

export default Details;

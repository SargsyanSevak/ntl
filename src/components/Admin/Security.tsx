import React, { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
const Security = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShow = () => setShowPassword(!showPassword);
  return (
    <div className="w-full pt-8 pl-4 pr-4 flex flex-col justify-center items-center">
      <h4 className="pb-8">Փոփոխել գաղտնաբառը</h4>
      <div className="w-full flex flex-col gap-10 items-center">
        <div className="box  md:w-1/2 w-full">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="current-email"
            placeholder="Էլ.հասցե"
            required
            className=" bg-[#f2f5fc] rounded-xl block w-full pl-[20px] py-[14px] text-gray-900    placeholder:text-gray-400   focus:ring-[#1c90f3] sm:text-sm sm:leading-6  border-[1px] border-gray-400"
          />
        </div>

        <div className="box relative md:w-1/2 w-full">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            placeholder="Ընթացիկ գաղտնաբառ"
            required
            className=" bg-[#f2f5fc] rounded-xl block w-full pl-[20px] py-[14px] text-gray-900    placeholder:text-gray-400   focus:ring-[#1c90f3] sm:text-sm sm:leading-6  border-[1px] border-gray-400"
          />
          <div
            className="absolute top-[0.9rem] right-6 text-2xl cursor-pointer text-slate-500"
            onClick={handleShow}
          >
            {
                      showPassword ?  <BiShow /> : <BiHide/>
                    }
                   
          </div>
        </div>

        <div className="box relative md:w-1/2 w-full">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            placeholder="Նոր գաղտնաբառ"
            required
            className=" bg-[#f2f5fc] rounded-xl block w-full pl-[20px] py-[14px] text-gray-900    placeholder:text-gray-400   focus:ring-[#1c90f3] sm:text-sm sm:leading-6  border-[1px] border-gray-400"
          />
          <div
            className="absolute top-[0.9rem] right-6 text-2xl cursor-pointer text-slate-500"
            onClick={handleShow}
          >
           {
                      showPassword ?  <BiShow /> : <BiHide/>
                    }
                   
          </div>
        </div>

        <div className="box relative md:w-1/2 w-full">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            placeholder="Կրկնել գաղտնաբառը"
            required
            className=" bg-[#f2f5fc] rounded-xl block w-full pl-[20px] py-[14px] text-gray-900    placeholder:text-gray-400   focus:ring-[#1c90f3] sm:text-sm sm:leading-6 border-[1px] border-gray-400"
          />
          <div
            className="absolute top-[0.9rem] right-6 text-2xl cursor-pointer text-slate-500"
            onClick={handleShow}
          >
           {
                      showPassword ?  <BiShow /> : <BiHide/>
                    }
                   
          </div>
        </div>
      </div>
      <div className=" md:w-1/2 w-full  pt-8  py-3 flex sm:flex-row-reverse flex-col justify-between  gap-8">
        <button
          type="button"
          className=" md:w-1/2 w-full rounded-2xl inline-flex justify-center items-center   py-[14px] text-white   bg-[#1c90f3] hover:bg-[#1c8ff3cd] sm:text-sm sm:leading-6 border-none transition-all"
        >
          Պահպանել
        </button>
        <button
          type="button"
          className=" md:w-1/2 w-full rounded-2xl inline-flex justify-center items-center   py-[14px] text-gray-900 bg-inherit   hover:bg-gray-400 hover:text-white sm:text-sm sm:leading-6 border-[1px] border-gray-400 transition-all"
        >
          Չեղարկել
        </button>
      </div>
    </div>
  );
};

export default Security;

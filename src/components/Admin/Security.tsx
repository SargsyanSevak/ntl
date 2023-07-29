import React, { useState } from "react";
import LogIn from "../../pages/Login";
import { BiShow } from "react-icons/bi";
const Security = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShow = () => setShowPassword(!showPassword);
  return (
    <div className="w-full pt-8 pl-4 pr-4 flex flex-col justify-center items-center">
      <h4 className="pb-8">Փոփոխել գաղտնաբառ</h4>
      <div className="w-full flex flex-col gap-10 items-center">
        <div className="box  md:w-1/2 w-full">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="current-email"
            placeholder="Էլ.հասցե"
            required
            className=" bg-[#f2f5fc] rounded-2xl block w-full pl-[20px] py-[14px] text-gray-900    placeholder:text-gray-400   focus:ring-[#1c90f3] sm:text-sm sm:leading-6 border-none"
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
            className=" bg-[#f2f5fc] rounded-2xl block w-full pl-[20px] py-[14px] text-gray-900    placeholder:text-gray-400   focus:ring-[#1c90f3] sm:text-sm sm:leading-6 border-none"
          />
          <div
            className="absolute top-[0.9rem] right-6 text-2xl cursor-pointer text-slate-500"
            onClick={handleShow}
          >
            {" "}
            <BiShow />
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
            className=" bg-[#f2f5fc] rounded-2xl block w-full pl-[20px] py-[14px] text-gray-900    placeholder:text-gray-400   focus:ring-[#1c90f3] sm:text-sm sm:leading-6 border-none"
          />
          <div
            className="absolute top-[0.9rem] right-6 text-2xl cursor-pointer text-slate-500"
            onClick={handleShow}
          >
            {" "}
            <BiShow />
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
            className=" bg-[#f2f5fc] rounded-2xl block w-full pl-[20px] py-[14px] text-gray-900    placeholder:text-gray-400   focus:ring-[#1c90f3] sm:text-sm sm:leading-6 border-none"
          />
          <div
            className="absolute top-[0.9rem] right-6 text-2xl cursor-pointer text-slate-500"
            onClick={handleShow}
          >
            {" "}
            <BiShow />
          </div>
        </div>
      </div>
      <div className="md:w-1/2 w-full pt-8 pl-4  py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm  text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
        >
          Պահպանել
        </button>
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
        >
          Չեղարկելել
        </button>
      </div>
    </div>
  );
};

export default Security;

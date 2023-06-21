import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Forgot: React.FC = () => {
  const [showEmail, setShowEmail] = useState<boolean | null>(true);
  const [isValid, setIsValid] = useState<boolean | null>(false);
  const [resetPassword, setResetPassword] = useState<boolean | null>(false);
  const navigate = useNavigate();

  const handleCheckEmail = () => {
    setShowEmail(false);
    setIsValid(true);
  };
  const handleCheckCode = () => {
    setIsValid(false);
    setResetPassword(true);
  };
  const handleChangePassword = () => {
    navigate("/login");
  };
  return (
    <section className="w-full h-screen flex justify-center items-center container p-[1rem]">
      <div className="w-[500px] h-[500px] flex flex-col justify-around items-center  overflow-hidden px-[0.4rem]">
        {showEmail && (
          <>
            <h4 className="text-2xl font-bold uppercase text-gray-700 text-center">
              Վերականգնել գաղտնաբառը
            </h4>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3178/3178283.png"
              alt="email"
              className="w-[100px] h-[100px]"
            />

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Էլ.հասցե"
              required
              className="bg-[#f2f5fc] rounded-2xl block w-full pl-[20px] py-[14px] text-gray-900    placeholder:text-gray-400  sm:text-sm sm:leading-6 border-none"
            />
            <button
              type="submit"
              onClick={handleCheckEmail}
              className="flex w-full justify-center rounded-2xl bg-[#1c90f3] px-3 py-[10px] text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
            >
              Ուղարկել
            </button>
          </>
        )}
        {isValid && (
          <>
            <h4 className="text-2xl font-bold uppercase text-gray-700 text-center">
              Վերականգնել գաղտնաբառը
            </h4>
            <img
              src="https://cdn-icons-png.flaticon.com/512/6357/6357048.png"
              alt="email"
              className="w-[100px] h-[100px]"
            />

            <input
              id="code"
              name="code"
              type="text"
              autoComplete="text"
              placeholder="Ծածկագիր"
              required
              className="bg-[#f2f5fc] rounded-2xl block w-full pl-[20px] py-[14px] text-gray-900    placeholder:text-gray-400  sm:text-sm sm:leading-6 border-none"
            />
            <button
              type="submit"
              onClick={handleCheckCode}
              className="flex w-full justify-center rounded-2xl bg-[#1c90f3] px-3 py-[20px] text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
            >
              Հաստատել
            </button>
          </>
        )}
        {resetPassword && (
          <>
            <h4 className="text-2xl font-bold uppercase text-gray-700 text-center">
              Վերականգնել գաղտնաբառը
            </h4>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2499/2499151.png"
              alt="email"
              className="w-[100px] h-[100px]"
            />

            <input
              id="code"
              name="code"
              type="password"
              autoComplete="text"
              placeholder="Գաղտնաբառ"
              required
              className="bg-[#f2f5fc] rounded-2xl block w-full pl-[20px] py-[14px] text-gray-900    placeholder:text-gray-400  sm:text-sm sm:leading-6 border-none"
            />

            <input
              id="code"
              name="code"
              type="password"
              autoComplete="text"
              placeholder="Կրկնել գաղտնաբառը"
              required
              className="bg-[#f2f5fc] rounded-2xl block w-full pl-[20px] py-[14px] text-gray-900    placeholder:text-gray-400  sm:text-sm sm:leading-6 border-none"
            />
            <button
              type="submit"
              className="flex w-full justify-center rounded-2xl bg-[#1c90f3] px-3 py-[10px] text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
              onClick={handleChangePassword}
            >
              Հաստատել
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default Forgot;

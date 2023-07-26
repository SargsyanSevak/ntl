import React from "react";
import CheckBox from "../../UI/CheckBox";
import { RiDeleteBin6Line } from "react-icons/ri";
const TeamMember = ({
  firstName,
  lastName,
  title,
  email,
  tell,
  online,
}: any) => {
  return (
    <div className="w-full min-h-20  border-b-2 border-slate-300 flex md:flex-row flex-col justify-between items-center">
      <div className="w-60 h-12 flex flex-col items-center justify-between">
        <div className="w-full flex gap-2  justify-center items-center">
          <p>{firstName}</p>
          <p>{lastName}</p>
        </div>
        <p className="text-gray-400">{email}</p>
      </div>
      <div className="w-20 h-10  flex justify-center items-center">
        <CheckBox />
      </div>
      <div className="w-20 h-10  flex justify-center items-center">
        <CheckBox />
      </div>
      <div className="w-20 h-10  flex justify-center items-center">
        <CheckBox />
      </div>
      <div className="w-20 h-10  flex justify-center items-center">
        <CheckBox />
      </div>
      <div className="w-20 h-20 flex justify-center items-center text-xl text-slate-700 cursor-pointer hover:text-slate-500 transition-all">
        <RiDeleteBin6Line />
      </div>
    </div>
  );
};

export default TeamMember;

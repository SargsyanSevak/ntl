import React from "react";
import { testload } from "../../data/testload";
import ChangeLoadItem from "./ChangeItems";
import { useTypedSelector } from "../../hooks/useTypedSelector";
const ChangeItem: React.FC = ({}) => {
  const {user} = useTypedSelector((state)=>state.user)
  return (
    <div className="relative z-40 flex flex-col bg-inherit">
      <div className="w-full h-8 bg-slate-700 px-4 lg:flex hidden justify-between items-center gap-2 text-[13px] text-gray-400 font-semibold">
        <div className="w-full sm:w-[48%] lg:w-[200px] pl-1flex items-center">
          Օր
        </div>
        <div className="w-full sm:w-[48%] lg:w-[200px] pl-1 flex items-center">
          Տ/Մ
        </div>
        <div className="w-full sm:w-[48%] lg:w-[350px] pl-1 flex items-center">
          Բարձում
        </div>
        <div className="w-full sm:w-[48%] lg:w-[350px] pl-1 flex items-center">
         {user.userType === 'customer' ? 'Բեռնաթափում' : 'Նախընտրելի ուղղություն'} 
        </div>
        <div className="w-full sm:w-[48%] lg:w-[100px] pl-1 flex items-center">
          Ծավալ
        </div>
        <div className="w-full sm:w-[48%] lg:w-[150px] pl-1 flex items-center">
          Քաշ
        </div>
        <div className="w-full sm:w-[48%] lg:w-[150px] pl-1 flex items-center">
          Գին
        </div>
        <div className="w-full sm:w-[48%] lg:w-[300px] pl-1 flex items-center">
          Կարգավիճակ
        </div>
        <div className="w-full sm:w-[48%] lg:w-[80px]"></div>
      </div>
      {testload.map((el) => (
        <ChangeLoadItem {...el} />
      ))}
    </div>
  );
};

export default ChangeItem;

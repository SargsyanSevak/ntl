import React, { useState } from "react";
import { RxUpdate } from "react-icons/rx";

const LoadItemTitle = ({boardType}:any) => {
    const [isUpdated, setIsUpdated] = useState(false);
    const handleUpdateData = () => {
        setIsUpdated(true);
        setTimeout(() => {
          setIsUpdated(false);
        }, 2000);
      };
  return (
    <div className="lg:block hidden">
      <div className="w-full h-[30px] bg-gray-300 dark:bg-[#27374D] dark:text-white text-[12px]  flex justify-around gap-[1px] font-semibold text-gray-700 mb-[2px]">
        <div className=" flex justify-start items-center pl-[12px] w-[50px] text-[14px] font-bold">
          <div title={"վերջին թարմացումը"} className="cursor-pointer">
            <span onClick={handleUpdateData}>
              <RxUpdate className={` ${isUpdated ? "animate-rotate" : ""}`} />
            </span>
          </div>
        </div>
        <div className=" flex justify-start items-center pl-[6px] w-[50px]">
          <div title={"բարձման օր"}>օր</div>
        </div>
        <div className=" flex justify-start items-center pl-[6px] w-[50px]">
          <div title={"տրանսպորտային միջոցի տեսակը"}>տ/մ</div>
        </div>
        <div className=" flex justify-start items-center pl-[6px] w-[40px]">
          <div title={"ամբողջական/հավաքական"}>Ա/Հ</div>
        </div>

        <div className=" flex justify-start items-center pl-[6px] w-[150px]">
          <div title={"բարձման վայր"}>բարձում</div>
        </div>
        <div className=" flex justify-start items-center pl-[6px] w-[35px]">
          <div></div>
        </div>
        <div className="flex justify-start items-center pl-[6px] w-[150px]">
          <div title={"բերնաթափման վայր"}>{boardType === 'load' ? 'բեռնաթափում' : 'նախընտրելի ուղղ.'} </div>
        </div>
        <div className="flex justify-start items-center pl-[6px] w-[70px]">
          <div title={"հեռավորություն"}>հեռավ.</div>
        </div>
        <div className="flex justify-start items-center pl-[6px] w-[160px]">
          <div>{boardType === 'load' ? 'պատվիրատու' : 'փոխադրող'} </div>
        </div>
        <div className=" flex justify-start items-center pl-[6px] w-[140px]">
          <div>կոնտակտ</div>
        </div>
        <div className=" flex justify-start items-center pl-[6px] w-[50px]">
          <div>ծավալ</div>
        </div>
        <div className=" flex justify-start items-center pl-[6px] w-[80px]">
          <div>քաշ</div>
        </div>
        <div className=" flex justify-start items-center pl-[6px] w-[70px]">
          <div>գին</div>
        </div>
        {
        boardType === 'load' &&    <div className="flex justify-start items-center pl-[6px] w-[70px]"></div> 
        }
        
      </div>
    </div>
  );
};

export default LoadItemTitle;

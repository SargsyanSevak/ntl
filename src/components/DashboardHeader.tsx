import React, { useState } from "react";
import Logo from "../assets/mainlogo.svg";
import Avatar from "./Avatar";
import LoginBtn from "./LoginBtn";
import ModeSwitcher from "./ModeSwitcher";

const DashboardHeader: React.FC = () => {
  const [activeUser, setActivUser] = useState<boolean>(true);

  return (
    <>
      <div className={`w-full  bg-gray-300 py-2 md:px-4 px-2 relative`}>
        <div className="flex justify-between items-center">
          <div className=" h-12 relative flex justify-start items-center overflow-hidden -ml-2">
            <img src={Logo} alt="logo" className="w-[90px] logo" />
          </div>

          <div>
            <p className="text-xl font-bold text-gray-600 md:block hidden">
              {" "}
              NTL LOAD BOARD
            </p>
          </div>
          <div
            className={`absolute ${
              activeUser
                ? "right-[150px] md:right-[160px]"
                : "right-[190px] md:right-[210px]"
            }   font-bold text-sm`}
          >
            <ModeSwitcher />
          </div>

          <div
            className={`absolute ${
              activeUser
                ? "right-[70px] md:right-[90px]"
                : "right-[110px] md:right-[130px]"
            }   font-bold text-sm`}
          >
            <ul className="flex  gap-2">
              <li className="active cursor-pointer">Հայ</li>
              <li className="cursor-pointer">Рус</li>
            </ul>
          </div>

          <div>
            {activeUser ? <Avatar showDropDown={true} setActivUser={setActivUser}/> : <LoginBtn />}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;

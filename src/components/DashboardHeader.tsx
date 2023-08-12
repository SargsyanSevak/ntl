import React, { useState } from "react";
import Logo from "../assets/mainlogo.svg";
import LogoWhite from "../assets/mainlogowhite.svg";
import Avatar from "./Avatar";
import LoginBtn from "./LoginBtn";
import ModeSwitcher from "./ModeSwitcher";
import Search from "./Search";

const DashboardHeader: React.FC = ({ isDarkMode }: any) => {
  const [activeUser, setActivUser] = useState<boolean>(true);
  const [changedMode, setIsChangedMode] = useState<boolean>(false);

  return (
    <>
      <div
        className={`w-full  bg-gray-300 dark:bg-[#0E192D] py-2 md:px-4 px-2 relative`}
      >
        <div className="flex justify-between items-center">
          <div className=" h-12 relative flex justify-start items-center overflow-hidden -ml-2">
            <img
              src={changedMode ? LogoWhite : Logo}
              alt="logo"
              className="w-[90px] logo"
            />
          </div>

          <div>
            <p className="text-xl font-bold text-gray-600 md:block hidden dark:text-white">
              {" "}
              NTL LOAD BOARD
            </p>
          </div>
          <div
            className={`absolute ${
              activeUser
                ? "right-[150px] md:right-[160px]"
                : "right-[190px] md:right-[200px]"
            }   font-bold text-sm`}
          >
            <ModeSwitcher setIsChangedMode={setIsChangedMode} />
          </div>

          <div
            className={`absolute ${
              activeUser
                ? "right-[190px] md:right-[210px]"
                : "right-[230px] md:right-[245px]"
            }   font-bold text-sm`}
          >
            <Search/>
          </div>
          <div
            className={`absolute ${
              activeUser
                ? "right-[70px] md:right-[80px]"
                : "right-[110px] md:right-[120px]"
            }   font-bold text-sm`}
          >
            <ul className="flex  gap-2 dark:text-white">
              <li className="active cursor-pointer">Հայ</li>
              <li className="cursor-pointer ">Рус</li>
            </ul>
          </div>

          <div>
            {activeUser ? (
              <Avatar showDropDown={true} setActivUser={setActivUser} />
            ) : (
              <LoginBtn />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;

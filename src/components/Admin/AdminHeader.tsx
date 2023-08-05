import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Avatar from "../Avatar";
import Logo from "../../assets/mainlogowhite.svg";
import { MdNotificationsNone } from "react-icons/md";
import AdminAside from "./AdminAside";
import { notificationsData } from "../../data/notificationData";
import { adminNavItems } from "../../constants/NavItems";
const AdminHeader: React.FC = () => {
  const [notificationCount, setNotificationCount] = useState<number>(1);
  const { pathname } = useLocation();

  const getNotificationCount = () => {
    return notificationsData.filter((el: any) => el.isOpened === false).length;
  };

  const handlePath = (path: string, to: string) => {
    if (path.length === 2) {
      return path.split("/").at(1) === to.split("/").at(1);
    } else if (path.length >= 3) {
      return path.split("/").at(2) === to.split("/").at(2);
    }
  };

  return (
    <header className="w-full h-16 bg-black  text-white mx-auto md:px-10 px-4 border-b-[0.3px] border-b-slate-500">
      <div className="z-50 relative w-full h-full flex justify-between items-center">
        <div className=" h-ful flex justify-center items-center font-bold text-xl gap-4 overflow-hidden">
          <img src={Logo} alt="logo" className="w-[90px] logo -mt-[6px]" />
        </div>
        <nav className="lg:block hidden">
          <ul className="flex w-full h-16 justify-center  items-center text-[13px]  tracking-wide	">
            {adminNavItems.map((el) => (
              <li className="px-8" key={el.title}>
                <Link
                  to={el.to}
                  className={`${
                    handlePath(pathname, el.to) ? "text-[#1C90F3]" : ""
                  }`}
                >
                  {el.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="absolute md:right-28 right-28 font-bold text-sm">
          <ul className="flex  gap-2">
            <li className="active cursor-pointer">Հայ</li>
            <li className="cursor-pointer">Рус</li>
          </ul>
        </div>
        <div className=" flex justify-center items-center gap-8 lg:gap-6">
          <Link
            to="settings/notifications"
            className="notifications relative text-2xl cursor-pointer"
          >
            {getNotificationCount() > 0 && (
              <div className="count absolute w-[15px] h-[15px] rounded-full bg-red-500 -top-[7px] -right-[6px] text-[12px] flex justify-center items-center">
                {getNotificationCount()}
              </div>
            )}

            <MdNotificationsNone />
          </Link>
          <div className="w-10 h-full lg:flex justify-center items-center hidden  relative z-50">
            <Avatar showDropDown={true} />
          </div>

          <div className="w-10 h-full flex justify-center items-center fill-white lg:hidden  relative z-50">
            <AdminAside />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;

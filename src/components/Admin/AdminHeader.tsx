import React from "react";
import { Link, useLocation } from "react-router-dom";
import Avatar from "../Avatar";
import Logo from "../../assets/mainlogowhite.svg";
import AdminAside from "./AdminAside";
const adminNavItems = [
  {
    id: 1,
    title: "Գլխավոր",
    to: "/admin",
    fullPath: "/admin",
  },
  {
    id: 2,
    title: "Ավելացնել բեռներ",
    to: "/admin/addloads",
    fullPath: "/admin/addloads",
  },
  {
    id: 3,
    title: "Փոփոխել բեռները",
    to: "/admin/changeloads",
  },
  {
    id: 4,
    title: "Կարգավորումներ",
    to: "/admin/settings",
  },
];
const AdminHeader: React.FC = () => {
  const { pathname } = useLocation();

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
        <nav className="md:block hidden">
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
        <div className=" flex justify-center items-center gap-4">
          <div className="w-10 h-full md:flex justify-center items-center hidden  relative z-50">
            <Avatar showDropDown={true} />
          </div>

          <div className="w-10 h-full flex justify-center items-center fill-white md:hidden  relative z-50">
            <AdminAside />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import Avatar from "../Avatar";
import Logo from "../../assets/logo.svg";

const adminNavItems = [
  {
    id: 1,
    title: "Admin",
    to: "/admin",
  },
  {
    id: 2,
    title: "Add loads",
    to: "/admin/addloads",
  },
  {
    id: 3,
    title: "Change loads",
    to: "/admin/changeloads",
  },
  {
    id: 4,
    title: "Settings",
    to: "/admin/settings",
  },
];
const AdminHeader = () => {
  const { pathname } = useLocation();
  return (
    <header className="w-full h-16 bg-black  text-white mx-auto md:px-10 px-4 border-b-[0.3px] border-b-slate-500">
      <div className="z-50 relative w-full h-full flex justify-between items-center">
        <div className=" h-ful flex justify-center items-center font-bold text-xl gap-4">
          <img src={Logo} alt="logo" />
          <p>NTL</p>
        </div>
        <nav className="md:block hidden">
          <ul className="flex w-full h-16 justify-center  items-center text-[15px]  tracking-wide	">
            {adminNavItems.map((el) => (
              <li className="px-8" key={el.title}>
                <Link
                  to={el.to}
                  className={`${pathname === el.to ? "text-[#1C90F3]" : ""}`}
                >
                  {el.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className=" flex justify-center items-center">
          <Avatar showDropDown={true} />
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AiOutlineTeam } from "react-icons/ai";
import { MdNotificationsNone } from "react-icons/md";
const navigation = [
  {
    id: 1,
    title: "Իմ էջը",
    to: "profile",
    icon: <CgProfile />,
  },
  {
    id: 2,
    title: "Ծանուցումներ",
    to: "notifications",
    icon: <MdNotificationsNone />,
  },
  {
    id: 3,
    title: "Teams",
    to: "teams",
    icon: <AiOutlineTeam />,
  },
];
const AsideMenu = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  
  return (
    <div className="w-[20%] py-6">
      <nav className="w-full h-full border-r-2">
        <ul className="flex flex-col">
          {navigation.map((el) => (
            <li
              className={`flex items-center gap-4 h-[60px] pl-4  ${
                pathname.includes(el.to)? "active-link" : ""
              }`}
              key={el.id}
            >
              <div className="text-[24px]">{el.icon}</div>
              <Link to={el.to}>{el.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default AsideMenu;

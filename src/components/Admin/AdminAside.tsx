import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Burger from "../../assets/burgerwhite.svg";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineHome, AiOutlineEdit } from "react-icons/ai";
import { MdPostAdd } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import Avatar from "../Avatar";
const navigation = [
  {
    id: 1,
    title: "Գլխավոր",
    to: "/admin",
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    title: "Ավելացնել բեռներ",
    to: "/admin/addloads",
    icon: <MdPostAdd />,
  },
  {
    id: 3,
    title: "Փոփոխել բեռները",
    to: "/admin/changeloads",
    icon: <AiOutlineEdit />,
  },
  {
    id: 4,
    title: "Կարգավորումներ",
    to: "/admin/settings",
    icon: <CiSettings />,
  },
];
const AdminAside:React.FC = () => {
  const { pathname } = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      handleOutsideClick(event);
    };

    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
  }, [isMenuOpen]);
  return (
    <>
      {/* Button to toggle the aside menu */}
      <button
        className=" text-white outline-none bg-inherit"
        onClick={toggleMenu}
        ref={menuRef}
      >
        {isMenuOpen ? (
          <AiOutlineClose size={36} />
        ) : (
          <img
            src={Burger}
            alt="Open Menu"
            className="menu-icon"
            style={{ width: "54px", height: "44px", marginTop: "3px" }}
          />
        )}
      </button>
      <aside
        className={`fixed top-[65px]  right-0 h-full w-[280px] bg-[#141F20] shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-200`}
      >
        <div className="p-0">
          <div className="avatar w-full h-[75px] p-4 flex  gap-4 border-b-2 border-b-gray-500">
            <Avatar />
            <p className="text-[20px] pt-[6px]">Vedi Alco</p>
          </div>
          <ul className="text-[18px] tracking-wider	 flex flex-col h-full mt-6">
            {navigation.map((el) => (
              <li className={`flex items-center gap-4 h-16 pl-4  ${pathname === el.to ? 'active-link' : ''}`} key={el.id}>
                <div className="text-[24px]">{el.icon}</div>
                <Link to={el.to}>{el.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default AdminAside;

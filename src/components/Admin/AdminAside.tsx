import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Burger from "../../assets/burgerwhite.svg";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdPostAdd } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { BsFillBoxFill } from "react-icons/bs";
import Avatar from "../Avatar";
import { useTypedSelector } from "../../hooks/useTypedSelector";


interface NavigationItem {
  id: number;
  title: string;
  to: string;
  icon: JSX.Element;
}
const navigation: NavigationItem[] = [
  {
    id: 1,
    title: "Գլխավոր",
    to: "/admin",
    icon: <AiOutlineEdit />,
  },
  {
    id: 2,
    title: `Ավելացնել բեռներ`,
    to: "/admin/additems",
    icon: <MdPostAdd />,
  },
  {
    id: 3,
    title: "Փոփոխել բեռները",
    to: "/admin/changeitems",
    icon: <AiOutlineEdit />,
  },
  {
    id: 4,
    title: "Կարգավորումներ",
    to: "/admin/settings",
    icon: <CiSettings />,
  },
];
const navigationCarrier: NavigationItem[] = [
  {
    id: 1,
    title: "Գլխավոր",
    to: "/admin",
    icon: <AiOutlineEdit />,
  },
  {
    id: 2,
    title: `Ավելացնել բեռնատարներ`,
    to: "/admin/additems",
    icon: <MdPostAdd />,
  },
  {
    id: 3,
    title: "Փոփոխել բեռնատարները",
    to: "/admin/changeitems",
    icon: <AiOutlineEdit />,
  },
  {
    id: 4,
    title: "Կարգավորումներ",
    to: "/admin/settings",
    icon: <CiSettings />,
  },
];

const AdminAside: React.FC = () => {
  const { pathname } = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navItems,setNavItems] = useState<NavigationItem[]>([])
  const menuRef = useRef<HTMLButtonElement>(null);
  const {user} = useTypedSelector((state)=>state.user)

  const detectUserType = () => {
    if (user.userType === "customer") {
      setNavItems(navigation);
      return;
    } else {
      setNavItems(navigationCarrier);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      detectUserType();
    });
  }, []);
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
      <button
        className=" text-white outline-none bg-inherit z-50"
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
        className={`fixed top-0  right-0 h-full ${user.userType === 'customer' ? 'w-[280px]' : 'w-[340px]'}  bg-[#141F20] shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-200`}
      >
        <div className="pt-12">
          <div className="avatar w-full h-[90px] p-4 flex  gap-4 border-b-2 border-b-gray-500">
            <Avatar />
            <p className="text-[20px] pt-[6px]">{user.companyName}</p>
          </div>
          <ul className="text-[18px] tracking-wider	 flex flex-col h-full mt-6">
            {navItems.map((el) => (
              <li
                className={`flex items-center gap-4 h-16 pl-4  ${
                  pathname === el.to ? "active-link" : ""
                }`}
                key={el.id}
              >
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

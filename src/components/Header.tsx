import React, { useState } from "react";
import { MobileMenu } from "./Burger";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GoSignIn } from "react-icons/go";
import Logo from "../assets/logo.svg";
import Burger from "../assets/burger.svg";
const navigation = [
  {
    name: "Գլխավոր",
    href: "/",
    current: true,
  },
  {
    name: "Մեր մասին",
    href: "https://www.youtube.com/results?search_query=navbar+with+react+and+tailwind",
    current: false,
  },
  {
    name: "Ծառայություններ",
    href: "https://www.youtube.com/results?search_query=navbar+with+react+and+tailwind",
    current: false,
  },
  {
    name: "Dashboard",
    href: "/dashboard",
    current: false,
  },
];

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <motion.header className=" w-full max-w-[1600px] mx-auto h-[100px] px-[20px] absolute top-0 right-0 left-0 z-50 text-[#9ca8cb]">
      <div className="max-w-7xl mx-auto h-full flex">
        <div className="w-1/3 md:w-[20%] h-ful flex justify-start items-center font-bold text-xl gap-4">
          <img src={Logo} alt="logo" />
          <p>NTL</p>
        </div>
        <div className="w-[] md:w-[60%] h-full  hidden md:block">
          <nav className="w-full h-full  hidden md:flex justify-evenly items-center text-sm ">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="w-2/3 md:w-[20%] h-full ">
          <div className="w-full h-full flex md:hidden justify-end items-center  text-sm gap-4 ">
            <Link to="/login" className="text-xl mr-6 block text-white">
              <GoSignIn />
            </Link>
            <img
              src={Burger}
              alt=""
              className="w-[30px]"
              onClick={handleOpenModal}
            />
            <MobileMenu
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              navigation={navigation}
            />
          </div>

          <div className=" w-full h-full hidden md:flex justify-end items-center  text-sm gap-4">
            <div className="flex md:hidden">
              <GoSignIn />
            </div>
            <Link to="/login">
              <button className="border-none outline-none">Մուտք</button>
            </Link>
            <Link to="/register">
              <button className="px-[20px] border-x-2 border-y-2 py-[10px] border-[#465B95] rounded-[100px] text-[#9ca8cb]">
                Գրանցվել
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

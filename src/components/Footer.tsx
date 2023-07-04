import React from "react";
import Logo from '../assets/logo.svg'
import LanguageSwitcher from "./LanguageSwitcher";
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
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#172755] shadow dark:bg-gray-900  max-w-[1600px] mx-auto">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex sm:items-center justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <img src={Logo} className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              NTL
            </span>
          </a>
         
          <ul className="hidden md:flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 ">
            {navigation.map((el) => (
              <li key={el.name} className="">
                <a href={el.href} className="mr-4 hover:underline md:mr-6 ">
                  {el.name}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitcher/>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 " />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {year}{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            NTL
          </a>
        
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

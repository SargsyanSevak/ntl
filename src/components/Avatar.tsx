import React, { useState } from "react";

const Avatar = () => {
  const [open, setOpen] = useState<Boolean | null>(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  let str = "Aram Petrosyan";

  const avatarWords = (fullName: string): string => {
    let fullNameArr = fullName.trim().split(" ");

    if (fullNameArr.length === 2) {
      return `${fullNameArr[0][0]}${fullNameArr[1][0]}`.toUpperCase();
    } else if (fullNameArr.length === 1) {
      return `${fullNameArr[0][0]}${fullNameArr[0][1]}`.toUpperCase();
    } else {
      return "NTL";
    }
  };

  return (
    <div className="reletive">
      <div className="w-10 h-10 bg-[#1C90F3] rounded-full cursor-pointer flex justify-center items-center font-bold text-xl text-white" onClick={handleOpen}>
        <p> {avatarWords(str)}</p>
      </div>

      {open && (
        <div className="hidden md:block absolute top-[80px] right-[20px] z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>{str}</div>
            <div className="font-medium truncate">name@flowbite.com</div>
          </div>
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="avatarButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
          </ul>
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Avatar;

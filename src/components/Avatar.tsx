import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import ModalContact from "./ContactMe";
const Avatar = ({ showDropDown, setActivUser }: any) => {
  const [open, setOpen] = useState<Boolean | null>(false);
  const [openModal, setOpenModal] = useState(false);
  const ref = useRef<any>();

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const logOutUser = () => {
    setActivUser(false);
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
  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [open]);
  return (
    <div className="reletive z-50" ref={ref}>
      <ModalContact isOpen={openModal} onClose={handleCloseModal} />
      <div
        className="w-10 h-10 bg-gray-600 dark:bg-slate-700 rounded-full cursor-pointer flex justify-center items-center font-bold text-xl text-white"
        onClick={handleOpen}
      >
        <p> {avatarWords(str)}</p>
      </div>

      {open && (
        <div
          className={`${
            showDropDown ? "block" : "hidden"
          } absolute z-20 top-[60px] right-[10px]  bg-white divide-y divide-gray-100 rounded-lg  w-44 dark:bg-gray-700 dark:divide-gray-600 cursor-pointer`}
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>{str}</div>
            <div className="font-medium truncate">name@ntluser.com</div>
          </div>
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200 "
            aria-labelledby="avatarButton"
          >
            <li>
              <Link
                to="/admin"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Իմ էջը
              </Link>
            </li>
            <li>
              <button
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={handleOpenModal}
              >
                Հետադարձ կապ
              </button>
            </li>
          </ul>
          <div className="py-1 w-full">
            <button
              className="flex w-full items-center  gap-2 cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              onClick={logOutUser}
            >
              <BiLogOut />
              Դուրս գալ
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Avatar;

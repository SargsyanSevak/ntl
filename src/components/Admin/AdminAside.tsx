import React, { useEffect, useRef, useState } from 'react';
import {AiOutlineClose } from 'react-icons/ai';
import Burger from '../../assets/burgerwhite.svg'
import { Link, useLocation } from 'react-router-dom';

const AdminAside = (adminNavItems:any) => {
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

    document.addEventListener('mousedown', handleDocumentClick);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, []);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
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
       {isMenuOpen ? <AiOutlineClose size={36} /> : (
        <img
            src={Burger}
            alt="Open Menu"
            className="menu-icon"
            style={{ width: '54px', height: '44px',marginTop:'3px' }}
          />)}
      </button>
      <aside
        className={`fixed top-[65px] right-0 h-full w-64 bg-black shadow-lg transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300`}
      >
        <div className="p-4">
          <ul>
            <li>
              <Link to='/admin'>Գլխավոր</Link>
            </li>
            <li>
              <Link to='/admin/addloads'>Ավելացնել բեռներ</Link>
            </li>
            <li>
              <Link to='/admin/changeloads'>Փոփոխել բեռները</Link>
            </li>
            <li>
              <Link to='/admin/settings'>Կարգավորումներ</Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default AdminAside;
// {
//   id: 1,
//   title: "Գլխավոր",
//   to: "/admin",
// },
// {
//   id: 2,
//   title: "Ավելացնել բեռներ",
//   to: "/admin/addloads",
// },
// {
//   id: 3,
//   title: "Փոփոխել բեռները",
//   to: "/admin/changeloads",
// },
// {
//   id: 4,
//   title: "Կարգավորումներ",
//   to: "/admin/settings",
// },
// ];
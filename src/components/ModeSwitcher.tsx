import React, { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { HiOutlineMoon } from "react-icons/hi";
const ModeSwitcher = () => {
  const [isDrkMode, setIsDarkMode] = useState<boolean>(false);
  const handleChangeMode = () =>{
    setIsDarkMode(!isDrkMode)
    // document.body.classList.toggle('dark', isDrkMode);
    // localStorage.setItem('darkMode', isDrkMode ? 'enabled' : 'disabled');
  }
 
  return (
    <div className="text-[20px]" onClick={handleChangeMode}>
      {isDrkMode ? (
        <span className="cursor-pointer text-yellow-600">
          <FiSun />
        </span>
      ) : (
        <span className="cursor-pointer text-white">
          <HiOutlineMoon />
        </span>
      )}
    </div>
  );
};

export default ModeSwitcher;

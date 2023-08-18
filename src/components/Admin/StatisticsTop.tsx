import React, { useMemo } from "react";
import { BsFillBoxFill } from "react-icons/bs";
import { GiRoad } from "react-icons/gi";
import { BsCheckAll } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const StatisticsTop: React.FC = () => {
  const {user} = useTypedSelector((state)=>state.user)

  const { pathname } = useLocation();

  const dynamicStatisticTitle = useMemo(() => {
    switch (pathname) {
      case "/admin":
        return {
          title: `Ողջույն ${user.firstName}`,
          description: "helooooooo",
        };

      case "/admin/additems":
        return {
          title: `Ավելացնել ${user.userType === 'customer' ? 'բեռներ' : 'բեռնատարներ'}`,
          description: `${user.userType === 'customer' ? 'Տեղեկացրեք բեռնափւադրողներին Ձեր հնարավոր բեռների մասին' : 'Տեղեկացրեք պատվիրատուներին Ձեր հնարավոր բեռնատարների մասին'}`,
        };

      case "/admin/changeitems":
        return {
          title: `Փոփոխել ${user.userType === 'customer' ? 'բեռները' : 'բեռնատարները'}`,
          description: `Փոփոխել ${user.userType === 'customer' ? "բեռները" : "բեռնատարները"}`,
        };

      case "/admin/settings":
        return {
          title: "See seetings",
          description: "helooooooo",
        };

      default:
        return {
          title: "Good morning ,Aram",
          description: "helooooooo",
        };
    }
  }, [pathname]);
  return (
    <div className="w-full h-[200px] md:h-[250px] bg-black text-white md:px-10 px-4 flex flex-col justify-around ">
      <div
        className="absolute inset-x-0 -top-40  transform-gpu overflow-hidden blur-3xl sm:-top-80 z-30"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/3 rotate-[30deg] bg-gradient-to-tr from-orange-300 via-green-300 to-[#1C90F3] opacity-20 sm:left-[calc(50%-20rem)] sm:w-[72.1875rem] anim"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div>
        <h4 className="md:text-[28px] text-[20px]">{dynamicStatisticTitle.title}</h4>
        <p className="text-gray-500">{dynamicStatisticTitle.description}</p>
      </div>
      <div className="statistics">
        <div className="flex justify-between md:justify-start md:items-center md:gap-10 gap-2">
          <div className="loads flex gap-2 justify-start items-center ">
            <div className="w-10 h-10 rounded-full text-orange-300 bg-gray-800 flex justify-center items-center text-xl">
              <BsFillBoxFill />
            </div>
            <div>
              <h4 className="text-[25px]">13</h4>
              <p className="text-[14px] text-gray-500">Toral loads</p>
            </div>
          </div>
          <div className="loads flex gap-2  justify-start items-center">
            <div className="w-10 h-10 rounded-full bg-gray-800 text-green-400 flex justify-center items-center text-2xl">
              <GiRoad />
            </div>
            <div>
              <h4 className="text-[25px]">13</h4>
              <p className="text-[14px] text-gray-500">On Road</p>
            </div>
          </div>
          <div className="loads flex gap-2 justify-start items-center">
            <div className="w-10 h-10 rounded-full text-[#1C90F3] bg-gray-800 flex justify-center items-center text-3xl">
              <BsCheckAll />
            </div>
            <div>
              <h4 className="text-[25px]">13</h4>
              <p className="text-[14px] text-gray-500">Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsTop;

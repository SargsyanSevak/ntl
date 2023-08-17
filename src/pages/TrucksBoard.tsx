import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import LoadMobile from "../components/LoadMobile";
import { testload } from "../data/testload";
import SortLoads from "../UI/UISort";
import { LuFilter, LuFilterX } from "react-icons/lu";
import DashboardFilter from "../components/DashboardFilter";
import LoadItemTitle from "../components/LoadItemTitle";
import LoadItemDesktop from "../components/LoadItemDesktop";

const TrucksBoard: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <section className="max-w-[2000px] h-screen mx-auto">
        <Helmet>
          <title>NTL | Բեռնատարներ</title>
        </Helmet>
        <Header />
        <div className="w-full h-10 bg-[#eaeaea] flex items-center justify-between pl-4 pr-4 border-t-[1px] dark:border-t-0 dark:bg-[#0b1c2f] dark:text-white">
          <p className="text-[14px]">{testload.length} գտնված բեռնատարներ</p>
          <div className="h-full flex items-center gap-4 relative -z-1">
            <SortLoads />
            <div
              onClick={() => setOpen(!open)}
              className="cursor-pointer text-xl font-bold"
            >
              {open ? <LuFilterX /> : <LuFilter />}
            </div>
          </div>
        </div>
        <DashboardFilter open={open} />
        <LoadItemTitle boardType='truck' />
        <LoadItemDesktop boardType='truck'/>
        <LoadMobile boardType='truck'/>
      </section>
    </>
  );
};

export default TrucksBoard;

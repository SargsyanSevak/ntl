import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import Loads from "../components/Loads";
import Loadx from "../components/LoadDesktop";

const Dashboard: React.FC = () => {
  return (
    <>
      <section className="max-w-[1600px] h-screen mx-auto">
        <DashboardHeader />
        <Loads />
      </section>
    </>
  );
};

export default Dashboard;

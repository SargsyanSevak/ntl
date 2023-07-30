import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import Loads from "../components/Loads";


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

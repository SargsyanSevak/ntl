import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import Loads from "../components/Loads";
import { Helmet } from "react-helmet";


const Dashboard: React.FC = () => {
  return (
    <>
      <section className="max-w-[1600px] h-screen mx-auto">
      <Helmet>
        <title>NTL | Բեռներ</title>
      </Helmet>
        <DashboardHeader />
        <Loads />
      </section>
    </>
  );
};

export default Dashboard;

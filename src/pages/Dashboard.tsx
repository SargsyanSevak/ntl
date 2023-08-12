import React from "react";
import Loads from "../components/Loads";
import { Helmet } from "react-helmet";
import Header from "../components/Header";



const Dashboard: React.FC = () => {
  return (
    <>
      <section className="max-w-[2000px] h-screen mx-auto">
      <Helmet>
        <title>NTL | Բեռներ</title>
      </Helmet>
        <Header />
        <Loads />
      </section>
    </>
  );
};

export default Dashboard;

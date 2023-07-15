import React from "react";
import AsideMenu from "../components/Admin/AdminHeader";
import AdminHeader from "../components/Admin/AdminHeader";
import { Outlet } from "react-router-dom";
import StatisticsTop from "../components/Admin/StatisticsTop";

const AdminPannel = () => {
  return (
    <section className="w-full">
      <div className=" mx-auto max-w-[1600px]">
        <AdminHeader />
        <StatisticsTop/>
        <Outlet />
      </div>
    </section>
  );
};

export default AdminPannel;

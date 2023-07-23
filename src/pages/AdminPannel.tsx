import React from "react";
import AdminHeader from "../components/Admin/AdminHeader";
import { Outlet, useLocation } from "react-router-dom";
import StatisticsTop from "../components/Admin/StatisticsTop";


const AdminPannel = () => {
  const { pathname } = useLocation();

  return (
    <section className="w-full">
      <div className=" mx-auto max-w-[1600px]">
        <AdminHeader />
        
        {!pathname.includes("/admin/settings") && <StatisticsTop />}
        <Outlet />
      </div>
    </section>
  );
};

export default AdminPannel;

import React from "react";
import AdminHeader from "../components/Admin/AdminHeader";
import { Outlet, useLocation } from "react-router-dom";
import StatisticsTop from "../components/Admin/StatisticsTop";
import { Helmet } from "react-helmet";

const AdminPannel = () => {
  const { pathname } = useLocation();

  return (
    <section className="w-full">
      <Helmet>
        <title>Իմ էջը</title>
      </Helmet>
      <div className=" mx-auto max-w-[2000px] bg-slate-100 dark:bg-slate-100 min-h-screen">
        <AdminHeader />
        {!pathname.includes("/admin/settings") && <StatisticsTop />}
        <Outlet />
      </div>
    </section>
  );
};

export default AdminPannel;

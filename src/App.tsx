import "./App.css";
import Home from "./pages/Home";
import { Route, Router, Routes } from "react-router-dom";
import LogIn from "./pages/Login";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";
import Dashboard from "./pages/Dashboard";
import Details from "./components/Details";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Detail from "./components/Detail";
import Preview from "./components/Preview";
function App() {
  return (
    <>
      {/* <Helmet>
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.MAP_KEY}&libraries=places`}
        />
      </Helmet> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot" element={<Forgot />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/dashboard/Preview/:id" element={<Preview />} />
      </Routes>
    </>
  );
}

export default App;

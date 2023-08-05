import "./App.css";
import { RouterProvider } from "react-router-dom";
import LogIn from "./pages/Login";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";
import Dashboard from "./pages/Dashboard";
import Preview from "./components/Preview";
import AdminPannel from "./pages/AdminPannel";
import AddLoads from "./components/Admin/AddLoads";
import ChangeLoads from "./components/Admin/ChangeLoads";
import Settings from "./components/Admin/Settings";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AdminHome from "./components/Admin/AdminHome";
import Profile from "./components/Admin/Profile";
import Notifications from "./components/Admin/Notifications";
import Teams from "./components/Admin/Teams";
import Security from "./components/Admin/Security";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin" element={<AdminPannel />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot" element={<Forgot />} />
        <Route path="/dashboard/preview/:id" element={<Preview />} />
        <Route path="/admin" element={<AdminPannel />}>
          <Route index element={<AdminHome />} />
          <Route path="addloads" element={<AddLoads />} />
          <Route path="changeloads" element={<ChangeLoads />} />
          <Route path="settings" element={<Settings />}>
            <Route index element={<Profile />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="teams" element={<Teams />} />
            <Route path="security" element={<Security />} />
          </Route>
        </Route>
      </>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;

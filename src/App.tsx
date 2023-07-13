import "./App.css";
import Home from "./pages/Home";
import { Route,Routes } from "react-router-dom";
import LogIn from "./pages/Login";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";
import Dashboard from "./pages/Dashboard";
import Preview from "./components/Preview";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot" element={<Forgot />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/dashboard/preview/:id" element={<Preview />} />
      </Routes>
    </>
  );
}

export default App;

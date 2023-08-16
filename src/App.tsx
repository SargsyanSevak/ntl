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
import TrucksBoard from "./pages/TrucksBoard";
import PrivateRoute from "./hoc/PrivateRoute";
import PublicRoute from "./hoc/PublicRoute";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          index
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/trucks"
          element={
            <PrivateRoute>
              <TrucksBoard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminPannel />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LogIn />
            </PublicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="forgot"
          element={
            <PublicRoute>
              <Forgot />
            </PublicRoute>
          }
        />
        <Route
          path="/dashboard/preview/:id"
          element={
            <PrivateRoute>
              <Preview />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminPannel />
            </PrivateRoute>
          }
        >
          <Route
            index
            element={
              <PrivateRoute>
                <AdminHome />
              </PrivateRoute>
            }
          />
          <Route
            path="addloads"
            element={
              <PrivateRoute>
                <AddLoads />
              </PrivateRoute>
            }
          />
          <Route
            path="changeloads"
            element={
              <PrivateRoute>
                <ChangeLoads />
              </PrivateRoute>
            }
          />
          <Route
            path="settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          >
            <Route
              index
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="notifications"
              element={
                <PrivateRoute>
                  <Notifications />
                </PrivateRoute>
              }
            />
            <Route
              path="teams"
              element={
                <PrivateRoute>
                  <Teams />
                </PrivateRoute>
              }
            />
            <Route
              path="security"
              element={
                <PrivateRoute>
                  <Security />
                </PrivateRoute>
              }
            />
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

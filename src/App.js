import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import axios from "axios";
import ProtectedDashboard from "./components/ProtectedDashboard";

import Dashboard from "./admindashboard/Dashboard";
import CreateDashboard from "./admindashboard/CreateDashboard";

import { useEffect } from "react";
import CourseDetails from "./components/CourseDetails";
import AdminDashboard from "./admindashboard/AdminDashboard";
import ShowAllUsers from "./admindashboard/ShowAllUsers";
import CreatePlaylist from "./admindashboard/CreatePlaylist";
import ProtectedAdmin from "./components/ProtectedAdmin";
import PageNotFound from "./pages/PageNotFound";
import { Toaster } from "react-hot-toast";
import AdminCategory from "./admindashboard/AdminCategory";
import Help from "./help/Help";
import DropDashboard from "./dropdown/DropDashboard";
import Forgetpassword from "./pages/Forget-password";
import ResetPassword from "./pages/ResetPassword";
// axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.baseURL = "http://107.22.154.213";

const App = () => {
  const [playlist, setPlaylist] = useState([]);

  const fetchPlaylist = async () => {
    try {
      const res = await axios.get("/playlist/allPlaylist");
      setPlaylist(res.data.playlist);
    } catch (err) {
      console.error(`Failed to fetch dashboards: ${err}`);
    }
  };

  useEffect(() => {
    fetchPlaylist();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Toaster />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/drop-dashboard" element={<DropDashboard />} />

            <Route element={<ProtectedAdmin />}>
              <Route path="/admin" element={<AdminDashboard />} />
              <Route
                path="/admin/createDashboard"
                element={<CreateDashboard />}
              />
              <Route path="/admin/allUsers" element={<ShowAllUsers />} />
              <Route
                path="/admin/createPlaylist"
                element={<CreatePlaylist />}
              />
              <Route path="/admin/createCategory" element={<AdminCategory />} />
            </Route>

            <Route element={<ProtectedDashboard />}>
              {playlist.map((a) => {
                return (
                  <Route
                    path={a.path}
                    element={<CourseDetails listobject={a} />}
                  />
                );
              })}
            </Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<Forgetpassword />} />
            <Route
              path="/reset-password/:id/:token"
              element={<ResetPassword />}
            />
            <Route path="/help" element={<Help />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;

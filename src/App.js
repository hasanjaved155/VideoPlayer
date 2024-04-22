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
//import CreateDashboard from "./admindashboard/CreateDashboard";

import { useEffect } from "react";
import CourseDetails from "./components/CourseDetails";
import AdminDashboard from "./admindashboard/AdminDashboard";
//import ShowAllUsers from "./admindashboard/ShowAllUsers";
//import CreatePlaylist from "./admindashboard/CreatePlaylist";
import ProtectedAdmin from "./components/ProtectedAdmin";
import PageNotFound from "./pages/PageNotFound";
import { Toaster } from "react-hot-toast";
//import AdminCategory from "./admindashboard/AdminCategory";
import Help from "./help/Help";
import DropDashboard from "./dropdown/DropDashboard";
import Forgetpassword from "./pages/Forget-password";
import ResetPassword from "./pages/ResetPassword";
import MyCourse from "./pcsPages/MyCourse";
import ProtectedUser from "./components/ProtectedUser";
import UserDashboard from "./userDashboard/UserDashboard";
import SignUpComponent from "./pcsPages/SignUpComponent";
import SignInComponent from "./pcsPages/SignInComponent";
import RegisterPCS from "./pcsPages/RegisterPCS";
import LoginPCS from "./pcsPages/LoginPCS";
import ForgetpasswordPCS from "./pcsPages/ForgetPasswordPCS";
import ResetPasswordPCS from "./pcsPages/ResetPasswordPCS";
import EnrollmentForm from "./form/EnrollmentForm";
import ProtectedEnroll from "./components/ProtectedEnroll";
import EmployeeInformation from "./pcsPages/EmployeeInformation";
import UserPCSDetails from "./pcsPages/UserPCSDetails";
import Review from "./Comment/Review";
import EnrollNow from "./TopScript/EnrollNow";
// axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.baseURL = "http://3.212.222.137";

const App = () => {
  const [playlist, setPlaylist] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [displaydown, setDropdown] = useState([]);
  const [userId, setUserId] = useState("");

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
        <Layout
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setDropdown={setDropdown}>
          <Routes>
            <Route path="/enrollnow" element={<EnrollNow />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/dashboard"
              element={<Dashboard searchTerm={searchTerm} />}
            />

            <Route
              path="/my-course"
              element={<MyCourse searchTerm={searchTerm} />}
            />
            <Route
              path="/drop-dashboard"
              element={<DropDashboard displaydown={displaydown} />}
            />

            <Route element={<ProtectedAdmin />}>
              <Route path="/admin" element={<AdminDashboard />} />
              {/* <Route
                path="/admin/createDashboard"
                element={<CreateDashboard />}
              /> */}
              {/* <Route path="/admin/allUsers" element={<ShowAllUsers />} />
              <Route path="/admin/users-pcs" element={<ShowAllUsers />} />
              <Route
                path="/admin/createPlaylist"
                element={<CreatePlaylist />}
              />
              <Route path="/admin/createCategory" element={<AdminCategory />} /> */}
            </Route>

            <Route element={<ProtectedUser />}>
              <Route path="/user" element={<UserDashboard />} />
              {/* <Route path="/user/user-details" element={<UserDetails />} /> */}
            </Route>

            <Route element={<ProtectedEnroll />}>
              <Route path="/enroll" element={<EnrollmentForm />} />
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

            <Route path="/authSignup" element={<SignUpComponent />} />
            <Route path="/authSignin" element={<SignInComponent />} />
            <Route path="/register-pcs" element={<RegisterPCS setUserId={setUserId} />} />
            {userId && <Route path="/employee" element={<EmployeeInformation userId={userId} />} />}
            {/* <Route path="/employee" element={<EmployeeInformation userId={userId} />} /> */}

            <Route path="/login-pcs" element={<LoginPCS />} />
            {/* <Route path="/user/:_id" element={<UserPCSDetails />} /> */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<Forgetpassword />} />
            <Route
              path="/forgot-password-pcs"
              element={<ForgetpasswordPCS />}
            />
            <Route
              path="/reset-password/:id/:token"
              element={<ResetPassword />}
            />
            <Route
              path="/reset-password-pcs/:id/:token"
              element={<ResetPasswordPCS />}
            />
            <Route path="/help" element={<Help />} />
            <Route path="/feedback" element={<Review />} />
            {/* <Route path="*" element={<PageNotFound />} /> */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;

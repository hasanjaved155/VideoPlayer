import React from "react";
//import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedUser = () => {
  const navigate = useNavigate();
  //const admin = useSelector(store => store.userSlice.user.role);
  //console.log(admin);

  if (!localStorage.getItem("token")) {
    return navigate("/login-pcs");
  }

  //   const user = JSON.parse(localStorage.getItem("user"));
  //console.log(user);

  //   if (user.role !== "admin") {
  //     return navigate("/dashboard");
  //   }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ProtectedUser;

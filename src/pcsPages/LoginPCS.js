import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getUserConfiguration } from "../store/userSlice";

const LoginPCS = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/authpcs/login-pcs", { email, password });
      dispatch(getUserConfiguration(res.data.user));
      //console.log(res);
      if (res && res.data.success) {
        toast.success(res.data.message);
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/dashboard");
      } else if (!res.data.success) {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      {/* component */}
      <div className="fl justify-center items-center bg-white md:ml-[400px] md:w-[1000px]">
        {/* COMPONENT CODE */}
        <div className="container mx-auto my-4 px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-bold uppercase text-xl">
                SignIn As PCS Global Employee
              </h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <div>
                  <label className="block h-2 w-28 mb-2 ml-1 md:mr-32 text-sm font-medium text-gray-900 dark:text-white">
                    Official Email I'D
                  </label>
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email"
                    name="email"
                    placeholder="Enter Official EmailId*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block h-2 mb-2 md:mr-28 mr-[29.5rem] text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="password"
                    name="password"
                    placeholder="Enter Password*"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="md:mr-72 mt-8 mr-[32rem] w-[8.2rem]">
                <Link
                  to="/forgot-password-pcs"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Forget Password
                </Link>
              </div>

              <div className="my-2 w-1/2 lg:w-1/4">
                <button
                  type="submit"
                  className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
                  style={{ border: "1px solid black" }}>
                  Login
                </button>
              </div>
              <div>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  don't have an account?{" "}
                  <Link
                    to="/register-pcs"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    SignUp As PCS Global Employee
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPCS;

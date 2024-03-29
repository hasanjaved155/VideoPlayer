import React, { useEffect, useRef, useState } from "react";
import {
  ShoppingCartIcon,
  SearchIcon,
  GlobeIcon,
  MenuIcon,
  ServerIcon,
} from "@heroicons/react/outline";

import { Link, useNavigate } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";
import toast from "react-hot-toast";
import axios from "axios";

const Navbar2 = ({ searchTerm, setSearchTerm, setDropdown }) => {
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState("");

  const [showDropdown, setShowDropdown] = useState(false);
  const [searchInputVisible, setSearchInputVisible] = useState(false);

  const [selectedDropdown, setSelectedDropdown] = useState(null);
  const [selectedSubDropdown, setSelectedSubDropdown] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const user = JSON.parse(localStorage.getItem("user"));

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryClick = (category) => {
    if (category !== "dropdown") {
      setShowDropdown(false);
    }

    setIsActive(category);
  };

  const handlelogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logout Successfully");
    navigate("/login-pcs");
  };

  const handleSearch = (event) => {
    //navigate("/dashboard");
    setSearchTerm(event.target.value);
  };

  const handleAdmin = () => {
    navigate("/admin");
    window.location.reload();
  };

  const handleUser = () => {
    navigate("/user");
    window.location.reload();
  };

  const showDropDashboard = () => {
    navigate("/drop-dashboard");
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setSelectedDropdown(null);
    setSelectedSubDropdown(null); // Reset selected sub-dropdown when main dropdown is toggled
    // setSelectedSubSubDropdown(null); // Reset selected sub-sub-dropdown when main dropdown is toggled
  };

  const toggleSubDropdown = (dropdown) => {
    if (selectedDropdown === dropdown) {
      setSelectedDropdown(null); // Close sub-dropdown if already open
    } else {
      setSelectedDropdown(dropdown); // Show sub-dropdown for the selected item
    }
    setSelectedSubDropdown(null); // Reset selected sub-dropdown when main dropdown is toggled
    // setSelectedSubSubDropdown(null); // Reset selected sub-sub-dropdown when main dropdown is toggled
  };

  const toggleSubSubDropdown = (subDropdown) => {
    if (selectedSubDropdown === subDropdown) {
      setSelectedSubDropdown(null); // Close sub-sub-dropdown if already open
    } else {
      setSelectedSubDropdown(subDropdown); // Show sub-sub-dropdown for the selected item
    }
    // setSelectedSubSubDropdown(null); // Reset selected sub-sub-dropdown when main dropdown is toggled
  };

  const toggleSearchInputVisibility = () => {
    setSearchInputVisible(!searchInputVisible);
  };

  return (
    <div>
      <div className="flex space-x-4 bg-white h-[74px] w-[45rem] md:w-full shadow-lg text-center justify-between items-center px-4">
        <div>
          <MenuIcon
            className="h-6 ml-2 absolute w-6 md:hidden"
            onClick={toggleSidebar}
          />
        </div>
        <div
          ref={sidebarRef}
          className={`md:hidden bg-gray-50 absolute rounded-md w-[18rem] h-[34rem] mb-24 flex flex-col mt-[43rem] z-40 ${
            isOpen ? "block" : "hidden"
          }`}>
          <h2 className="md:hidden text-3xl mr-14 mt-2 font-bold">
            <Link to="/">Learning PCS</Link>
          </h2>

          {!localStorage.getItem("token") && (
            <div className="md:hidden flex mt-5 flex-col pr-4 space-x-4 justify-end">
              <button
                className={`border border-black ml-4 h-10 text-sm font-bold w-20 hover:bg-[#f5f5f5] text-gray-900  ${
                  isActive === "signin" ? "bg-slate-100" : ""
                }`}
                onClick={() => handleCategoryClick("signin")}>
                <Link to="/authSignin">Sign In</Link>
              </button>
              <button
                className={`border mt-2 bg-black text-white border-black h-10 text-sm font-bold w-20 `}>
                <Link to="/authSignup">Sign Up</Link>
              </button>
            </div>
          )}

          <h3
            className={`md:hidden mr-52 ml-6 mt-4 text-sm block hover:bg-slate-100 text-gray-900 dark:text-white duration-200 ${
              isActive === "dropdown" ? "bg-slate-100" : ""
            }`}
            onClick={() => handleCategoryClick("dropdown")}>
            <Dropdown
              setDropdown={setDropdown}
              showDropDashboard={showDropDashboard}
              showDropdown={showDropdown}
              selectedDropdown={selectedDropdown}
              selectedSubDropdown={selectedSubDropdown}
              toggleDropdown={toggleDropdown}
              toggleSubDropdown={toggleSubDropdown}
              toggleSubSubDropdown={toggleSubSubDropdown}
            />
          </h3>
          <h3
            className={` text-sm lg:block mr-[10.5rem] mt-5 md:hidden  hover:bg-slate-100 text-gray-900 dark:text-white duration-200 ${
              isActive === "dashboard" ? "bg-slate-100" : ""
            }`}
            onClick={() => handleCategoryClick("dashboard")}>
            <Link to="/dashboard">All Courses</Link>
          </h3>
          {user?.employeeId && (
            <h3
              className={` text-sm lg:block  mr-[10.5rem] mt-5 hover:bg-slate-100 text-gray-900 dark:text-white duration-200 ${
                isActive === "myCourse" ? "bg-slate-100" : ""
              }`}
              onClick={() => handleCategoryClick("myCourse")}>
              <Link to="/my-course">My Courses</Link>
            </h3>
          )}
          <div className="tooltip mt-2" data-tip="Need Help!!">
            <button
              className={` btn mr-44 text-black ${
                isActive === "help" ? "text-slate-600" : ""
              }`}
              onClick={() => handleCategoryClick("help")}>
              <Link to="/help">Help-Desk</Link>
            </button>
          </div>
        </div>
        <h2 className=" hidden md:block text-3xl font-bold">
          <Link to="/">Learning PCS</Link>
        </h2>
        <h3
          className={`hidden text-sm md:block hover:bg-slate-100 text-gray-900 dark:text-white duration-200 ${
            isActive === "dropdown" ? "bg-slate-100" : ""
          }`}
          onClick={() => handleCategoryClick("dropdown")}>
          <Dropdown
            setDropdown={setDropdown}
            showDropDashboard={showDropDashboard}
            showDropdown={showDropdown}
            selectedDropdown={selectedDropdown}
            selectedSubDropdown={selectedSubDropdown}
            toggleDropdown={toggleDropdown}
            toggleSubDropdown={toggleSubDropdown}
            toggleSubSubDropdown={toggleSubSubDropdown}
          />
        </h3>
        <form className="hidden bg-[#f8fafb] md:flex border border-black rounded-3xl flex-1 h-12 items-center">
          <SearchIcon className="h-5 w-5 mx-4 text-gray" />
          <input
            type="text"
            placeholder="Search For Anything"
            className={`bg-transparent text-sm outline-none `}
            value={searchTerm}
            onChange={handleSearch}
          />
        </form>
        <h3
          className={`hidden text-sm lg:block md:hidden  hover:bg-slate-100 text-gray-900 dark:text-white duration-200 ${
            isActive === "dashboard" ? "bg-slate-100" : ""
          }`}
          onClick={() => handleCategoryClick("dashboard")}>
          <Link to="/dashboard">All Courses</Link>
        </h3>
        {user?.employeeId && (
          <h3
            className={`hidden text-sm lg:block hover:bg-slate-100 text-gray-900 mr-4 dark:text-white duration-200 ${
              isActive === "myCourse" ? "bg-slate-100" : ""
            }`}
            onClick={() => handleCategoryClick("myCourse")}>
            <Link to="/my-course">My Courses</Link>
          </h3>
        )}
        <div className=" hidden md:block tooltip mt-2" data-tip="Need Help!!">
          <button
            className={` btn mr-7 text-black ${
              isActive === "help" ? "text-slate-600" : ""
            }`}
            onClick={() => handleCategoryClick("help")}>
            <Link to="/help">Help-Desk</Link>
          </button>
        </div>
        <div className="flex gap-3">
          <SearchIcon
            className="h-6 w-6 ml-[18rem] absolute mt-5 text-gray-400 md:hidden"
            onClick={toggleSearchInputVisibility}
          />
          <div className="flex md:hidden mt-[4.2rem] absolute z-10">
            <div>
              <div>
                <input
                  type="text"
                  className={`${
                    !searchInputVisible ? "hidden" : ""
                  } block px-4 py-2 -mb-4 text-xl font-medium text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-500`}
                  placeholder="Type something..."
                  value={searchTerm}
                  onChange={handleSearch}
                  style={{ width: "34rem" }}
                />
              </div>
            </div>
          </div>

          <ShoppingCartIcon className="hidden md:block h-6 w-6" />
          <ShoppingCartIcon className=" md:hidden h-6 w-6 mt-5 ml-[32rem]" />
        </div>

        {!localStorage.getItem("token") ? (
          <div className="hidden md:flex pr-4 space-x-4 justify-end">
            <button
              className={`border border-black h-10 text-sm font-bold w-20 hover:bg-[#f5f5f5] text-gray-900  ${
                isActive === "signin" ? "bg-slate-100" : ""
              }`}
              onClick={() => handleCategoryClick("signin")}>
              <Link to="/authSignin">Sign In</Link>
            </button>
            <button
              className={`border bg-black text-white border-black h-10 text-sm font-bold w-20 `}>
              <Link to="/authSignup">Sign Up</Link>
            </button>
            {/* <button className="border border-black w-10 flex items-center justify-center hover:bg-[#f5f5f5]">
              <GlobeIcon className="h-5 w-5" />
            </button> */}
          </div>
        ) : (
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar">
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content rounded-full w-10">
                    <span className="text-xl">
                      {(user?.name && user?.name.slice(0, 1)) ||
                        (user?.firstName && user?.firstName.slice(0, 1))}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="mr-1 -mb-10 md:mb-1">
                  {user?.name || user?.firstName + " " + user?.lastName}
                </h1>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <a href="/#" className="justify-between">
                    Profile
                    <span className="badge">{user.role}</span>
                  </a>
                </li>
                <li>
                  {user.role === "admin" ? (
                    <div
                      className="text-gray-600 dark:text-gray-500 hover:text-xl duration-300"
                      onClick={handleAdmin}>
                      Admin Dashboard
                    </div>
                  ) : (
                    <div
                      className="text-gray-600 dark:text-gray-500 hover:text-xl duration-300"
                      onClick={handleUser}>
                      User Dashboard
                    </div>
                  )}
                </li>
                <li>
                  {" "}
                  <div
                    className="text-blue-600 dark:text-blue-500  hover:text-xl cursor-pointer duration-300"
                    onClick={handlelogout}>
                    Logout
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar2;

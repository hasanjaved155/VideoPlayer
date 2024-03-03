import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getFilterData } from "../store/dashboardSlice";
import axios from "axios";
import Dropdown from "../dropdown/Dropdown";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [allData, setAllData] = useState([]);
  const [isActive, setIsActive] = useState("");
  const [searchInputVisible, setSearchInputVisible] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedDropdown, setSelectedDropdown] = useState(null);
  const [selectedSubDropdown, setSelectedSubDropdown] = useState(null);

  const user = JSON.parse(localStorage.getItem("user"));

  const toggleSearchInputVisibility = () => {
    setSearchInputVisible(!searchInputVisible);
  };

  const handleCategoryClick = (category) => {
    if (category !== "dropdown") {
      setShowDropdown(false);
    }
    setSearchQuery("");
    dispatch(getFilterData(allData));
    setIsActive(category);
    setSearchInputVisible(false);
  };

  const fetchData = async () => {
    try {
      const res = await axios.get("/dashboard/get-dashboard");
      setAllData(res.data.dashboards);
    } catch (err) {
      toast.error(`Failed to fetch dashboards: ${err}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlelogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logout Successfully");
    navigate("/login");
  };

  const handleSearch = (event) => {
    setSearchQuery(() => {
      const newSearchQuery = event.target.value;

      const filteredData = allData.filter((data) => {
        return data.name.toLowerCase().includes(newSearchQuery.toLowerCase());
      });

      dispatch(getFilterData(filteredData));

      return newSearchQuery;
    });
  };

  const handleAdmin = () => {
    navigate("/admin");
    window.location.reload();
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    dispatch(getFilterData(allData));
  };

  // const [selectedSubSubDropdown, setSelectedSubSubDropdown] = useState(null);

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

  return (
    <Fragment>
      <div className="fixed w-full top-0 left-0 border-b-2 z-[999] bg-white">
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse">
              <img
                src="https://www.pcsglobal.in/assets/images/logo.jpg"
                className=""
                alt=""
              />
            </Link>
            <div className="max-w-screen-xl px-4 py-3 mx-auto ml-10">
              <div className="flex items-center">
                <ul className="flex flex-row font-medium mt-0 space-x-6 rtl:space-x-reverse text-sm">
                  <li
                    className={` hover:bg-slate-100 text-gray-900 dark:text-white duration-200 text-xl ${
                      isActive === "dropdown" ? "bg-slate-100" : ""
                    }`}
                    onClick={() => handleCategoryClick("dropdown")}>
                    <div style={{ display: "block" }}>
                      <Dropdown
                        showDropdown={showDropdown}
                        selectedDropdown={selectedDropdown}
                        selectedSubDropdown={selectedSubDropdown}
                        toggleDropdown={toggleDropdown}
                        toggleSubDropdown={toggleSubDropdown}
                        toggleSubSubDropdown={toggleSubSubDropdown}
                      />
                    </div>
                  </li>
                  <li
                    className={` hover:bg-slate-100 text-gray-900 dark:text-white duration-200 text-xl ${
                      isActive === "team" ? "bg-slate-100" : ""
                    }`}
                    onClick={() => handleCategoryClick("team")}>
                    <Link to="/team">Team</Link>
                  </li>

                  <li
                    className={` hover:bg-slate-100 text-gray-900 dark:text-white duration-200 text-xl ${
                      isActive === "dashboard" ? "bg-slate-100" : ""
                    }`}
                    onClick={() => handleCategoryClick("dashboard")}>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="bg-transparent border-0 p-0 focus:outline-none"
                      onClick={toggleSearchInputVisibility}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`w-6 h-8  hover:text-blue-400 text-gray-900 dark:text-white duration-200 text-xl ${
                          isActive === "search" ? "text-slate-500" : ""
                        }`}
                        onClick={() => handleCategoryClick("search")}>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              {!localStorage.getItem("token") ? (
                <div
                  div
                  className="flex items-center space-x-6 rtl:space-x-reverse">
                  {/* <Link to="tel:5541251234" className="text-sm  text-gray-500 dark:text-white hover:underline">(555) 412-1234</Link> */}
                  <Link
                    to="/register"
                    className="text-blue-600 dark:text-blue-500 text-xl hover:underline">
                    Register
                  </Link>
                  <Link
                    to="/login"
                    className="text-blue-600 dark:text-blue-500 text-xl hover:underline">
                    Login
                  </Link>
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
                            {user.name.slice(0, 1)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h1>{user?.name}</h1>
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
                        {user.role === "admin" && (
                          <div
                            className="text-gray-600 dark:text-gray-500 hover:text-xl duration-300"
                            onClick={handleAdmin}>
                            Admin Dashboard
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
          <div className="flex items-center justify-center gap-2 mb-1 z-10">
            <div>
              <div className="relative">
                <input
                  type="text"
                  className={`${
                    !searchInputVisible ? "hidden" : ""
                  } block px-4 py-2 mt-2 text-xl font-medium text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-500`}
                  placeholder="Type something..."
                  value={searchQuery}
                  onChange={handleSearch}
                  style={{ width: "900px" }}
                />
                {searchInputVisible && (
                  <button onClick={handleClearSearch}>
                    <svg
                      className="absolute right-0 top-4 transform -translate-y-1 mr-2 hover:text-red-400"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      {"{"}" "{"}"}
                      <path stroke="none" d="M0 0h24v24H0z" />
                      {"{"}" "{"}"}
                      <line x1={18} y1={6} x2={6} y2={18} />
                      {"{"}" "{"}"}
                      <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

export default Navbar;

//const allData = useSelector((store) => store.dashboardSlice.allData);
//const admin = useSelector(store => store.userSlice.user.role);

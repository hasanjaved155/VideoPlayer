import React, { useState } from "react";
import { Disclosure, Menu } from '@headlessui/react';
import { ShoppingCartIcon, SearchIcon, MenuIcon } from '@heroicons/react/outline';
import Dropdown1 from '../dropdown/Dropdown1';
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import images from "../images/pcs logo.png";
import Dropdown from "../dropdown/Dropdown";

const Navbar3 = ({ searchTerm, setSearchTerm, setDropdown }) => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [showPortal, setShowPortal] = useState(false);
    const [searchInputVisible, setSearchInputVisible] = useState(false);
    const [selectedDropdown, setSelectedDropdown] = useState(null);
    const [selectedSubDropdown, setSelectedSubDropdown] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleAvatar = () => {
        setIsOpen(!isOpen); // Toggle the state between true and false
    };

    const user = JSON.parse(localStorage.getItem("user"));

    const navigation = [
        // { name: 'All Courses', to: '/dashboard', current: false },
        ...(user?.employeeId
            ? [{ name: 'My Courses', to: '/my-course', current: false }]
            : []
        ),
        { name: 'Be an Instructor', to: '/teach', current: false },
        { name: 'Drop your ideas', to: '/feedback', current: false },
        { name: 'Help', to: "/help", current: false },

    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    const handleCategoryClick = (category) => {
        setIsActive(category);
    };

    const handlelogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        toast.success("Logout Successfully");
        navigate("/authSignin");
    };

    const handleSearch = (event) => {
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

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSearchInputVisibility = () => {
        setSearchInputVisible(!searchInputVisible);
    };

    return (
        <nav className="bg-slate-50">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex items-center sm:hidden">
                        <button
                            className="p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
                            onClick={toggleMenu}
                        >
                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start">
                        <Link to='/' className="flex-shrink-0 items-center">
                            <img
                                className="h-24 w-24"
                                src={images}
                                alt="Your Company"
                            />
                        </Link>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4 items-center">
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
                                <form className="relative h-9 w-80 items-center flex rounded-full bg-slate-300 p-1 text-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <SearchIcon className="h-5 mx-2" />
                                    <input
                                        type="text"
                                        placeholder="Search For Anything"
                                        className="bg-transparent text-gray-800 text-sm outline-none"
                                        value={searchTerm}
                                        onChange={handleSearch}
                                    />
                                </form>
                                <Link to='/dashboard' className={`px-3 py-2 text-sm font-medium ${false ? 'text-gray-900' : 'text-gray-800 hover:text-white hover:bg-gray-700 rounded-md'
                                    }`}>All Course</Link>
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.to}
                                        className={`px-3 py-2 text-sm md:hidden lg:block font-medium ${item.current ? 'text-gray-900' : 'text-gray-800 hover:text-white hover:bg-gray-700 rounded-md'
                                            }`}
                                        onClick={() => handleCategoryClick(item.name)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-end space-x-6 sm:ml-6 sm:space-x-4">
                        <button
                            type="button"
                            className="p-1 rounded-full text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:text-green-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-700"
                        >
                            <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                        {!localStorage.getItem("token") ? (
                            <div className="flex space-x-4">
                                <Link
                                    to="/authSignin"
                                    className={`px-3 py-2 text-sm hidden  md:block lg:block font-bold bg-white border border-black rounded hover:bg-gray-200 text-gray-900`}
                                    onClick={() => handleCategoryClick("signin")}
                                >
                                    Sign In
                                </Link>
                                <Link
                                    to="/authSignup"
                                    className={`px-3 py-2 text-sm hidden md:block lg:block font-bold bg-black text-white rounded hover:bg-gray-800`}
                                >
                                    Sign Up
                                </Link>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-6 rtl:space-x-reverse">
                                <div className="dropdown dropdown-end">
                                    <div
                                        tabIndex={0}
                                        role="button"
                                        className="btn btn-ghost btn-circle avatar"
                                        onClick={toggleAvatar}
                                    >
                                        <div className="avatar placeholder">
                                            <div className="bg-neutral text-neutral-content rounded-full w-10">
                                                <span className="text-xl">
                                                    {(user?.name && user.name.slice(0, 1)) ||
                                                        (user?.firstName && user.firstName.slice(0, 1))}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {isOpen && ( // Render the dropdown only if isOpen is true
                                        <ul
                                            tabIndex={0}
                                            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                                        >
                                            <li>
                                                <a href="/#" className="flex justify-between">
                                                    Name
                                                    <span className="badge">
                                                        {user?.name || `${user?.firstName} ${user?.lastName}`}
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/#" className="flex justify-between">
                                                    Role
                                                    <span className="badge">{user?.role}</span>
                                                </a>
                                            </li>
                                            <li>
                                                {user?.role === 'admin' ? (
                                                    <div
                                                        className="text-gray-600 dark:text-gray-500 hover:text-xl cursor-pointer duration-300"
                                                        onClick={handleAdmin}
                                                    >
                                                        Admin Dashboard
                                                    </div>
                                                ) : (
                                                    <div
                                                        className="text-gray-600 dark:text-gray-500 hover:text-xl cursor-pointer duration-300"
                                                        onClick={handleUser}
                                                    >
                                                        User Dashboard
                                                    </div>
                                                )}
                                            </li>
                                            <li>
                                                <div
                                                    className="text-blue-600 dark:text-blue-500 hover:text-xl cursor-pointer duration-300"
                                                    onClick={handlelogout}
                                                >
                                                    Logout
                                                </div>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                            </div>

                        )}
                    </div>


                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {!localStorage.getItem('token') && (
                            <div className="flex justify-around">
                                <Link
                                    to="/authSignin"
                                    className={`border border-black h-10 rounded flex items-center justify-center text-sm font-bold w-20 hover:bg-[#f5f5f5] text-gray-900 ${isActive === 'signin' ? 'bg-slate-100' : ''
                                        }`}
                                    onClick={() => handleCategoryClick('signin')}
                                >
                                    Sign In
                                </Link>
                                <Link
                                    to="/authSignup"
                                    className="border bg-black text-white rounded flex items-center justify-center border-black h-10 text-sm font-bold w-20"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        )}
                        <div onClick={() => handleCategoryClick('dropdown')}>
                            <Dropdown1
                                setDropdown={setDropdown}
                                showDropDashboard={showDropDashboard}
                                showDropdown={showDropdown}
                                selectedDropdown={selectedDropdown}
                                selectedSubDropdown={selectedSubDropdown}
                                toggleDropdown={toggleDropdown}
                                toggleSubDropdown={toggleSubDropdown}
                                toggleSubSubDropdown={toggleSubSubDropdown}
                            />
                        </div>
                        <Link to='/dashboard' className={`px-3 py-2 text-sm font-medium ${false ? 'text-gray-900' : 'text-gray-800 hover:text-white hover:bg-gray-700 block rounded-md px-3 py-2 text-base font-medium'
                            }`}>All Course</Link>
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.to}
                                className={`px-3 py-2 text-sm font-medium ${item.current ? 'text-gray-900' : 'text-gray-800 hover:text-white hover:bg-gray-700 block rounded-md px-3 py-2 text-base font-medium'
                                    }`}
                                onClick={() => handleCategoryClick(item.name)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar3;

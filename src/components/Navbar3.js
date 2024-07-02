import React, { useEffect, useState } from "react";
// import { Disclosure, Menu } from '@headlessui/react';
import { ShoppingCartIcon, SearchIcon, MenuIcon } from '@heroicons/react/outline';
import Dropdown1 from '../dropdown/Dropdown1';
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import images from "../images/pcs logo.png";
import Dropdown from "../dropdown/Dropdown";
import axios from "axios";

const Navbar3 = ({ searchTerm, setSearchTerm, setDropdown, cartLength, cartGeneralLength, isInstructor, setInstructor }) => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    // const [showPortal, setShowPortal] = useState(false);
    const [searchInputVisible, setSearchInputVisible] = useState(false);
    const [selectedDropdown, setSelectedDropdown] = useState(null);
    const [selectedSubDropdown, setSelectedSubDropdown] = useState(null);
    const [place, setPlace] = useState('Search For Anything')
    const [isOpen, setIsOpen] = useState(false);

    const user = JSON.parse(localStorage.getItem('user'));
    const checkInstructorStatus = async () => {
        try {
            const res = await axios.get(`/teach/checkInstructor/${user?.email}`);
            if (res?.data && res?.data?.success) {
                setInstructor(true);

            } else {
                setInstructor(false);

            }
        } catch (error) {
            // toast.error('Fill the form of instructor');
        }
    };


    const getInitials = (name) => {
        if (!name) return '';

        const nameArray = name.split(' ');
        if (nameArray.length === 1) {
            return nameArray[0].slice(0, 1).toUpperCase();
        }

        return nameArray[0].slice(0, 1).toUpperCase() + nameArray[1].slice(0, 1).toUpperCase();

    };

    useEffect(() => {
        // Check if both token and user exist in local storage
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');

        if (!(token && user)) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        }

        checkInstructorStatus();

    }, []);




    const toggleAvatar = () => {
        setIsOpen(!isOpen); // Toggle the state between true and false
    };



    const navigation = [
        // { name: 'All Courses', to: '/dashboard', current: false },
        ...(user?.employeeId
            ? [{ name: 'My Courses', to: '/my-course', current: false }]
            : []
        ),
        { name: isInstructor ? "Instructor" : 'Be an Instructor', to: '/teach', current: false },
        // { name: 'Drop your ideas', to: '/feedback', current: false },
        { name: 'Help', to: "/help", current: false },

    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    const handleCategoryClick = (category) => {
        setIsActive(category);
        // setShowDropdown(false);
    };

    const handlelogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setInstructor(false)
        toast.success("Logout Successfully");
        navigate("/authSignin");
    };

    const handleSearch = (event) => {
        event.preventDefault();
        const inputValue = event.target.value || '';
        navigate('/dashboard');
        setPlace(inputValue.trim());

        if (inputValue.trim() === '') {
            setPlace("Search For Anything");
        }

    };

    const handleAdmin = () => {
        navigate("/admin");
        setIsOpen(!isOpen);
        // window.location.reload();
    };

    const handleUser = () => {
        navigate("/user");
        setIsOpen(!isOpen);
        // window.location.reload();
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
                        <Link to='/' className="flex-shrink-0 items-center"
                            onClick={() => setShowDropdown(false)}>
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
                                <form onSubmit={handleSearch} className="relative h-9 w-80 items-center flex rounded-full bg-slate-300 p-1 text-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <SearchIcon className="h-5 mx-2" />
                                    <input
                                        type="text"
                                        placeholder={place}
                                        className="bg-transparent text-gray-800 text-sm outline-none"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        onClick={() => setShowDropdown(false)}
                                    // onSubmit={handleSearch}
                                    />
                                </form>
                                <Link to='/dashboard' className={`px-3 py-2 text-sm font-medium ${false ? 'text-gray-900' : 'text-gray-800 hover:text-white hover:bg-gray-700 rounded-md'
                                    }`}
                                    onClick={() => {
                                        handleCategoryClick("dashboard");
                                        setShowDropdown(false);
                                        setSearchTerm('')
                                    }
                                    }
                                >All Course</Link>
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.to}
                                        className={`px-3 py-2 text-sm md:hidden lg:block font-medium ${item.current ? 'text-gray-900' : 'text-gray-800 hover:text-white hover:bg-gray-700 rounded-md'
                                            }`}
                                        onClick={() => {
                                            handleCategoryClick(item.name);
                                            setShowDropdown(false);
                                        }
                                        }
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-end space-x-6 sm:ml-6 sm:space-x-4"
                        onClick={() => setShowDropdown(false)}>

                        {user && !user?.employeeId ? (<div className="flex items-center"><Link to='/cartgeneral'
                            type="button"
                            className="p-2 rounded-full  text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:text-green-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-700"
                        >

                            <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                        </Link> <span className="bg-red-600 border-red-800 h-6 w-6 ml-[-5px] font-semibold text-white rounded-full">
                                {cartGeneralLength}
                            </span></div>

                        ) : (<div className="flex items-center"><Link to='/cart'
                            type="button"
                            className="p-2 rounded-full  text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:text-green-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-700"
                        >

                            <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                        </Link> <span className="bg-red-600 border-red-800 h-6 w-6 ml-[-5px] font-semibold text-white rounded-full">
                                {cartLength}
                            </span></div>)}


                        {!localStorage.getItem("token") ? (
                            <div className="flex space-x-4">
                                <Link
                                    to="/authSignin"
                                    className={`px-3 py-2 text-sm hidden  md:block lg:block font-bold border border-black rounded hover:bg-gray-200 text-gray-900 ${isActive === 'signin' ? 'bg-slate-100' : ''}`}
                                    onClick={() => {
                                        handleCategoryClick("signin");
                                        setShowDropdown(false);
                                    }}
                                >
                                    Sign In
                                </Link>
                                <Link
                                    to="/authSignup"
                                    className={`px-3 py-2 text-sm hidden md:block lg:block font-bold bg-black text-white rounded hover:bg-gray-800`}
                                    onClick={() => setShowDropdown(false)}
                                >
                                    Sign Up
                                </Link>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-6 rtl:space-x-reverse"
                            >
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
                                                    {(user?.name && getInitials(user?.name)) ||
                                                        (user?.firstName && user.firstName.slice(0, 1) + user.lastName.slice(0, 1))}
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

            {
                isMenuOpen && (
                    <div className="md:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {!localStorage.getItem('token') && (
                                <div className="flex justify-around">
                                    <Link
                                        to="/authSignin"
                                        className={`border border-black h-10 rounded flex items-center justify-center text-sm font-bold w-20 hover:bg-[#f5f5f5] text-gray-900 ${isActive === 'signin' ? 'bg-slate-100' : ''
                                            }`}
                                        onClick={() => {
                                            handleCategoryClick('signin');
                                            setShowDropdown(false);
                                        }}
                                    >
                                        Sign In
                                    </Link>
                                    <Link
                                        to="/authSignup"
                                        className="border bg-black text-white rounded flex items-center justify-center border-black h-10 text-sm font-bold w-20"
                                        onClick={() => setShowDropdown(false)}
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
                                }`}
                                onClick={() => setShowDropdown(false)}
                            >All Course</Link>
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    className={`px-3 py-2 text-sm font-medium ${item.current ? 'text-gray-900' : 'text-gray-800 hover:text-white hover:bg-gray-700 block rounded-md px-3 py-2 text-base font-medium'
                                        }`}
                                    onClick={() => {
                                        handleCategoryClick(item.name);
                                        setShowDropdown(false)
                                    }}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )
            }
        </nav>
    )
}

export default Navbar3;

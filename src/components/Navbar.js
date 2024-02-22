import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { getFilterData } from '../store/dashboardSlice';


const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');
    const allData = useSelector((store) => store.dashboardSlice.allData);


    //console.log(allData);


    const handlelogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        const filteredData = allData.filter((data) => {
            return data.name.toLowerCase().includes(searchQuery.toLowerCase())
        })
        dispatch(getFilterData(filteredData))
    };


    return (
        <Fragment>
            <div className='fixed w-full top-0 left-0 border-b-2'>
                <nav className="bg-white border-gray-200 dark:bg-gray-900">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="https://www.pcsglobal.in/assets/images/logo.jpg" className="" alt="" />
                            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
                        </Link>
                        <div className="max-w-screen-xl px-4 py-3 mx-auto">
                            <div className="flex items-center">

                                <ul className="flex flex-row font-medium mt-0 space-x-6 rtl:space-x-reverse text-sm">
                                    <li>
                                        <Link to="/" className="text-gray-900 dark:text-white hover:underline hover:text-blue-500 duration-200 text-xl" aria-current="page">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/company" className="text-gray-900 dark:text-white hover:underline hover:text-blue-500 duration-200 text-xl">Company</Link>
                                    </li>
                                    <li>
                                        <Link to="team" className="text-gray-900 dark:text-white hover:underline hover:text-blue-500 duration-200 text-xl">Team</Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard" className="text-gray-900 dark:text-white hover:underline hover:text-blue-500 duration-200 text-xl">Dashboard</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {!localStorage.getItem('token') ? (
                            <div div className="flex items-center space-x-6 rtl:space-x-reverse">
                                {/* <Link to="tel:5541251234" className="text-sm  text-gray-500 dark:text-white hover:underline">(555) 412-1234</Link> */}
                                <Link to="/register" className="text-blue-600 dark:text-blue-500 text-xl hover:underline">Register</Link>
                                <Link to="/login" className="text-blue-600 dark:text-blue-500 text-xl hover:underline">Login</Link>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-6 rtl:space-x-reverse">
                                <div className="text-blue-600 dark:text-blue-500 text-xl hover:underline cursor-pointer" onClick={handlelogout}>Logout</div>
                                <Link to="/createDashboard" className="text-gray-600 dark:text-gray-500 text-xl hover:underline">Create Dashboard</Link>
                            </div>
                        )
                        }
                    </div>
                    <div className='mb-4' style={{ marginLeft: "460px", marginRight: "40px", display: "flex" }}>
                        <div>
                            <button id="multiLevelDropdownButton" data-dropdown-toggle="multi-dropdown" style={{ marginTop: "2.2px" }} className="text-white bg-blue-700 h-12 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Category<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                            </svg>
                            </button>
                            <div id="multi-dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="multiLevelDropdownButton">
                                    <li>
                                        <Link to="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                                    </li>
                                    <li>
                                        <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dropdown<svg className="w-2.5 h-2.5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                                        </svg></button>
                                        <div id="doubleDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                                                <li>
                                                    <Link to="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Overview</Link >
                                                </li>
                                                <li>
                                                    <Link to="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My downloads</Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Billing</Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Rewards</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <Link to="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link >
                                    </li>
                                    <li>
                                        <Link to="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <form className="mx-auto" style={{ width: "900px" }}>
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."
                                    value={searchQuery} onChange={handleSearch}
                                    required
                                />
                            </div>
                        </form>

                    </div>
                </nav>


            </div >
        </Fragment >
    )
}

export default Navbar

import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { getFilterData } from '../store/dashboardSlice';


const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');
    const allData = useSelector((store) => store.dashboardSlice.allData);
    //const admin = useSelector(store => store.userSlice.user.role);
    const user = JSON.parse(localStorage.getItem('user'));


    //console.log(allData);


    const handlelogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    }

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


    return (
        <Fragment>
            <div className='fixed w-full top-0 left-0 border-b-2 z-[999]'>
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
                                <div>
                                    {user.role === "admin" && <Link to="/admin" className="text-gray-600 dark:text-gray-500 text-xl hover:underline">Admin Dashboard</Link>}
                                </div>
                            </div>
                        )
                        }
                    </div>
                    <div className='mb-4 flex items-center justify-center gap-2'>
                        <div className="relative w-40">
                            <select className="block appearance-none w-full h-12 bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline">
                                <option className='hidden' value="">Category</option>
                                <option value="option1">Career Journey Stories</option>
                                <option value="option2">Mern Dashboard</option>
                                <option value="option3">Angular Dashboard</option>
                                <option value="option4">Java Deshboard</option>
                                <option value="option5">Python Dashboard</option>
                                <option value="option5">Salesforce Dashboard</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-5-5 1.5-1.5L10 9l3.5-3.5L15 7z" /></svg>
                            </div>
                        </div>
                        <div>
                            <form className="mx-auto" style={{ width: "900px" }} onSubmit={(e) => e.preventDefault()}>
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
                    </div>
                </nav>


            </div >
        </Fragment >
    )
}

export default Navbar

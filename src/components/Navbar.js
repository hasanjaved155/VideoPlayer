import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
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
                                <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
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
                        <div className="flex items-center space-x-6 rtl:space-x-reverse">
                            {/* <Link to="tel:5541251234" className="text-sm  text-gray-500 dark:text-white hover:underline">(555) 412-1234</Link> */}
                            <Link to="/login" className="text-blue-600 dark:text-blue-500 text-xl hover:underline">Login</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </Fragment>
    )
}

export default Navbar

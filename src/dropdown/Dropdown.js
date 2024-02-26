import React, { useState } from 'react'

const Dropdown = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showSubDropdown, setShowSubDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
        // Close sub dropdown when main dropdown is toggled
        setShowSubDropdown(false);
    };

    const toggleSubDropdown = () => {
        setShowSubDropdown(!showSubDropdown);
    };
    return (
        <div className="flex">
            <div>
                <div className="relative">
                    <button
                        className="text-gray-900 dark:text-white  hover:text-blue-500 duration-200 text-xl flex items-center"
                        onClick={toggleDropdown}
                    >
                        <span>Category</span>
                        <svg
                            className={`h-4 w-4 ml-1 transition-transform duration-200 transform ${showDropdown ? 'rotate-180' : ''
                                }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    {showDropdown && (
                        <div className="absolute z-10 mt-2 w-56 origin-top-right bg-white rounded-md shadow-lg">
                            <div className="py-1">
                                <div className="px-2 pt-2 pb-4 space-y-1">

                                    <button
                                        className=" px-4 py-2 text-sm text-black hover:bg-gray-700 hover:text-white flex"
                                        onClick={toggleSubDropdown}
                                    >
                                        <span>Web Development</span>
                                        <svg
                                            className={`h-4 w-4 ml-1 transition-transform duration-200 transform ${showSubDropdown ? 'rotate-180' : ''
                                                }`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    {showSubDropdown && (
                                        <div>
                                            <button className="block px-4 py-2 text-sm text-black hover:bg-gray-700 hover:text-white">
                                                MERN
                                            </button>
                                            <button className="block px-4 py-2 text-sm text-black hover:bg-gray-700 hover:text-white">
                                                Java
                                            </button>
                                            <button className="block px-4 py-2 text-sm text-black hover:bg-gray-700 hover:text-white">
                                                Angular
                                            </button>
                                            <button className="block px-4 py-2 text-sm text-black hover:bg-gray-700 hover:text-white">
                                                Salesforce
                                            </button>
                                            <button className="block px-4 py-2 text-sm text-black hover:bg-gray-700 hover:text-white">
                                                Python
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Dropdown

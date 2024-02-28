import React, { useState } from 'react'
import CreateDashboard from './CreateDashboard'
import CreatePlaylist from './CreatePlaylist';
import ShowAllUsers from './ShowAllUsers';
import AdminDetails from './AdminDetails';

const AdminDashboard = () => {
    const [select, setSelect] = useState("admin")

    return (
        <div className='container-fluid m-3 p-3 flex'>
            <div className='flex'>
                <div className='col-md-3'>
                    <div className="p-12 bg-gray-100 rounded-lg shadow-md w-96 h-96 ml-8" >
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">Admin Panel</h4>
                        <div className="block cursor-pointer py-2 px-4 bg-blue-500 text-white rounded-md mb-3 hover:bg-blue-600" onClick={(e) => setSelect("admin")}>
                            <h4>Admin Details</h4>
                        </div>
                        <div className="block cursor-pointer py-2 px-4 bg-blue-500 text-white rounded-md mb-3 hover:bg-blue-600" onClick={(e) => setSelect("dashboard")}>
                            <h4>Create Dashboard</h4>
                        </div>
                        <div className="block cursor-pointer py-2 px-4 bg-blue-500 text-white rounded-md mb-3 hover:bg-blue-600" onClick={(e) => setSelect("playlist")}>
                            <h4> Create Playlist</h4>
                        </div>
                        <div className="block cursor-pointer py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={(e) => setSelect("users")}>
                            <div> All Users</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='mx-auto'>
                        {select === "admin" && <AdminDetails />}
                        {select === "dashboard" && <CreateDashboard />}
                        {select === "playlist" && <CreatePlaylist />}
                        {select === "users" && <ShowAllUsers />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard

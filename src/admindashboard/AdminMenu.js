import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const AdminMenu = () => {
    return (
        <Fragment>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md w-96 h-72" style={{ marginLeft: "550px" }}>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Admin Panel</h4>
                <Link to="/admin/createDashboard" className="block py-2 px-4 bg-blue-500 text-white rounded-md mb-2 hover:bg-blue-600">
                    Create Dashboard
                </Link>
                <Link to="/admin/createPlaylist" className="block py-2 px-4 bg-blue-500 text-white rounded-md mb-2 hover:bg-blue-600">
                    Create Playlist
                </Link>
                <Link to="/admin/allUsers" className="block py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    All Users
                </Link>
            </div>
        </Fragment>
    );
};

export default AdminMenu;
import React, { useState } from "react";
import CreateDashboard from "./CreateDashboard";
import CreatePlaylist from "./CreatePlaylist";
import ShowAllUsers from "./ShowAllUsers";
import AdminDetails from "./AdminDetails";
import AllUsersPCS from "../pcsPages/AllUsersPCS";
import CreateMyCourse from "./CreateMyCourse";
import AssignCourse from "./AssignCourse";
import CreateCategory from "./CreateCategory";
import CreateSubCategory from "./CreateSubCategory";
import CreateSubSubCategory from "./CreateSubSubCategory";
import AddFestival from "../TopScript/AddFestival";
import CreateCourse from "./CreateCourse";

const AdminDashboard = () => {
  const [select, setSelect] = useState("admin");

  return (
    <div className="container-fluid m-3 p-2 flex ">
      <div className="flex ">
        <div className="col-md-3 ">
          <div className="p-12 bg-gray-100 rounded-lg shadow-md md:w-96  w-80 ml-8 ">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Admin Panel
            </h4>
            <div
              className="block cursor-pointer py-2 px-4 bg-blue-500 text-white rounded-md mb-3 hover:bg-blue-600"
              onClick={(e) => setSelect("admin")}>
              <h4>Admin Details</h4>
            </div>
            <div
              className="block cursor-pointer py-2 px-4 bg-blue-500 text-white rounded-md mb-3 hover:bg-blue-600"
              onClick={(e) => setSelect("assign")}>
              <h4>Assign Course</h4>
            </div>
            <div
              className="block cursor-pointer py-2 px-4 bg-blue-500 text-white rounded-md mb-3 hover:bg-blue-600"
              onClick={(e) => setSelect("dashboard")}>
              <h4>Create Dashboard</h4>
            </div>
            <div
              className="block cursor-pointer py-2 px-4 bg-blue-500 text-white rounded-md mb-3 hover:bg-blue-600"
              onClick={(e) => setSelect("course")}>
              <h4>Create Course</h4>
            </div>
            {/* <div
              className="block cursor-pointer py-2 px-4 bg-blue-500 text-white rounded-md mb-3 hover:bg-blue-600"
              onClick={(e) => setSelect("mycourse")}>
              <h4>Create Course</h4>
            </div> */}
            <div
              className="block cursor-pointer py-2 px-4 bg-blue-500 text-white rounded-md mb-3 hover:bg-blue-600"
              onClick={(e) => setSelect("playlist")}>
              <h4> Create Playlist</h4>
            </div>
            <div
              className="block cursor-pointer py-2 px-4 bg-blue-500 text-white rounded-md mb-3 hover:bg-blue-600"
              onClick={(e) => setSelect("users")}>
              <div> All Users</div>
            </div>
            <div
              className="block cursor-pointer py-2 px-4 bg-blue-500 text-white rounded-md mb-3 hover:bg-blue-600"
              onClick={(e) => setSelect("users-pcs")}>
              <div> All PCS Global's Users</div>
            </div>
            <div
              className="block cursor-pointer py-2 px-4 mb-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={(e) => setSelect("categories")}>
              <div> Create Category</div>
            </div>
            <div
              className="block cursor-pointer py-2 px-4 mb-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={(e) => setSelect("subcategories")}>
              <div> Create subCategory</div>
            </div>
            <div
              className="block cursor-pointer py-2 px-4 mb-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={(e) => setSelect("subsubcategories")}>
              <div> Create SubSubCategory</div>
            </div>
            <div
              className="block cursor-pointer py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={(e) => setSelect("festival")}>
              <div>Add Festival</div>
            </div>
          </div>
        </div>
        <div>
          <div className="mx-auto">
            {select === "admin" && <AdminDetails />}
            {select === "assign" && <AssignCourse />}
            {select === "dashboard" && <CreateDashboard />}
            {select === "course" && <CreateCourse />}
            {/* {select === "mycourse" && <CreateMyCourse />} */}
            {select === "playlist" && <CreatePlaylist />}
            {select === "users" && <ShowAllUsers />}
            {select === "users-pcs" && <AllUsersPCS />}
            {select === "categories" && <CreateCategory />}
            {select === "subcategories" && <CreateSubCategory />}
            {select === "subsubcategories" && <CreateSubSubCategory />}
            {select === "festival" && <AddFestival />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

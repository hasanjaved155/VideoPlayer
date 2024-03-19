import React, { useState, useEffect } from "react";
//import ApiService from "../services/ApiService";
import axios from "axios";
import { toast } from "react-hot-toast";

const AssignCourse = () => {
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  useEffect(() => {
    // Fetch users and courses data when component mounts
    fetchUsers();
    fetchCourses();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("/authpcs/users-pcs");
      setUsers(response.data.users);
    } catch (error) {
      toast.error("Error fetching users:", error);
    }
  };

  const fetchCourses = async () => {
    try {
      const response = await axios.get("/course/get-course");
      setCourses(response.data.courses);
    } catch (error) {
      toast.error("Error fetching courses:", error);
    }
  };

  const handleAssignCourse = async () => {
    if (!selectedUser || !selectedCourse) {
      toast.error("Please select a user and a course.");
      return;
    }

    try {
      const res = await axios.post("/course/assignments", {
        userId: selectedUser,
        courseId: selectedCourse,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
      } else if (!res.data.success) {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg ml-6 h-[25rem] md:ml-56 md:w-[30rem]">
      <h2 className="text-2xl font-bold mb-4">Assign Course to User</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Select User:</label>
        <select
          className="block w-full p-2 border border-gray-300 rounded-md"
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}>
          <option value="">Select User</option>
          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.firstName + " " + user.lastName}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Select Course:</label>
        <select
          className="block w-full p-2 border border-gray-300 rounded-md"
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}>
          <option value="">Select Course</option>
          {courses.map((course) => (
            <option key={course._id} value={course._id}>
              {course.name}
            </option>
          ))}
        </select>
      </div>
      <button
        className="bg-blue-500 mt-20 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
        onClick={handleAssignCourse}>
        Assign Course
      </button>
    </div>
  );
};

export default AssignCourse;

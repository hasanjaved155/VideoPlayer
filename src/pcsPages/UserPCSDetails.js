import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const UserPCSDetails = ({ _id }) => {
    const [user, setUser] = useState(null);
    const [info, setInfo] = useState([]);
    //const { _id } = useParams();

    const fetchUserDetails = async () => {
        try {
            const res = await axios.get(`/authpcs/users-pcs/${_id}`);
            setUser(res?.data?.user);
        } catch (err) {
            console.error(`Failed to fetch user details: ${err}`);
        }
    };

    const fetchUserEmployeeDetails = async () => {
        try {
            const res = await axios.get(`/employee/${_id}/employee_Details`);
            setInfo(res?.data?.details);
            console.log(info[0]);
        } catch (err) {
            console.error(`Failed to fetch user details: ${err}`);
        }
    };

    useEffect(() => {
        fetchUserDetails();
        fetchUserEmployeeDetails();

    }, [_id]);

    // Function to format date to show only date part
    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US');
    };

    const toggleIsVerified = async () => {
        try {
            const updatedUser = { ...user, isVerified: !user.isVerified };
            const res = await axios.put(`/authpcs/users-pcs/${_id}`, updatedUser);
            setUser(updatedUser); // Update user state locally
            if (res && res.data.success) {
                toast.success(res.data.message);

            } else if (!res.data.success) {
                toast.error(res.data.message);
            }
        } catch (err) {
            console.error(`Failed to update user details: ${err}`);
        }
    };

    return (
        <div className="mx-auto px-16 py-12">

            {/* Section Title */}
            <h1 className="text-3xl font-bold py-3">Employee Details</h1>

            {/* Flex container for user information and personal information */}
            <div className="flex gap-8 w-[47rem] ">

                {/* User Information Card */}
                {user ? (
                    <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                        <h1 className="text-xl font-bold mb-4">User Information</h1>
                        <p className="text-base mb-2"><span className="font-semibold">Email:</span> {user.email}</p>
                        <p className="text-base mb-2"><span className="font-semibold">Employee ID:</span> {user.employeeId}</p>
                        <p className="text-base mb-2"><span className="font-semibold">Date Of Joining:</span> {formatDate(user.dateOfJoining)}</p>
                        <div className="flex justify-center">
                            <p className="text-base  font-semibold">Is Verified:</p>
                            <p className={`text-base ${user.isVerified ? 'text-green-600' : 'text-red-600'}`}>{user.isVerified ? 'Employee' : 'General User'}</p>
                        </div>
                        {user.role === "Employee" &&
                            <button
                                onClick={toggleIsVerified}
                                type="submit"
                                className="w-24 bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 mt-4 rounded"
                            >
                                Update
                            </button>
                        }
                    </div>
                ) : (
                    <p>Loading user details...</p>
                )}

                {/* Personal Information Card */}
                {info[0] && (
                    <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                        <h1 className="text-xl font-bold mb-4">Personal Information</h1>
                        <p className="text-base mb-2"><span className="font-semibold">Designation:</span> {info[0].designation}</p>
                        <p className="text-base mb-2"><span className="font-semibold">Domain:</span> {info[0].domain}</p>
                    </div>
                )}

            </div>
        </div>

    );
};

export default UserPCSDetails;

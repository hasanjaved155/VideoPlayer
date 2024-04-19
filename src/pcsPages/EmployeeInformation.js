import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const EmployeeInformation = ({ userId }) => {
    const [designation, setDesignation] = useState("");
    const [domain, setDomain] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`/employee/designation/${userId}`, { designation, domain });
            if (res && res.data.success) {
                toast.success(res.data.message);
                navigate("/login-pcs");
            } else if (!res.data.success) {
                toast.error(res.data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <div className="max-w-lg mx-auto mt-10">
            <form onSubmit={handleSubmit} className="space-y-4">
                <select
                    name="designation"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-400"
                >
                    <option value="">Employee Designation</option>
                    <option value="Trainee Software Developer">Trainee Software Developer</option>
                    <option value="Junior Software Developer">Junior Software Developer</option>
                    <option value="Software Developer">Software Developer</option>
                    <option value="Senior Software Developer">Senior Software Developer</option>
                    <option value="Project Manager">Project Manager</option>
                    <option value="Business Analyst">Business Analyst</option>
                    <option value="Trainee Data Analyst">Trainee Data Analyst</option>
                    <option value="Trainee HR Executive">Trainee HR Executive</option>
                    <option value="HR Executive">HR Executive</option>
                    <option value="HR Councelor">HR Councelor</option>
                    <option value="HR Gernalist">HR Gernalist</option>
                </select>
                <select
                    name="domain"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-400"
                >
                    <option value="">Employee Domain</option>
                    <option value="EILP MERN STACK DEVELOPER">EILP MERN STACK DEVELOPER</option>
                    <option value="EILP JAVA FULL STACK DEVELOPER">EILP JAVA FULL STACK DEVELOPER</option>
                    <option value="EILP DATA ANALYST">EILP DATA ANALYST</option>
                    <option value="EILP SALESFORCE">EILP SALESFORCE</option>
                    <option value="EILP PYTHON DEVELOPER">EILP PYTHON DEVELOPER</option>
                </select>
                <button
                    type="submit"
                    className="block w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default EmployeeInformation;

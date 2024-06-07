import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
// import styled from "styled-components";

const RegisterPCS = ({ setUserId }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [dateOfJoining, setDOJ] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  //const [isValid, setIsValid] = useState(false);

  const validatePassword = (value) => {
    // Regular expressions to check for at least one special character and one number
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /[0-9]/;

    // Check if password meets all criteria
    const isLengthValid = value.length >= 10;
    const hasSpecialChar = specialCharRegex.test(value);
    const hasNumber = numberRegex.test(value);

    return isLengthValid && hasSpecialChar && hasNumber;
  };
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    setPasswordError(
      !validatePassword(value)
        ? "Password must be 10 characters long and contain at least one special character and one number"
        : ""
    );
  };

  const validateEmail = (value) => {
    // Regular expression to match Gmail-like email addresses
    //const gmailRegex = /^[a-zA-Z0-9._-]+@gmail.com$/;

    // Regular expression to match domain pcsgpl.com
    const pcsgplRegex = /@pcsgpl.com$/;

    // Check if the email matches the Gmail pattern and contains pcsgpl.com domain
    if (pcsgplRegex.test(value)) {
      return true;
    } else {
      return false;
    }
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setEmailError(!validateEmail(value) ? "Enter Your Official Email ID" : "");
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validatePassword(password) && validateEmail(email)) {
      try {
        const res = await axios.post("/authpcs/register-pcs", {
          firstName,
          lastName,
          email,
          password,
          phoneNo,
          employeeId,
          dateOfJoining,
        });
        // console.log(res);
        setUserId(res?.data?.user?._id)
        if (res && res.data.success) {
          toast.success(res.data.message);
          navigate("/employee");
        } else if (!res.data.success) {
          toast.error(res.data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      toast.error("Please fill in all required fields correctly.");
    }
  };

  return (
    <div className="flex justify-center items-center bg-white md:ml-72 md:h-[550px]">
      <div className="container mx-auto my-4 px-4 lg:px-20">
        <div className="w-full p-4 md:p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
          <div className="flex">
            <h1 className="font-bold uppercase text-xl">
              SignUp As PCS Global Employee
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 mt-3">
              <div className="flex flex-wrap items-center">
                <label className="block mb-2 ml-2 text-sm font-medium text-gray-900 dark:text-white">
                  First Name
                </label>
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:border-blue-500 border-2 focus:shadow-outline"
                  type="text"
                  name="firstName"
                  placeholder="First Name*"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap items-center">
                <label className="block mb-2 ml-2 text-sm font-medium text-gray-900 dark:text-white">
                  Last Name
                </label>
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:border-blue-500 border-2 focus:shadow-outline"
                  type="text"
                  name="lastName"
                  placeholder="Last Name*"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap items-center">
                <label className="block mb-2 ml-2 text-sm font-medium text-gray-900 dark:text-white">
                  Employee ID
                </label>
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:border-blue-500 border-2 focus:shadow-outline"
                  type="number"
                  name="employeeId"
                  placeholder="Enter Employee ID*"
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap items-center">
                <label className="block mb-2 ml-2 text-sm font-medium text-gray-900 dark:text-white">
                  Date Of Joining
                </label>
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:border-blue-500 border-2 focus:shadow-outline"
                  type="date"
                  name="dateOfJoining"
                  placeholder="Date Of Joining*"
                  value={dateOfJoining}
                  onChange={(e) => setDOJ(e.target.value)}
                />
              </div>

              <div className="flex flex-wrap items-center">
                <label className="block mb-2 ml-2 text-sm font-medium text-gray-900 dark:text-white">
                  Official Email ID
                </label>
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:border-blue-500 border-2 focus:shadow-outline"
                  type="email"
                  name="email"
                  placeholder="Enter Official Email ID*"
                  value={email}
                  onChange={handleEmailChange}
                />
                {emailError && <p className="text-red-500">{emailError}</p>}
                {validateEmail(email) && (
                  <p className="text-green-500">Valid Email!!</p>
                )}
              </div>
              <div className="flex flex-wrap items-center">
                <label className="block mb-2 ml-2 text-sm font-medium text-gray-900 dark:text-white">
                  Phone
                </label>
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:border-blue-500 border-2 focus:shadow-outline"
                  type="number"
                  name="phoneNo"
                  placeholder="Enter Phone No*"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap items-center">
                <label className="block mb-2 ml-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:border-blue-500 border-2 focus:shadow-outline"
                  type="password"
                  name="password"
                  placeholder="Enter Password*"
                  value={password}
                  onChange={handlePasswordChange}
                />
                {passwordError && (
                  <p className="text-red-500">{passwordError}</p>
                )}
                {validatePassword(password) && (
                  <p className="text-green-500">Password is valid</p>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between mt-4">
              <button
                type="submit"
                className="w-full md:w-auto bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-4 md:mb-0 rounded"
                style={{ border: "1px solid black" }}>
                Sign Up
              </button>

              <button
                type="reset"
                className="w-full md:w-auto bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-4 md:mb-0 rounded"
                style={{ border: "1px solid black" }}>
                Reset
              </button>
            </div>

            <div>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login-pcs"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Sign In As PCS Global Employee
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPCS;



// {/* <div
//                   div
//                   className="flex items-center space-x-6 rtl:space-x-reverse">
//                   {/* <Link to="tel:5541251234" className="text-sm  text-gray-500 dark:text-white hover:underline">(555) 412-1234</Link> */}
//                   <Link
//                     to="/register"
//                     className="text-blue-600 dark:text-blue-500 text-xl hover:underline">
//                     Register
//                   </Link>
//                   <Link
//                     to="/login"
//                     className="text-blue-600 dark:text-blue-500 text-xl hover:underline">
//                     Login
//                   </Link>
//                 </div> */}

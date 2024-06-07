import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import UserPCSDetails from "./UserPCSDetails";

const AllUsersPCS = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handleCardClick = (userId) => {
    setSelectedUserId((prevSelectedUserId) =>
      prevSelectedUserId === userId ? null : userId
    );
  };

  const getInitials = (name) => {
    if (!name) return '';

    const nameArray = name.split(' ');
    if (nameArray.length === 1) {
      return nameArray[0].slice(0, 1).toUpperCase();
    }

    return nameArray[0].slice(0, 1).toUpperCase() + nameArray[1].slice(0, 1).toUpperCase();
  };

  const fetchUsers = async () => {
    try {
      const res = await axios.get("/authpcs/users-pcs");
      setUsers(res.data.users);
    } catch (err) {
      console.error(`Failed to fetch dashboards: ${err}`);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setSelectedUserId(null); // Close user information when changing page
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    setSelectedUserId(null); // Close user information when changing page
  };

  return (
    <Fragment>
      <div className="indicator  py-2 left-0 right-0">
        <span className="indicator-item badge badge-secondary">
          {users.length}
        </span>
        <button className="btn">Login Users</button>
      </div>
      {/* <nav>
        <ul className="pagination px-8 flex justify-between">
          <li className="page-item">
            <button
              onClick={() => paginate(currentPage - 1)}
              className="page-link"
              disabled={currentPage === 1}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-12">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clipRule="evenodd" />
              </svg>

            </button>
          </li>
          <li className="page-item">
            <button onClick={nextPage} className="page-link" disabled={indexOfLastUser >= users.length}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-12">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
              </svg>
            </button>
          </li>
        </ul>
      </nav> */}
      <div className="flex flex-row px-16 py-6 gap-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          className="page-link"
          disabled={currentPage === 1}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-12">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clipRule="evenodd" />
          </svg>

        </button>
        {currentUsers.map((user) => (
          <div
            key={user._id}
            className="card w-36 h-36 bg-slate-200 shadow-xl"
            onClick={() => handleCardClick(user._id)}
          >
            <div className="avatar justify-center items-center">
              <div className="w-12 bg-zinc-900 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <div className="text-xl text-white p-2">
                  {getInitials(user?.firstName + " " + user?.lastName)}
                </div>
              </div>
            </div>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-xs w-32 justify-center">
                {user.firstName + " " + user.lastName}
              </h2>
              <p className="text-xs absolute top-28">{user.role}</p>
            </div>
          </div>
        ))}
        <button onClick={nextPage} className="page-link" disabled={indexOfLastUser >= users.length}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-12">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <div>
        {selectedUserId && <UserPCSDetails _id={selectedUserId} />}
      </div>

    </Fragment>
  );
};

export default AllUsersPCS;

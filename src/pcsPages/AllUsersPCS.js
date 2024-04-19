import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UserPCSDetails from "./UserPCSDetails";

const AllUsersPCS = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleCardClick = (userId) => {
    setSelectedUserId(userId);
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
  return (
    <Fragment>
      <div className="indicator  py-2 left-0 right-0" >
        <span className="indicator-item badge badge-secondary">
          {users.length}
        </span>
        <button className="btn">Login Users</button>
      </div>
      <div className=" flex flex-row px-16 gap-4">
        {users.map((user) => (
          <div key={user._id} className="card w-32 h-32 bg-slate-200 shadow-xl" onClick={() => handleCardClick(user._id)}>
            <div className="avatar justify-center items-center">
              <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Avatar" />
              </div>
            </div>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-xs w-20">{user.firstName + " " + user.lastName}</h2>
              <p className="text-xs">{user.role}</p>
            </div>
          </div>
        ))}

      </div>
      <div>
        {selectedUserId && <UserPCSDetails _id={selectedUserId} />}
      </div>

      {/* <div
        className=" ml-24 -translate-y-6"
        style={{ marginLeft: "80px", marginTop: "1.5rem" }}>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">All Users</h1>
        <div>
          <div
            className="overflow-x-auto overflow-scroll"
            style={{ height: "22rem", width: "52rem" }}>
            <table className="table table-xs table-pin-rows table-pin-cols">

              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email_Id</th>
                  <th></th>
                </tr>
              </thead>
              {users.map((user) => (

                <tbody>


                  <tr>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar placeholder">
                          <div className="bg-gray-500 text-neutral-content rounded-full w-10">
                            <span className="text-xl">
                              {user &&
                                user?.firstName &&
                                user?.firstName.slice(0, 1)}
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">
                            {user?.firstName + " " + user?.lastName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {user.email}
                      <br />
                    </td>
                    <th>
                      <Link to={`/user/${user._id}`} className="btn btn-ghost btn-xs">Details</Link>
                    </th>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div> */}

    </Fragment>

  );
};

export default AllUsersPCS;

//import axios from 'axios';
import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";

const Dashboard = ({ searchTerm }) => {
  const [dashboards, setDashboards] = useState([]);
  //const [user, setUser] = useState("");
  //const { id } = useParams();

  const user = JSON.parse(localStorage.getItem("user"));

  // const fetchUsers = async () => {
  //   try {
  //     const res = await axios.get(`/authpcs/users-pcs/${id}`);
  //     setUser(res.data.user);
  //     console.log(user);
  //   } catch (err) {
  //     console.error(`Failed to fetch dashboards: ${err}`);
  //   }
  // };

  // useEffect(() => {
  //   fetchUsers();
  // }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          searchTerm
            ? `/dashboard/get-dashboard?search=${searchTerm}`
            : "/dashboard/get-dashboard"
        );
        setDashboards(res.data.dashboards);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [searchTerm]);

  const handleClick = (item) => {
    if (
      !user?.employeeId &&
      item?.role &&
      item?.role[0]?.rolename === "Employee"
    ) {
      toast.error(
        "You don't have permission to view this.Please Contact Help Desk."
      );
    } else {
      // <Link to={item?.link}>
      //   <img
      //     className="rounded-t-lg"
      //     src={item?.image}
      //     alt=""
      //     style={{ width: "300px", height: "140px" }}
      //   />
      //   <div className="p-5">
      //     <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      //       {item?.name.slice(0, 28)} <br />
      //       {item?.name.slice(28)}
      //     </h5>
      //   </div>
      // </Link>;
    }
  };

  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 mt-4">
          {dashboards?.length > 0 &&
            dashboards?.map((item) => (
              <div
                key={item._id}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:-translate-y-2 duration-200 hover:shadow-[#6260607a] hover:shadow-xl">
                {!user?.employeeId &&
                item?.role &&
                item?.role[0]?.rolename === "Employee" ? (
                  <div
                    onClick={() => handleClick(item)}
                    style={{ cursor: "not-allowed" }}>
                    <img
                      className="rounded-t-lg"
                      src={item?.image}
                      alt=""
                      style={{ width: "300px", height: "140px" }}
                    />
                    <div className="p-5">
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item?.name.slice(0, 28)} <br />
                        {item?.name.slice(28)}
                      </h5>
                    </div>
                  </div>
                ) : (
                  <Link to={item?.link}>
                    <img
                      className="rounded-t-lg"
                      src={item?.image}
                      alt=""
                      style={{ width: "300px", height: "140px" }}
                    />
                    <div className="p-5">
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item?.name.slice(0, 28)} <br />
                        {item?.name.slice(28)}
                      </h5>
                    </div>
                  </Link>
                )}
              </div>
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;

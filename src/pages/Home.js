import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="h-96 md:h-[27rem] border border-gray-100 relative">
        <img
          src="https://i.ytimg.com/vi/7Jh-KADePFU/maxresdefault.jpg"
          alt=""
          className="h-full w-full object-cover bg-no-repeat bg-bottom"
        />
      </div>

      <div className=" rounded-full md:absolute bg-gray-100 md:mt-8 mt-4 left-8 p-4 flex flex-col items-start justify-center shadow-lg w-[30rem] md:h-96 md:w-[30rem]">
        <h2 className="text-3xl font-bold mb-2 ">
          WELCOME TO PCS GLOBAL PVT LTD
        </h2>
        <h3 className="text-xl">Look at this Company!!!Let's go</h3>
        <h3 className="text-xl">The goal is to learn without stress</h3>
      </div>

      <div
        style={{ fontSize: "1.10rem" }}
        className="tooltip md:ml-[45rem] md:top-0 md:mt-[2rem] mt-3"
        data-tip="Welcome to Career Journey Stories">
        <div className="md:border bg-gray-100 border-slate-400 md:h-[24rem] md:w-[36rem] rounded">
          <Link to="/career">
            <div>Welcome to Career Journey Stories</div>
            <img
              src="https://images.unsplash.com/photo-1543726969-a1da85a6d334?q=80&w=1872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="rounded"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

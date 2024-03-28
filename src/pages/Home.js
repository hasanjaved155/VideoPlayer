import React from "react";
import { Link } from "react-router-dom";
import image from "../images/alok_sir.jpg";
import Projects from "../Projects/Projects";


const Home = () => {
  return (
    <div>
      <div
        style={{
          left: "0",
          right: "0",
          margin: "auto",

          position: "relative",
          alignItems: "center",

          //border: "2px solid black",
        }}></div>

      <div
        style={{
          display: "flex",
          padding: "47px",
          background:
            "linear-gradient(180deg, rgba(0, 3, 124, 1) 0%, rgba(151, 218, 255, 1) 61%, rgba(255, 255, 255, 1) 95%)",
        }}>
        <div className="mr-[30px]">
          <img
            src={image}
            alt=""
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              borderRadius: "20px",
              objectFit: "cover",
              width: "auto",
              height: "22rem",
            }}
          />
        </div>
        <div
          className=" rounded-full  bg-gray-100"
          style={{
            position: "relative",
            left: "0",
            right: "0",
            alignItems: "center",
            padding: "8px",
            width: "50%",
            margin: "auto",
          }}>
          <div style={{ padding: "0px 20px 0px 20px" }}>
            <h2 className="text-[2.4vw] font-bold mb-2 ">
              WELCOME TO PCS GLOBAL PVT LTD
            </h2>
            <h3 className="text-[1.5vw]">Look at this Company!!!Let's go</h3>
            <h3 className="text-[1.5vw]">
              The goal is to learn without stress
            </h3>
          </div>
        </div>
      </div>
      {/* <div className="flex">
        <div
          style={{
            fontSize: "1.10rem",
            width: "50%",
          }}
          className="tooltip md:top-0 md:mt-[2rem] mt-3"
          data-tip="Welcome to Career Journey Stories">
          <div
            className="md:border bg-gray-100 border-slate-400 rounded"
            style={{
              margin: "auto",
              left: "0",
              right: "0",
              position: "relative",
            }}>
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
        <div
          style={{
            fontSize: "1.10rem",
            width: "50%",
          }}
          className="tooltip md:top-0 md:mt-[2rem] mt-3"
          data-tip="Welcome to Career Journey Stories">
          <div
            className="md:border bg-gray-100 border-slate-400 rounded"
            style={{
              margin: "auto",
              left: "0",
              right: "0",
              position: "relative",
            }}>
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
        <div
          style={{
            fontSize: "1.10rem",
            width: "50%",
          }}
          className="tooltip md:top-0 md:mt-[2rem] mt-3"
          data-tip="Welcome to Career Journey Stories">
          <div
            className="md:border bg-gray-100 border-slate-400 rounded"
            style={{
              margin: "auto",
              left: "0",
              right: "0",
              position: "relative",
            }}>
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
      </div> */}

      <Projects />

    </div>
  );
};

export default Home;

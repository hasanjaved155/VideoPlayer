import React from "react";

import { Link } from "react-router-dom";
import SvgLoader from "./SvgLoader";

const SignUpComponent = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold -mb-7 md:ml-[36rem]">SIGN UP AS</h1>
      </div>
      <div
        className="flex  rounded-lg md:h-[450px] md:w-[1230px] md:ml-[130px] "
        style={{
          border: "2px solid #ffb284",
        }}>
        <div>
          <SvgLoader />
        </div>

        <div className="p-12 gap-8 flex" style={{ marginLeft: "150px" }}>
          <Link to="/register-pcs" className="col-6">
            <div
              className=" hover:bg-orange-400 row align-items-center py-3 my-1 clickable-item px-2 mx-1 hover:bg-opacity-25 hover:border-orange-500 rounded-lg justify-between"
              style={{
                border: "2px solid #ffb284",
                transition: "border 0.3s, background-color 0.3s",
              }}>
              <div className="col-md-6 col-12">
                <div className="w-full h-full">
                  {/* eslint-disable-next-line */}
                  <img
                    className="height-intoggle intoggle-sign-img1"
                    src="https://www.pcsglobal.in/assets/images/logo.jpg"
                    style={{ width: "200px", height: "60px" }}
                  />
                </div>
              </div>
              <div className="col-md-6 p-0 col-12">
                <p className="text-center text-gray-500 text-xs mb-1">I am</p>
                <h5 className="text-center">PCS Global Employee</h5>
              </div>
            </div>
          </Link>

          <Link to="/register" className="col-6">
            <div
              className=" hover:bg-orange-400 row align-items-center py-3 my-1 clickable-item px-2 mx-1 hover:bg-opacity-25  hover:border-orange-500 rounded-lg justify-between"
              style={{
                border: "2px solid #ffb284",
                transition: "border 0.3s, background-color 0.3s",
              }}>
              <div className="col-md-6 col-12">
                {/* eslint-disable-next-line */}
                <div className="w-full h-full">
                  {/* eslint-disable-next-line */}
                  <img
                    className="height-intoggle intoggle-sign-img1"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTatTxNe4o_qRtI8F9s_zjSRrHExhm0frxsFPcA6SNqYDv1HQTPZ5HQsMRLyizq7e2nVBI&usqp=CAU"
                    style={{ width: "200px", height: "60px" }}
                  />
                </div>
              </div>
              <div className="col-md-6 p-0 col-12">
                <p className="text-center text-gray-500 text-xs mb-1">I am</p>
                <h5 className="text-center">General User</h5>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent;

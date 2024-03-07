import React from "react";

const Help = () => {
  return (
    <div
      className="card bg-base-100 shadow-xl"
      style={{ width: "400px", height: "400px", marginLeft: "570px" }}>
      <div className="card-body">
        <h2 className="card-title">Welcome to PCS Global Pvt Ltd</h2>
        <img
          className="mt-9"
          src="https://www.pcsglobal.in/assets/images/logo.jpg"
          alt=""
        />
        <p className="mt-8">HelpLine No. +91 9830376126</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Contact Now</button>
        </div>
      </div>
    </div>
  );
};

export default Help;

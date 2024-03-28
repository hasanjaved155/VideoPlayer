import React, { Fragment } from "react";
// import Navbar from "../components/Navbar";
import Footer from "./Footer";
import Navbar2 from "../components/Navbar2";

const Layout = ({ children, searchTerm, setSearchTerm, setDropdown }) => {
  return (
    <Fragment>
      <header
        className="m-auto"
        style={{
          //position: "relative",
          paddingLeft: "20px",
          paddingRight: "20px",

          border: "2px solid blue",
        }}>
        {/* <Navbar /> */}
        <Navbar2
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setDropdown={setDropdown}
        />
      </header>
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;

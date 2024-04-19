import React, { Fragment } from "react";
// import Navbar from "../components/Navbar";
import Footer from "./Footer";

import Navbar3 from "../components/Navbar3";
import Script from "../TopScript/Script";

const Layout = ({ children, searchTerm, setSearchTerm, setDropdown }) => {
  return (
    <Fragment>
      <header
        className="m-auto"
        style={{
          border: "2px solid blue",
        }}>
        <Script />
        <Navbar3
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

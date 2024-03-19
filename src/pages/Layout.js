import React, { Fragment } from "react";
// import Navbar from "../components/Navbar";
import Footer from "./Footer";
import Navbar2 from "../components/Navbar2";

const Layout = ({ children, searchTerm, setSearchTerm, setDropdown }) => {
  return (
    <Fragment>
      <header className="mb-[4rem] md:mb-[1rem]">
        {/* <Navbar /> */}
        <Navbar2
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setDropdown={setDropdown}
        />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default Layout;

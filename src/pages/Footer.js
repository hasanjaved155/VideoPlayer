import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="container bg-gray-900 py-8 px-4 text-gray-300 mt-4 text-left"
    >
      <div className="grid grid-cols-2 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-10 gap-10">
        <div>
          <h3 className="text-lg font-semibold mb-2">About Us</h3>
          <ul className="list-none">
            <Link to='/construct'>
              <li>About PCS Global Pvt Ltd</li>
            </Link>
            <Link to='/construct'>
              <li>We're Hiring</li>
            </Link>
            <Link to='/construct'>
              <li>Blog</li>
            </Link>
            <Link to='/construct'>
              <li>Support</li>
            </Link>
            <Link to='/construct'>
              <li>Press</li>
            </Link>
            <Link to='/construct'>
              <li>Affiliates</li>
            </Link></ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Resources</h3>
          <ul className="list-none">
            <Link to='/construct'>
              <li>PCS Global Business</li>
            </Link>
            <Link to='/construct'>
              <li>Teach on PCS Global</li>
            </Link>
            <Link to='/construct'>
              <li>Get the app</li>
            </Link>
            <Link to='/construct'>
              <li>About us</li>
            </Link>
            <Link to='/construct'>
              <li>Contact us</li>
            </Link></ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Programs</h3>
          <ul className="list-none">
            <Link to='/construct'>
              <li>PCS Global Business</li>
            </Link>
            <Link to='/construct'>
              <li>Teach on PCS Global</li>
            </Link>
            <Link to='/construct'>
              <li>Get the app</li>
            </Link>
            <Link to='/construct'>
              <li>Marketing</li>
            </Link>
            <Link to='/construct'>
              <li>And more</li>
            </Link>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Social</h3>
          <ul className="list-none">
            <Link to='/construct'>
              <li>Facebook</li>
            </Link>
            <Link to='/construct'>
              <li>Twitter</li>
            </Link>
            <Link to='/construct'>
              <li>Instagram</li>
            </Link>
            <Link to='/construct'>
              <li>LinkedIn</li>
            </Link>
            <Link to='/construct'>
              <li>YouTube</li>
            </Link></ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-4 pt-4 text-center">
        <p className="text-sm text-gray-500">&copy; PCS GLOBAL PVT LTD, Inc.</p>
      </div>
    </div>
  );
};

export default Footer;

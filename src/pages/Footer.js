import React from "react";

const Footer = () => {
  return (
    <div
      className="container bg-gray-900 py-8 px-4 text-gray-300 mt-4 text-left"
    >
      <div className="grid grid-cols-2 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-10 gap-10">
        <div>
          <h3 className="text-lg font-semibold mb-2">About Us</h3>
          <ul className="list-none">
            <li>About PCS Global Pvt Ltd</li>
            <li>We're Hiring</li>
            <li>Blog</li>
            <li>Support</li>
            <li>Press</li>
            <li>Affiliates</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Resources</h3>
          <ul className="list-none">
            <li>PCS Global Business</li>
            <li>Teach on PCS Global</li>
            <li>Get the app</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Programs</h3>
          <ul className="list-none">
            <li>PCS Global Business</li>
            <li>Teach on PCS Global</li>
            <li>Get the app</li>
            <li>Marketing</li>
            <li>And more</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Social</h3>
          <ul className="list-none">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-4 pt-4 text-center">
        <p className="text-sm text-gray-500">&copy; PCS GLOBAL PVT LTD, Inc.</p>
      </div>
    </div>
  );
};

export default Footer;

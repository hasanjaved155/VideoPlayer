import React from "react"; // Import useEffect hook
import image from "../images/front-view-stacked-books-graduation-cap-ladders-education-day.jpg";

const SvgLoader = () => {
  //   useEffect(() => {
  //     bodymovin.loadAnimation({
  //       container: document.getElementById("lottie-container"),
  //       renderer: "svg",
  //       loop: true,
  //       autoplay: true,
  //       path: "./images/educationani.json",
  //     });
  //   }, []); // Empty dependency array to ensure the effect runs only once on mount

  return (
    <div className="md:col-span-5">
      <div className="flex justify-center items-center">
        <div id="lottie-container" className=" ml-20 md:mt-14 mt-12">
          <img
            className=" rounded-lg md:w-[400px] md:h-[320px] md:mt-2 mb-2"
            src={image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SvgLoader;

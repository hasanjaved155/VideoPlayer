import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllData } from "../store/dashboardSlice";

const Dropdown = ({
  allData,
  showDropDashboard,
  showDropdown,
  selectedDropdown,
  selectedSubDropdown,
  toggleDropdown,
  toggleSubDropdown,
  toggleSubSubDropdown,
}) => {
  const [categories, setCategories] = useState([]);
  //const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("/category/getAllCategories");
        setCategories(res.data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const searchDashboard = (name) => {
    //const newSearchQuery = name;

    const filteredData = allData.filter((data) => {
      return data.name.toLowerCase().includes(name.toLowerCase());
    });
    //console.log(filteredData);

    dispatch(getAllData(filteredData));
  };

  return (
    <div className="flex">
      <div>
        <div className="relative">
          <button
            className="text-gray-900 dark:text-white text-xl flex items-center"
            onClick={toggleDropdown}>
            <span>Category</span>
            <svg
              className={`h-4 w-4 ml-1 transition-transform duration-200 transform ${
                showDropdown ? "rotate-180" : ""
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {showDropdown && (
            <div
              className="absolute z-10 mt-2 origin-top-right bg-slate-200 rounded-lg shadow-lg"
              style={{
                width: "18rem",
                left: "-300px",
                height: "32rem",
                border: "1px solid gray",
                marginTop: "56px",
              }}>
              <div className="py-1">
                <div className="px-10 pt-2 pb-4 space-y-1">
                  {categories.length > 0 &&
                    categories?.map((categoryItem) => (
                      <div key={categoryItem.categoryName}>
                        <button
                          className="px-4 py-2 text-sm text-black hover:bg-gray-700 hover:text-white flex"
                          onClick={() =>
                            toggleSubDropdown(categoryItem.categoryName)
                          }>
                          <span>{categoryItem?.categoryName}</span>
                          <svg
                            className={`h-4 w-4 ml-1 mt-1 transition-transform duration-200 transform ${
                              selectedDropdown === categoryItem.categoryName
                                ? "rotate-90"
                                : ""
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              fillRule="evenodd"
                              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        {selectedDropdown === categoryItem.categoryName && (
                          <div
                            className="absolute right-0 top-0 mt-0 ml-10 bg-slate-200 rounded-lg shadow-lg"
                            style={{
                              width: "18rem",
                              left: "247.5px",
                              height: "32rem",
                              border: "1px solid gray",
                            }}>
                            {categoryItem.subCategories.map((subCategory) => (
                              <div
                                key={
                                  subCategory.subCategoryName || subCategory
                                }>
                                <button
                                  className="px-4 py-2 text-sm hover:bg-gray-700 hover:text-white flex"
                                  onClick={() =>
                                    typeof subCategory === "object"
                                      ? toggleSubSubDropdown(
                                          subCategory.subCategoryName
                                        )
                                      : toggleSubSubDropdown(subCategory)
                                  }>
                                  <span>
                                    {typeof subCategory === "object"
                                      ? subCategory.subCategoryName
                                      : subCategory}
                                  </span>
                                  <svg
                                    className={`h-4 w-4 ml-1 mt-1 transition-transform duration-200 transform ${
                                      selectedSubDropdown ===
                                      subCategory.subCategoryName
                                        ? "rotate-90"
                                        : ""
                                    }`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      fillRule="evenodd"
                                      d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </button>
                                {typeof subCategory === "object" &&
                                  selectedSubDropdown ===
                                    subCategory.subCategoryName && (
                                    <div
                                      className="absolute right-0 top-0 mt-0 ml-10 bg-slate-200 rounded-lg shadow-lg"
                                      style={{
                                        width: "18rem",
                                        left: "247px",
                                        height: "32rem",
                                        border: "1px solid gray",
                                      }}>
                                      <div>Popular Topics</div>
                                      {subCategory.subSubCategories.map(
                                        (subSubCategory) => (
                                          <button
                                            key={
                                              subSubCategory.subSubCategoryName
                                            }
                                            className="px-4 py-2 text-sm hover:bg-gray-700 hover:text-white flex"
                                            onClick={() => {
                                              showDropDashboard();
                                              searchDashboard(
                                                subSubCategory.subSubCategoryName
                                              );
                                            }}>
                                            <span>
                                              {typeof subSubCategory ===
                                              "object"
                                                ? subSubCategory.subSubCategoryName
                                                : subSubCategory}
                                            </span>
                                          </button>
                                        )
                                      )}
                                    </div>
                                  )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

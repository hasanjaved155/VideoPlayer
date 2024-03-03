import React from "react";
//import { Link } from "react-router-dom";

const Dropdown = ({
  showDropdown,
  selectedDropdown,
  selectedSubDropdown,
  toggleDropdown,
  toggleSubDropdown,
  toggleSubSubDropdown,
}) => {
  const handleSubSubSubDropdown = (subSubDropdown) => {};
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
                  {[
                    {
                      category: "Development",
                      subCategories: [
                        {
                          name: "Web Development",
                          subSubCategories: [
                            "Mern",
                            "React JS",
                            "JavaScript",
                            "Angular",
                            "CSS",
                            "Next.js",
                            "Node.js",
                            "ASP.NET.Core",
                          ],
                        },
                        {
                          name: "Data Science",
                          subSubCategories: [
                            "Python",
                            "Machine Learning",
                            "Deep Learning",
                            "Artificial Intelligence",
                            "Natural Languages Processing",
                            "LangChain",
                            "R(programming languages)",
                            "Data Analysis",
                          ],
                        },
                        {
                          name: "Programming Languages",
                          subSubCategories: [
                            "Python",
                            "Java",
                            "C#(programming languages)",
                            "C++(programming languages)",
                            "React JS",
                            "Javascript",
                            "C(programming languages)",
                            "Spring Framework",
                          ],
                        },
                        {
                          name: "Database Design & Development",
                          subSubCategories: [
                            "SQL",
                            "MySQL",
                            "Database Management Systems(DBMS)",
                            "SQL Server",
                            "PostgreSQL",
                            "Apache Kafka",
                            "MongoDB",
                            "Database Programming",
                            "Oracle SQL",
                          ],
                        },
                        {
                          name: "Software Development Tools",
                          subSubCategories: [
                            "Docker",
                            "Git",
                            "Kubernetes",
                            "JIRA",
                            "Prompt Engineering",
                            "GitHub",
                            "Confluence",
                            "Terraform",
                            "CI/CD",
                          ],
                        },
                      ],
                    },
                    {
                      category: "Business",
                      subCategories: [
                        {
                          name: "Entrepreneurship",
                          subSubCategories: [
                            "Business Fundamentals",
                            "Entrepreneurship Fundamentals",
                            "Freelancing",
                            "ChatGPT",
                            "Business Strategy",
                            "Startup",
                            "Online Business",
                            "Business Plan",
                            "Instagram Marketing",
                          ],
                        },
                        {
                          name: "Communication",
                          subSubCategories: [
                            "Communication Skills",
                            "Public Speaking",
                            "Presentation Skills",
                            "Writing",
                            "Fiction Writing",
                            "Business Communication",
                            "Assertiveness",
                            "Business Writing",
                            "Email Writing and Etiquette",
                          ],
                        },
                        {
                          name: "Management",
                          subSubCategories: [
                            "Product Management",
                            "Leadership",
                            "Management Skills",
                            "ISO 9001",
                            "Project Management",
                            "Manager Training",
                            "Quality Management",
                            "Restaurant Management",
                            "MBA",
                          ],
                        },
                        {
                          name: "Sales",
                          subSubCategories: [
                            "Sales Skills",
                            "B2B Sales",
                            "LinkedIn",
                            "Customer Service",
                            "Cold Calling",
                            "Sales Management",
                            "Lead Generation",
                            "Business Development",
                            "Customer Success Management",
                          ],
                        },
                        {
                          name: "Business Strategy",
                          subSubCategories: [
                            "Artificial Intelligence",
                            "Management Consulting",
                            "TOGAF",
                            "Digital Transformation",
                            "Strategic Planning",
                          ],
                        },
                        {
                          name: "Operations",
                          subSubCategories: [
                            "Supply Chain",
                            "Logistics Management",
                            "Quality Management",
                            "Virtual Assistant Skills",
                            "Lean",
                            "Operations Management",
                          ],
                        },
                        {
                          name: "Project Management",
                          subSubCategories: [
                            "PMI PMP",
                            "PMI PMBOK",
                            "PMI CAPM",
                            "Scrum",
                            "Agile",
                            "Professional Scrum Master(PSM)",
                            "PRINCE2",
                            "Product Ownership",
                          ],
                        },
                      ],
                    },
                    {
                      category: "IT & Software",
                      subCategories: [
                        {
                          name: "IT Certifications",
                          subSubCategories: [
                            "AWS Certified Cloud Practitioner",
                            "CompTIA Security+",
                            "CompTIA A+",
                            "Amazon AWS",
                            "CCNA",
                            "AWS Certified Developer-Associate",
                            "Informaion Security",
                          ],
                        },
                        {
                          name: "Network & Security",
                          subSubCategories: [
                            "Ethical Hacking",
                            "Cybersecurity",
                            "Network Security",
                            "Penetration Testing",
                            "Kubernetes",
                            "IT Networking Fundamentals",
                            "CompTIA Network+",
                            "Computer Network",
                            "Wireshark",
                          ],
                        },
                        {
                          name: "Operating Systems & Servers",
                          subSubCategories: [
                            "Linux",
                            "Linux Administration",
                            "Windows Server",
                            "Active Directory",
                            "Shell Scripting",
                            "PowerShell",
                            "Linux Command Line",
                            "System Administration",
                            "Linux LPIC-1",
                          ],
                        },
                      ],
                    },
                    {
                      category: "Office Productivity",
                      subCategories: [
                        {
                          name: "Microsoft",
                          subSubCategories: [
                            "Excel",
                            "Microsoft 365(Office)",
                            "Excel VBA",
                            "Microsoft Power BI",
                            "PowerPoint",
                            "Excel Formulas and Functions",
                            "Pivot Tables",
                            "Data Analysis",
                            "Microsoft Word",
                          ],
                        },
                        {
                          name: "Apple",
                          subSubCategories: [
                            "Mac Basics",
                            "iMovie",
                            "Apple Keynote",
                            "Numbers For Mac",
                            "macOS",
                            "Apple Products Basics",
                            "Mac Pages",
                            "Microsoft 365(Office)",
                            "Microsoft Word",
                          ],
                        },
                        {
                          name: "Google",
                          subSubCategories: [
                            "Google Sheets",
                            "Google Workspace(G Suite)",
                            "Google AppSheet",
                            "Gmail Productivity",
                            "Google Apps Script",
                            "Google Looker",
                            "Google Drive",
                            "Excel",
                          ],
                        },
                        {
                          name: "SAP",
                          subSubCategories: [
                            "SAP S/4HANA",
                            "SAP MM",
                            "SAP ABAP",
                            "SAP SD",
                            "SAP FICO",
                            "SAP HCM",
                            "SAP Business Technology Platform(SAP BTP)",
                            "SAP Analytics Cloud",
                          ],
                        },
                        {
                          name: "Oracle",
                          subSubCategories: [
                            "Oracle Primavera",
                            "Oracle SQL",
                            "Oracle Fusion HCM",
                            "PL/SQL",
                            "Oracle Database",
                            "Database Administration",
                            "Oracle E-usiness Suite",
                            "Oracle NetSuite",
                            "Oracle Fusion Financials",
                          ],
                        },
                      ],
                    },
                    {
                      category: "Design",
                      subCategories: [
                        {
                          name: "Web Design",
                          subSubCategories: [
                            "Mobile App Design",
                            "WordPress",
                            "CSS",
                            "Figma",
                            "Elementor",
                            "User Interface Design",
                            "Web Development",
                            "HTML5",
                          ],
                        },
                        {
                          name: "Graphic Design & Illustration",
                          subSubCategories: [
                            "Graphic Design",
                            "Adobe Illustrator",
                            "Adobe Photoshop",
                            "Drawing",
                            "Canva",
                            "Procreate Digital Illustartion App",
                            "Digital Painting",
                            "Adobe InDesign",
                            "Design Theory",
                          ],
                        },
                        {
                          name: "Design Tools",
                          subSubCategories: [
                            "AutoCAD",
                            "Midjourney",
                            "Adobe Photoshop",
                            "SOLIDWORKS",
                            "Procreate Digital Illustration App",
                            "Adobe After Effects",
                            "ChatGPT",
                            "Adobe Premiere",
                            "Adobe Illustrator",
                          ],
                        },
                        {
                          name: "User Experience Design",
                          subSubCategories: [
                            "Figma",
                            "User Interface Design",
                            "UX Writing(User Experience Writing)",
                            "Product Design",
                            "Adobe XD",
                            "Design Thinking",
                            "Web Accessibility",
                            "Web Design",
                          ],
                        },
                        {
                          name: "Game Design",
                          subSubCategories: [
                            "Blender",
                            "3D Modeling",
                            "Adobe After Effects",
                            "Motion Graphics",
                            "3D Printing",
                            "Fusion 360",
                            "3D Animation",
                            "zBrush",
                            "Unreal Engine",
                          ],
                        },
                      ],
                    },
                    {
                      category: "Marketing",
                      subCategories: [
                        "Digital Marketing",
                        "Search Engine Optimization",
                        "Social Media Marketing",
                        "Branding",
                        "Marketing Fundamentals",
                      ],
                    },
                    {
                      category: "Lifestyle",
                      subCategories: [
                        "Arts & Crafts",
                        "Beauty & Makeup",
                        "Esoteric Practices",
                        "Food & Beverage",
                        "Gaming",
                      ],
                    },
                    {
                      category: "Photography & Video",
                      subCategories: [
                        "Digital Photography",
                        "Photography",
                        "Portrait Photography",
                        "Photography Tools",
                      ],
                    },
                    {
                      category: "Health & Fitness",
                      subCategories: [
                        "Fitness",
                        "General Health",
                        "Sports",
                        "Yoga",
                      ],
                    },
                  ].map((categoryItem) => (
                    <div key={categoryItem.category}>
                      <button
                        className="px-4 py-2 text-sm text-black hover:bg-gray-700 hover:text-white flex"
                        onClick={() =>
                          toggleSubDropdown(categoryItem.category)
                        }>
                        <span>{categoryItem.category}</span>
                        <svg
                          className={`h-4 w-4 ml-1 mt-1 transition-transform duration-200 transform ${
                            selectedDropdown === categoryItem.category
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
                      {selectedDropdown === categoryItem.category && (
                        <div
                          className="absolute right-0 top-0 mt-0 ml-10 bg-slate-200 rounded-lg shadow-lg"
                          style={{
                            width: "18rem",
                            left: "247.5px",
                            height: "32rem",
                            border: "1px solid gray",
                          }}>
                          {categoryItem.subCategories.map((subCategory) => (
                            <div key={subCategory.name || subCategory}>
                              <button
                                className="px-4 py-2 text-sm hover:bg-gray-700 hover:text-white flex"
                                onClick={() =>
                                  typeof subCategory === "object"
                                    ? toggleSubSubDropdown(subCategory.name)
                                    : toggleSubSubDropdown(subCategory)
                                }>
                                <span>
                                  {typeof subCategory === "object"
                                    ? subCategory.name
                                    : subCategory}
                                </span>
                                <svg
                                  className={`h-4 w-4 ml-1 mt-1 transition-transform duration-200 transform ${
                                    selectedSubDropdown === subCategory.name
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
                                selectedSubDropdown === subCategory.name && (
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
                                          key={subSubCategory}
                                          className="px-4 py-2 text-sm hover:bg-gray-700 hover:text-white flex"
                                          onClick={() =>
                                            handleSubSubSubDropdown
                                          }>
                                          <span>{subSubCategory}</span>
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

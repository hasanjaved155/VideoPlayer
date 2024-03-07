import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const AdminCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");
  const [subSubCategoryName, setSubSubCategoryName] = useState("");
  const [categoryId, setCategoryId] = useState(""); // State to hold categoryId
  const [subCategoryId, setSubCategoryId] = useState(""); // State to hold subCategoryId
  const [link, setLink] = useState(""); // State to hold subCategoryId

  const handleCategorySubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/category/create-category", {
        categoryName,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
      } else if (!res.data.success) {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSubCategorySubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/category/create-subcategory", {
        subCategoryName,
        categoryId,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
      } else if (!res.data.success) {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSubSubCategorySubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/category/create-subsubcategory", {
        link,
        subSubCategoryName,
        categoryId,
        subCategoryId,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
      } else if (!res.data.success) {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div style={{ marginLeft: "500px" }}>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="card border border-gray-300 p-4">
          <div class="card-body">
            <h2 class="text-lg font-semibold mb-4">Create Category</h2>
            <form onSubmit={handleCategorySubmit}>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Category Name:</span>
                  <input
                    type="text"
                    class="input input-bordered"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                  />
                </label>
              </div>
              <button type="submit" class="btn btn-primary mt-4">
                Create Category
              </button>
            </form>
          </div>
        </div>

        <div class="card border border-gray-300 p-4">
          <div class="card-body">
            <h2 class="text-lg font-semibold mb-4">Create Subcategory</h2>
            <form onSubmit={(e) => handleSubCategorySubmit(e)}>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Subcategory Name:</span>
                  <input
                    type="text"
                    class="input input-bordered"
                    value={subCategoryName}
                    onChange={(e) => setSubCategoryName(e.target.value)}
                  />
                </label>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Category-ID:</span>
                  <input
                    type="text"
                    class="input input-bordered"
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                  />
                </label>
              </div>
              <button type="submit" class="btn btn-primary mt-4">
                Create Subcategory
              </button>
            </form>
          </div>
        </div>

        <div class="card border border-gray-300 p-4">
          <div class="card-body">
            <h2 class="text-lg font-semibold mb-4">Create Subsubcategory</h2>
            <form onSubmit={(e) => handleSubSubCategorySubmit(e)}>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Path:</span>
                  <input
                    type="text"
                    class="input input-bordered"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                  />
                </label>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Subsubcategory Name:</span>
                  <input
                    type="text"
                    class="input input-bordered"
                    value={subSubCategoryName}
                    onChange={(e) => setSubSubCategoryName(e.target.value)}
                  />
                </label>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Category-ID:</span>
                  <input
                    type="text"
                    class="input input-bordered"
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                  />
                </label>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Sub-Category-ID:</span>
                  <input
                    type="text"
                    class="input input-bordered"
                    value={subCategoryId}
                    onChange={(e) => setSubCategoryId(e.target.value)}
                  />
                </label>
              </div>
              <button type="submit" class="btn btn-primary mt-4">
                Create Subsubcategory
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCategory;

// [
//   {
//     category: "Development",
//     subCategories: [
//       {
//         name: "Web Development",
//         subSubCategories: [
//           {
//             link: "/mern",
//             name: "Mern",
//           },
//           { link: "/react", name: "React JS" },

//           { link: "/javascript", name: "JavaScript" },
//           { link: "/angular", name: "Angular" },
//           { link: "/css", name: "CSS" },
//           { link: "/next", name: "Next.js" },
//           { link: "/node", name: "Node.js" },
//           { link: "/asp-net", name: "ASP.NET.Core" },
//         ],
//       },
//       {
//         name: "Data Science",
//         subSubCategories: [
//           "Python",
//           "Machine Learning",
//           "Deep Learning",
//           "Artificial Intelligence",
//           "Natural Languages Processing",
//           "LangChain",
//           "R(programming languages)",
//           "Data Analysis",
//         ],
//       },
//       {
//         name: "Programming Languages",
//         subSubCategories: [
//           "Python",
//           "Java",
//           "C#(programming languages)",
//           "C++(programming languages)",
//           "React JS",
//           "Javascript",
//           "C(programming languages)",
//           "Spring Framework",
//         ],
//       },
//       {
//         name: "Database Design & Development",
//         subSubCategories: [
//           "SQL",
//           "MySQL",
//           "Database Management Systems(DBMS)",
//           "SQL Server",
//           "PostgreSQL",
//           "Apache Kafka",
//           "MongoDB",
//           "Database Programming",
//           "Oracle SQL",
//         ],
//       },
//       {
//         name: "Software Development Tools",
//         subSubCategories: [
//           "Docker",
//           "Git",
//           "Kubernetes",
//           "JIRA",
//           "Prompt Engineering",
//           "GitHub",
//           "Confluence",
//           "Terraform",
//           "CI/CD",
//         ],
//       },
//     ],
//   },
//   {
//     category: "Business",
//     subCategories: [
//       {
//         name: "Entrepreneurship",
//         subSubCategories: [
//           "Business Fundamentals",
//           "Entrepreneurship Fundamentals",
//           "Freelancing",
//           "ChatGPT",
//           "Business Strategy",
//           "Startup",
//           "Online Business",
//           "Business Plan",
//           "Instagram Marketing",
//         ],
//       },
//       {
//         name: "Communication",
//         subSubCategories: [
//           "Communication Skills",
//           "Public Speaking",
//           "Presentation Skills",
//           "Writing",
//           "Fiction Writing",
//           "Business Communication",
//           "Assertiveness",
//           "Business Writing",
//           "Email Writing and Etiquette",
//         ],
//       },
//       {
//         name: "Management",
//         subSubCategories: [
//           "Product Management",
//           "Leadership",
//           "Management Skills",
//           "ISO 9001",
//           "Project Management",
//           "Manager Training",
//           "Quality Management",
//           "Restaurant Management",
//           "MBA",
//         ],
//       },
//       {
//         name: "Sales",
//         subSubCategories: [
//           "Sales Skills",
//           "B2B Sales",
//           "LinkedIn",
//           "Customer Service",
//           "Cold Calling",
//           "Sales Management",
//           "Lead Generation",
//           "Business Development",
//           "Customer Success Management",
//         ],
//       },
//       {
//         name: "Business Strategy",
//         subSubCategories: [
//           "Artificial Intelligence",
//           "Management Consulting",
//           "TOGAF",
//           "Digital Transformation",
//           "Strategic Planning",
//         ],
//       },
//       {
//         name: "Operations",
//         subSubCategories: [
//           "Supply Chain",
//           "Logistics Management",
//           "Quality Management",
//           "Virtual Assistant Skills",
//           "Lean",
//           "Operations Management",
//         ],
//       },
//       {
//         name: "Project Management",
//         subSubCategories: [
//           "PMI PMP",
//           "PMI PMBOK",
//           "PMI CAPM",
//           "Scrum",
//           "Agile",
//           "Professional Scrum Master(PSM)",
//           "PRINCE2",
//           "Product Ownership",
//         ],
//       },
//     ],
//   },
//   {
//     category: "IT & Software",
//     subCategories: [
//       {
//         name: "IT Certifications",
//         subSubCategories: [
//           "AWS Certified Cloud Practitioner",
//           "CompTIA Security+",
//           "CompTIA A+",
//           "Amazon AWS",
//           "CCNA",
//           "AWS Certified Developer-Associate",
//           "Informaion Security",
//         ],
//       },
//       {
//         name: "Network & Security",
//         subSubCategories: [
//           "Ethical Hacking",
//           "Cybersecurity",
//           "Network Security",
//           "Penetration Testing",
//           "Kubernetes",
//           "IT Networking Fundamentals",
//           "CompTIA Network+",
//           "Computer Network",
//           "Wireshark",
//         ],
//       },
//       {
//         name: "Operating Systems & Servers",
//         subSubCategories: [
//           "Linux",
//           "Linux Administration",
//           "Windows Server",
//           "Active Directory",
//           "Shell Scripting",
//           "PowerShell",
//           "Linux Command Line",
//           "System Administration",
//           "Linux LPIC-1",
//         ],
//       },
//     ],
//   },
//   {
//     category: "Office Productivity",
//     subCategories: [
//       {
//         name: "Microsoft",
//         subSubCategories: [
//           "Excel",
//           "Microsoft 365(Office)",
//           "Excel VBA",
//           "Microsoft Power BI",
//           "PowerPoint",
//           "Excel Formulas and Functions",
//           "Pivot Tables",
//           "Data Analysis",
//           "Microsoft Word",
//         ],
//       },
//       {
//         name: "Apple",
//         subSubCategories: [
//           "Mac Basics",
//           "iMovie",
//           "Apple Keynote",
//           "Numbers For Mac",
//           "macOS",
//           "Apple Products Basics",
//           "Mac Pages",
//           "Microsoft 365(Office)",
//           "Microsoft Word",
//         ],
//       },
//       {
//         name: "Google",
//         subSubCategories: [
//           "Google Sheets",
//           "Google Workspace(G Suite)",
//           "Google AppSheet",
//           "Gmail Productivity",
//           "Google Apps Script",
//           "Google Looker",
//           "Google Drive",
//           "Excel",
//         ],
//       },
//       {
//         name: "SAP",
//         subSubCategories: [
//           "SAP S/4HANA",
//           "SAP MM",
//           "SAP ABAP",
//           "SAP SD",
//           "SAP FICO",
//           "SAP HCM",
//           "SAP Business Technology Platform(SAP BTP)",
//           "SAP Analytics Cloud",
//         ],
//       },
//       {
//         name: "Oracle",
//         subSubCategories: [
//           "Oracle Primavera",
//           "Oracle SQL",
//           "Oracle Fusion HCM",
//           "PL/SQL",
//           "Oracle Database",
//           "Database Administration",
//           "Oracle E-usiness Suite",
//           "Oracle NetSuite",
//           "Oracle Fusion Financials",
//         ],
//       },
//     ],
//   },
//   {
//     category: "Design",
//     subCategories: [
//       {
//         name: "Web Design",
//         subSubCategories: [
//           "Mobile App Design",
//           "WordPress",
//           "CSS",
//           "Figma",
//           "Elementor",
//           "User Interface Design",
//           "Web Development",
//           "HTML5",
//         ],
//       },
//       {
//         name: "Graphic Design & Illustration",
//         subSubCategories: [
//           "Graphic Design",
//           "Adobe Illustrator",
//           "Adobe Photoshop",
//           "Drawing",
//           "Canva",
//           "Procreate Digital Illustartion App",
//           "Digital Painting",
//           "Adobe InDesign",
//           "Design Theory",
//         ],
//       },
//       {
//         name: "Design Tools",
//         subSubCategories: [
//           "AutoCAD",
//           "Midjourney",
//           "Adobe Photoshop",
//           "SOLIDWORKS",
//           "Procreate Digital Illustration App",
//           "Adobe After Effects",
//           "ChatGPT",
//           "Adobe Premiere",
//           "Adobe Illustrator",
//         ],
//       },
//       {
//         name: "User Experience Design",
//         subSubCategories: [
//           "Figma",
//           "User Interface Design",
//           "UX Writing(User Experience Writing)",
//           "Product Design",
//           "Adobe XD",
//           "Design Thinking",
//           "Web Accessibility",
//           "Web Design",
//         ],
//       },
//       {
//         name: "Game Design",
//         subSubCategories: [
//           "Blender",
//           "3D Modeling",
//           "Adobe After Effects",
//           "Motion Graphics",
//           "3D Printing",
//           "Fusion 360",
//           "3D Animation",
//           "zBrush",
//           "Unreal Engine",
//         ],
//       },
//     ],
//   },
//   {
//     category: "Marketing",
//     subCategories: [
//       "Digital Marketing",
//       "Search Engine Optimization",
//       "Social Media Marketing",
//       "Branding",
//       "Marketing Fundamentals",
//     ],
//   },
//   {
//     category: "Lifestyle",
//     subCategories: [
//       "Arts & Crafts",
//       "Beauty & Makeup",
//       "Esoteric Practices",
//       "Food & Beverage",
//       "Gaming",
//     ],
//   },
//   {
//     category: "Photography & Video",
//     subCategories: [
//       "Digital Photography",
//       "Photography",
//       "Portrait Photography",
//       "Photography Tools",
//     ],
//   },
//   {
//     category: "Health & Fitness",
//     subCategories: ["Fitness", "General Health", "Sports", "Yoga"],
//   },
// ];

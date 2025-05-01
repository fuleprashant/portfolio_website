import React, { useState } from "react";
import html from "../images/html 2.png";
import css from "../images/css 2.png";
import javascript from "../images/javscript 2.png";
import tailwindcss from "../images/tailwinnd css.png";
import react from "../images/react pic.png";
import redux from "../images/redux.png";
import reacthookform from "../images/reacthookform.png";
import formik from "../images/formik.png";

// for backend
import node from "../images/node.png";
import express from "../images/express.png";

//for databasr

import mysql from "../images/mysql.png";
import mongodb from "../images/mongodb.png";
// import { FaMinus } from "react-icons/fa6";
// import { FaPlus } from "react-icons/fa";
import { FiChevronDown, FiChevronRight, FiChevronUp } from "react-icons/fi";

// const response = {
//   frontend: [
//     {
//       id: 1,
//       path: html,
//       description: "HTML is a structure to build the website",
//     },
//     {
//       id: 2,
//       path: css,
//       description: "CSS is used for styling the structure of the website",
//     },
//     {
//       id: 3,
//       path: javascript,
//       description: "JavaScript is used to add interactivity to the website",
//     },
//     {
//       id: 4,
//       path: tailwindcss,
//       description:
//         "Tailwind CSS is a utility-first CSS framework for creating custom designs",
//     },
//     {
//       id: 5,
//       path: react,
//       description: "React is a JavaScript library for building user interfaces",
//     },
//     {
//       id: 6,
//       path: redux,
//       description:
//         "Redux is a state management tool for JavaScript applications",
//     },
//     {
//       id: 7,
//       path: reacthookform,
//       description: "React Hook Form is a library for handling forms in React",
//     },
//     {
//       id: 8,
//       path: formik,
//       description:
//         "Formik is a form library for React to handle form validation and state",
//     },
//   ],
//   backend: [
//     {
//       id: 1,
//       path: node,
//       description:
//         "Node.js is a JavaScript runtime environment for server-side programming",
//     },
//     {
//       id: 2,
//       path: express,
//       description: "Express.js is a web application framework for Node.js",
//     },
//   ],
//   database: [
//     {
//       id: 1,
//       path: mongodb,
//       description:
//         "MongoDB is a NoSQL database that stores data in JSON-like format",
//     },
//     {
//       id: 2,
//       path: mysql,
//       description: "MongoDB is a SQL database that stores data in table format",
//     },
//   ],
// };

// console.log(response);
// const Skills = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   console.log(selectedCategory);
//   const [open, setOpen] = useState(false);
//   console.log(open);

//   const clickCategory = (category) => {
//     category = selectedCategory
//       ? setSelectedCategory(null)
//       : setSelectedCategory(category);
//   };
//   return (
//     <div className=" flex flex-col text-left p-4 ">
//       <div className="flex item-center gap-10 text-xl font-semibold p-2 mb-2 bg-blue-100 text-black rounded">
//         {!open ? (
//           <FaPlus
//             size={24}
//             onClick={() => [setOpen(true), clickCategory("frontend")]}
//           />
//         ) : (
//           <FaMinus
//             size={24}
//             onClick={() => [setOpen(false), clickCategory(null)]}
//           />
//         )}
//         <button> Frontend technology skill</button>
//       </div>
//       {open && selectedCategory === "frontend" && (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//           {response.frontend.map((ele, idx) => (
//             <div
//               key={ele.id}
//               className="bg-blue-100 flex flex-col  text-center border "
//             >
//               <img
//                 src={ele.path}
//                 alt={ele.description}
//                 className="h-40 w-40 mx-auto"
//               />
//               <h5 className="mt-5">{ele.description}</h5>
//             </div>
//           ))}
//         </div>
//       )}
//       <div className="flex item-center gap-10 text-xl font-semibold p-2 mb-2 bg-blue-100 text-black rounded">
//         {!open ? (
//           <FaPlus
//             size={24}
//             onClick={() => [setOpen(true), clickCategory("backend")]}
//           />
//         ) : (
//           <FaMinus
//             size={24}
//             onClick={() => [setOpen(false), clickCategory(null)]}
//           />
//         )}
//         <button> Backend technology skill</button>
//       </div>
//       {open && selectedCategory === "backend" && (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//           {response.backend.map((ele, idx) => (
//             <div
//               key={ele.id}
//               className="bg-blue-100 flex flex-col  text-center border"
//             >
//               <img
//                 src={ele.path}
//                 alt={ele.description}
//                 className="h-40 w-40 mx-auto"
//               />
//               <h5 className="mt-5">{ele.description}</h5>
//             </div>
//           ))}
//         </div>
//       )}
//       <div className="flex item-center gap-10 text-xl font-semibold p-2 mb-2 bg-blue-100 text-black rounded">
//         {!open ? (
//           <FaPlus
//             size={24}
//             onClick={() => [setOpen(true), clickCategory("database")]}
//           />
//         ) : (
//           <FaMinus
//             size={24}
//             onClick={() => [setOpen(false), clickCategory(null)]}
//           />
//         )}
//         <button> Database technology skill</button>
//       </div>
//       {open && selectedCategory === "database" && (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//           {response.database.map((ele, idx) => (
//             <div
//               key={ele.id}
//               className="bg-blue-100 flex flex-col  text-center border"
//             >
//               <img
//                 src={ele.path}
//                 alt={ele.description}
//                 className="h-40 w-40 mx-auto"
//               />
//               <h5 className="mt-5">{ele.description}</h5>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Skills;

// ------

const response = [
  {
    name: "frontend",
    value: [
      {
        id: 1,
        path: html,
        title: "HTML",
        description: "HTML is a structure to build the website",
        technology: "frontend",
      },
      {
        id: 2,
        path: css,
        title: "CSS",
        description: "CSS is used for styling the structure of the website",
      },
      {
        id: 3,
        path: javascript,
        title: "JAVASCRIPT",
        description: "JavaScript is used to add interactivity to the website",
      },
      {
        id: 4,
        path: tailwindcss,
        title: "Tailwindcss",
        description:
          "Tailwind CSS is a utility-first CSS framework for creating custom designs",
      },
      {
        id: 5,
        path: react,
        title: "React",
        description:
          "React is a JavaScript library for building user interfaces",
      },
      {
        id: 6,
        path: redux,
        title: "Redux",
        description:
          "Redux is a state management tool for JavaScript applications",
      },
      {
        id: 7,
        path: reacthookform,
        title: "reacthookform",
        description: "React Hook Form is a library for handling forms in React",
      },
      {
        id: 8,
        path: formik,
        title: "formik",
        description:
          "Formik is a form library for React to handle form validation and state",
      },
    ],
  },
  {
    name: "backend",
    value: [
      {
        id: 1,
        path: node,
        title: "node",
        description:
          "Node.js is a JavaScript runtime environment for server-side programming",
      },
      {
        id: 2,
        path: express,
        title: "express",
        description: "Express.js is a web application framework for Node.js",
      },
    ],
  },
  {
    name: "database",
    value: [
      {
        id: 1,
        path: mongodb,
        title: "mongodb",
        description:
          "MongoDB is a NoSQL database that stores data in JSON-like format",
      },
      {
        id: 2,
        path: mysql,
        title: "mysql",
        description:
          "MongoDB is a SQL database that stores data in table format",
      },
    ],
  },
];
console.log(response[2]);

const Skills = () => {
  const [selectedTech, setSelectedTech] = useState({
    frontend: false,
    backend: false,
    database: false,
  });
  console.log("selectedtech is", selectedTech);

  // {
  //   response.map((ele, idx) =>
  //     console.log("llllloooooooooooop", console.log(ele))
  //   );
  // }

  return (
    <div>
      <div className="text-2xl text-center mt-5 p-5 ">Skills</div>

      {response.map((tech, idx) => (
        <div
          key={idx}
          className="bg-white mb-5 rounded-lg overflow-hidden transform transition-transform duration-800 "
        >
          <div
            className="bg-blue-100 flex items-center gap-5 p-5 cursor-pointer"
            onClick={() =>
              setSelectedTech({
                ...selectedTech,
                [tech.name]: !selectedTech[tech.name],
              })
            }
          >
            {console.log("_+++_", selectedTech[tech.name])}
            {selectedTech[tech.name] ? (
              <FiChevronDown size={24} />
            ) : (
              <FiChevronRight size={24} />
            )}

            <p className="font-mono text-2xl">{tech.name}</p>
          </div>
          {selectedTech[tech.name] && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {tech.value.map((val) => (
                <div
                  key={val.id}
                  className="text-center border p-5 hover:bg-blue-600"
                >
                  <img src={val.path} alt="" className="h-30 w-30 mx-auto " />
                  <h2 className="text-3xl">{val.title}</h2>
                  <h5 className="mt-5">{val.description}</h5>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      {/* {response.map((ele, idx) => (
        <div key={idx} className="bg-white mb-5 rounded-lg overflow-hidden">
          <div
            className="bg-blue-100 flex items-center gap-5 p-5 cursor-pointer"
            onClick={() => handleName(ele.name)}
          >
            {category.includes(ele.name) ? (
              <FaMinus size={24} />
            ) : (
              <FaPlus size={24} />
            )}

            <p className="font-mono text-2xl">{ele.name}</p>
          </div>

          {category.includes(ele.name) && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
              {ele.value.map((val, ids) => (
                <div key={val.id} className="text-center border p-5">
                  <img src={val.path} alt="" className="h-30 w-30 mx-auto " />
                  <h5>{val.description}</h5>
                </div>
              ))}
            </div>
          )}
        </div>
      ))} */}
    </div>
  );
};

export default Skills;

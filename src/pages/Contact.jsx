// import React, { useState } from "react";
// import html from "../images/html 2.png";
// import css from "../images/css 2.png";
// import javascript from "../images/javscript 2.png";
// import tailwindcss from "../images/tailwinnd css.png";
// import react from "../images/react pic.png";
// import redux from "../images/redux.png";
// import reacthookform from "../images/reacthookform.png";
// import formik from "../images/formik.png";

// // for backend
// import node from "../images/node.png";
// import express from "../images/express.png";

// //for databasr

// import mysql from "../images/mysql.png";
// import mongodb from "../images/mongodb.png";
// import { FaMinus } from "react-icons/fa6";
// import { FaPlus } from "react-icons/fa";

// const response = [
//   {
//     id: 1,
//     path: html,
//     description: "HTML is a structure to build the website",
//     technology: "frontend",
//   },
//   {
//     id: 2,
//     path: css,
//     description: "CSS is used for styling the structure of the website",
//     technology: "frontend",
//   },
//   {
//     id: 3,
//     path: javascript,
//     description: "JavaScript is used to add interactivity to the website",
//     technology: "frontend",
//   },
//   {
//     id: 4,
//     path: tailwindcss,
//     description:
//       "Tailwind CSS is a utility-first CSS framework for creating custom designs",
//     technology: "frontend",
//   },
//   {
//     id: 5,
//     path: react,
//     description: "React is a JavaScript library for building user interfaces",
//     technology: "frontend",
//   },
//   {
//     id: 6,
//     path: redux,
//     description: "Redux is a state management tool for JavaScript applications",
//     technology: "frontend",
//   },
//   {
//     id: 7,
//     path: reacthookform,
//     description: "React Hook Form is a library for handling forms in React",
//     technology: "frontend",
//   },
//   {
//     id: 8,
//     path: formik,
//     description:
//       "Formik is a form library for React to handle form validation and state",
//     technology: "frontend",
//   },

//   {
//     id: 9,
//     path: node,
//     description:
//       "Node.js is a JavaScript runtime environment for server-side programming",
//     technology: "backend",
//   },
//   {
//     id: 10,
//     path: express,
//     description: "Express.js is a web application framework for Node.js",
//     technology: "backend",
//   },

//   {
//     id: 11,
//     path: mongodb,
//     description:
//       "MongoDB is a NoSQL database that stores data in JSON-like format",
//     technology: "database",
//   },
//   {
//     id: 12,
//     path: mysql,
//     description: "MongoDB is a SQL database that stores data in table format",
//     technology: "database",
//   },
// ];

// console.log(response);

// const Contact = () => {
//   const [current, setCurrent] = useState([]);
//   console.log("the current is", current);
//   const uniqueData = [...new Set(response.map((tech) => tech.technology))];

//   const handleName = (name) => {
//     current.includes(name)
//       ? setCurrent(current.filter((cur) => cur !== name))
//       : setCurrent([...current, name]);
//   };

//   // const filterData = response.filter((res) => res.technology === current);
//   // console.log(filterData);
//   return (
//     <div className="bg-white">
//       <div className="text-2xl text-center ">Courses</div>
//       {uniqueData.map((tech, index) => (
//         <div key={index} className="gap-5">
//           <div
//             className=" flex  p-5 bg-blue-200 items-center gap-5"
//             onClick={() => handleName(tech)}
//           >
//             {current.includes(tech) ? <FaMinus /> : <FaPlus />}
//             <div className="text-xl nx-auto">{tech}</div>
//           </div>

//           {current.includes(tech) && (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//               {response
//                 .filter((res) => res.technology === tech)
//                 .map((tec) => (
//                   <div className="flex flex-col bg-amber-200">
//                     <img src={tec.path} alt={tec.technology} />
//                     <h2>{tec.technology}</h2>
//                     <p>{tec.description}</p>
//                   </div>
//                 ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Contact;
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });

  const handleChange = (e) => {
    setFormData((prevdata) => ({
      ...prevdata,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset or send data to backend here
    setFormData({ name: "", email: "", message: "", number: "" });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5 ">
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-5">
          <label className=" text-gray-700 font-medium mb-2 flex items-center">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-5">
          <label className=" text-gray-700 font-medium mb-2 flex items-center">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-5">
          <label className=" text-gray-700 font-medium mb-2 flex items-center">
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-5">
          <label className=" text-gray-700 font-medium mb-2 flex items-center">
            Mobile
          </label>
          <input
            type="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition flex "
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

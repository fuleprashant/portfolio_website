// import React from "react";
// import hrms from "../images/hrms.jfif";
// import hotel from "../images/hotel.jfif";
// import lancer from "../images/lancer.jfif";
// import jim from "../images/thedigit.jfif";
// import data from "../images/data.jfif";

// const About = () => {
//   return (
//     <div>
//       <div
//         className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-20 z-0"
//         style={{ backgroundImage: `url(${data})` }}
//       ></div>
//       <div className=" relative z-20 mt-14 m-5 p-5 ">
//         <div className="text-3xl md:text-4xl text-left m-5 ">
//           NAME : Fule Prashant B.
//         </div>
//         <p className="mx-5 md:mx-0  text-left text-xl md:text-2xl mt-5 ">
//           A passionate React.js Developer who loves crafting smooth and dynamic
//           web experiences.
//         </p>
//         <p className="mx-5 md:mx-0 text-left text-xl md:text-2xl mt-5 ">
//           I have 1.5+ years of experience in React.js and Javascipt..currently i
//           work in the technobrain bussiness solution which is localted in
//           ahmedabad.
//         </p>
//         <p className="mx-5 md:mx-0 text-left text-xl md:text-2xl mt-5">
//           My role here is build the frontend part of the webApplication.. and
//           intrigrate API .. communicate with backend developers and testers for
//           the work and build the responsive websites
//         </p>

//         <div className="mt-10 mx-5 md:mx-0">
//           <div className="text-2xl font-bold p-5 text-center">PROJECTS</div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-5 ">
//             <div className="w-80 bg-blue-100 mx-auto">
//               <img src={hrms} alt="" className="w-full mx-auto" />
//               <h4 className="text-2xl font-bold m-3 text-left">HRMS</h4>
//               <div className=" text-left m-2 font-bold">
//                 Project information :{" "}
//                 <span className=" font-extralight">
//                   This projects is built for the company when i was joining here
//                   as an intern this project backend is in the php - laravel and
//                   frontend part was built in react.js
//                 </span>
//               </div>
//               <div className="text-left m-2 font-bold">
//                 MY role:
//                 <span className=" font-extralight">
//                   i built the loan page of any employee want to apply the loas
//                   built the UI for that and intigrate the API which i got from
//                   the backend developer.
//                 </span>
//               </div>
//             </div>
//             <div className="w-80  bg-blue-100 mx-auto">
//               <img src={hotel} alt="" className="w-full" />
//               <h4 className="text-2xl font-bold m-3 text-left">
//                 HOTEL MANAGMENT SYSTEM
//               </h4>
//               <div className=" text-left m-2 font-bold">
//                 Project information :{" "}
//                 <span className=" font-extralight">
//                   This projects is built for the austrailian client.this project
//                   backend is in the .net and database is SQL and frontend part
//                   was built in react.js
//                 </span>
//               </div>
//               <div className="text-left m-2 font-bold">
//                 MY role:
//                 <span className=" font-extralight">
//                   i built the booking the hotel page , customer feed back
//                   component , Admin dashboard design.. , Admin confirmation
//                   about the booking .. i built the UI of this pages and
//                   intigrate the API
//                 </span>
//               </div>
//             </div>
//             <div className="w-80  bg-blue-100 mx-auto">
//               <img src={lancer} alt="" className="w-full" />
//               <h4 className="text-2xl font-bold m-3 text-left">LANCER</h4>
//               <div className="text-left m-2 font-bold">
//                 Project Overview:
//                 <span className="font-extralight">
//                   Lancer Soda Shop is a web-based application built to manage
//                   soda product sales and customer orders. The platform includes
//                   an interactive UI for browsing sodas, placing orders, and
//                   managing inventory. The frontend is developed with React.js,
//                   and the backend is powered by AngelScript with SQL for data
//                   storage.
//                 </span>
//               </div>

//               <div className="text-left m-2 font-bold">
//                 MY role:
//                 <span className=" font-extralight">
//                   i built the multiple functionality in this project like when
//                   longpress soda come with mapping of the soda can which is
//                   handle by backend i apply the APIs and intigrate the multiple
//                   API
//                 </span>
//               </div>
//             </div>
//             <div className="w-80   bg-blue-100 mx-auto">
//               <img src={jim} alt="" className="w-full" />
//               <h4 className="font-bold text-2xl">THE_DIGIT</h4>
//               <div className="text-left m-2 font-bold">
//                 Project Overview:
//                 <span className="font-extralight">
//                   The_digit project is the finance domain project where there
//                   are two type of login user 1 is borrower who apply for the
//                   loan and other is MLO who decide that which type of banks are
//                   giver this borrower with this type of intrets loan. tack stack
//                   of this project is in backend we use .net with sql and for
//                   frontend we use react.js
//                 </span>
//               </div>
//               <div className="text-left m-2 font-bold">
//                 MY role:
//                 <span className=" font-extralight">
//                   i built the multiple functionality in this project apply the
//                   borrower side API and mlo side api that when the borrower
//                   apply for the loan mlo can give it either approve and decline
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

// --------------------

import React, { useState } from "react";
import hrms from "../images/hrms.jfif";
import hotel from "../images/hotel.jfif";
import lancer from "../images/lancer.jfif";
import jim from "../images/thedigit.jfif";

const About = () => {
  const projects = [
    {
      id: 1,
      title: "HRMS",
      image: hrms,
      info: "This project was built when I joined the company as an intern. Backend is PHP Laravel and frontend is React.js.",
      role: "Built the loan page for employees, developed UI and integrated APIs from backend.",
    },
    {
      id: 2,
      title: "HOTEL MANAGEMENT SYSTEM",
      image: hotel,
      info: "Built for an Australian client. Backend is .NET, database is SQL, and frontend is React.js.",
      role: "Built hotel booking page, customer feedback component, admin dashboard, and integrated APIs.",
    },
    {
      id: 3,
      title: "LANCER",
      image: lancer,
      info: "Lancer Soda Shop is a web app for managing soda sales and inventory. Frontend in React.js, backend in AngelScript with SQL.",
      role: "Implemented long-press soda selection and integrated multiple APIs.",
    },
    {
      id: 4,
      title: "THE_DIGIT",
      image: jim,
      info: "Finance domain app with two roles: borrower and MLO. Backend is .NET with SQL, ",
      role: "Integrated borrower and MLO APIs, including loan application, approval, and rejection.",
    },
  ];

  const [expandIndex, setExpandIndex] = useState([]);

  const toggleExpand = (index) => {
    setExpandIndex(
      expandIndex.includes(index)
        ? expandIndex.filter((exi) => exi !== index)
        : [...expandIndex, index]
    );
  };

  return (
    <div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-grey-300 to-blue-700 opacity-30"></div>

      <div className="relative z-10 mt-14 m-5 p-5 ">
        <div className="ml-5 md:ml-0 text-xl md:text-2xl text-left font-mono transform transition-transform duration-800 hover:scale-105">
          NAME : Fule Prashant B.{" "}
          <span className="font-mono text-red-700">React Developer</span>
        </div>
        <li className="mx-5 md:mx-0 text-left text-xl md:text-2xl mt-5 transform transition-transform duration-800 hover:scale-105">
          A passionate React.js Developer who loves crafting smooth and dynamic
          web experiences.
        </li>
        <li className="mx-5 md:mx-0 text-left text-xl md:text-2xl mt-5 transform transition-transform duration-800 hover:scale-105">
          I have 1.5+ years of experience in React.js and JavaScript. Currently
          I work at Technobrain Business Solution, located in Ahmedabad.
        </li>
        <li className="mx-5 md:mx-0 text-left text-xl md:text-2xl mt-5 transform transition-transform duration-800 hover:scale-105">
          My role is to build frontend parts of web applications, integrate
          APIs, collaborate with backend developers and testers, and ensure
          responsive design.
        </li>

        <div className="mt-10 mx-5 md:mx-0">
          <div className="text-4xl font-stretch-50% p-5 text-center">
            PROJECTS
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 text-center ">
            {projects.map((project, index) => {
              const isExpanded = expandIndex.includes(index);

              const truncate = (text, length) =>
                text.length > length ? text.slice(0, length) + "...." : text;
              return (
                <div
                  key={index}
                  className="w-full h-full bg-white mx-auto border-black border p-4 text-left transform transition-transform duration-800 hover:scale-105"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-90"
                  />
                  <hr />
                  <h4 className="text-2xl font-stretch-50% m-3 text-left text-black">
                    {project.title}
                  </h4>
                  <li className="text-left m-2 font-bold">
                    Project Information:{" "}
                    <span className="font-extralight">
                      {isExpanded ? project.info : truncate(project.info, 50)}
                    </span>
                  </li>
                  <li className="text-left m-2 font-bold">
                    My Role:{" "}
                    <span className="font-extralight">
                      {isExpanded ? project.role : truncate(project.role, 50)}
                    </span>
                  </li>
                  <button
                    onClick={() => toggleExpand(index)}
                    className="text-blue-600 hover:underline"
                  >
                    {isExpanded ? "show less" : "Read more"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

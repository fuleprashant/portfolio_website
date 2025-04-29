import React from "react";
import { NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 p-5">
      <div className="bg-blue-100 p-4 rounded-lg shadow-md hover:shadow-lg h-80 space-y-5">
        <h3 className="text-xl font-semibold text-gray-800">
          Project name = To-do List
        </h3>
        <h3 className="text-xl font-semibold text-gray-800">
          TACK STACK -- REACT , NODE , EXPRESS , MONGO_DB
        </h3>
        <p className="text-gray-600 mt-2">
          THis is full stack project of to-do list with mongodb , express , node
          and react{" "}
        </p>
        <NavLink to="https://github.com/fuleprashant/crud_todo_mern1">
          <button className="bg-black text-white py-3 px-8 rounded-3xl">
            Get GITHUB CODE
          </button>
        </NavLink>
      </div>

      <div className="bg-blue-100 p-4 rounded-lg shadow-md hover:shadow-lg h-80 space-y-5">
        <h3 className="text-xl font-semibold text-gray-800">
          Project name = CRUD list
        </h3>
        <h3 className="text-xl font-semibold text-gray-800">
          TACK STACK -- REACT , NODE , EXPRESS , MONGO_DB
        </h3>
        <p className="text-gray-600 mt-2">
          THis is full stack project of CRUD with mongodb , express , node and
          react{" "}
        </p>
        <NavLink to="https://github.com/fuleprashant/mern-crud-application.git">
          <button className="bg-black text-white py-3 px-8 rounded-3xl">
            Get GITHUB CODE
          </button>
        </NavLink>
      </div>

      <div className="bg-blue-100 p-4 rounded-lg shadow-md hover:shadow-lg h-100  0 space-y-5">
        <h3 className="text-xl font-semibold text-gray-800">
          Project name = BookStore webapplication
        </h3>
        <h3 className="text-xl font-semibold text-gray-800">
          TACK STACK -- REACT , NODE , EXPRESS , MONGO_DB
        </h3>
        <p className="text-gray-600 mt-2">
          THis is full stack project of Bookstore with mongodb , express , node
          and react.in this project create dummy data and put in the database
          and fetch it .. i applied the dark and light mode functionality in
          aboce project.
        </p>
        <NavLink to="https://github.com/fuleprashant/BookStoreWebApplication.git">
          <button className="bg-black text-white py-3 px-8 rounded-3xl">
            Get GITHUB CODE
          </button>
        </NavLink>
      </div>

      <div className="bg-blue-100 p-4 rounded-lg shadow-md hover:shadow-lg h-120  0 space-y-5">
        <h3 className="text-xl font-semibold text-gray-800">
          Project name = chat-application
        </h3>
        <h3 className="text-xl font-semibold text-gray-800">
          TACK STACK -- REACT , NODE , EXPRESS , MONGO_DB , SOCKET.IO
        </h3>
        <p className="text-gray-600 mt-2">
          THis is full stack project of chat appliation with mongodb , express ,
          node and react and socket.io in this project create dummy data and put
          in the database and fetch it .. i applied the dark and light mode
          functionality in aboce project.
        </p>
        <NavLink>
          <button className="bg-red-400 text-white py-3 px-8 rounded-3xl">
            private reposetry!!
          </button>
        </NavLink>
      </div>

      <div className="bg-blue-100 p-4 rounded-lg shadow-md hover:shadow-lg h-180  0 space-y-5">
        <h3 className="text-xl font-semibold text-gray-800">
          Project name = Learn Backend
        </h3>
        <h3 className="text-xl font-semibold text-gray-800">
          TACK STACK -- NODE , EXPRESS
        </h3>
        <p className="text-gray-600 mt-2">
          In this project, I focused on learning and implementing backend
          development with Node.js and Express. I gained hands-on experience in
          building RESTful APIs, handling server-side logic, and managing data
          flow between the frontend and backend. Using Express, I was able to
          structure routes, implement middleware, and handle HTTP requests
          efficiently. By integrating MongoDB, I learned how to perform database
          operations like creating, reading, updating, and deleting records.
          This project also helped me understand the importance of building
          scalable and maintainable backend systems, providing a solid
          foundation for developing full-stack applications.
        </p>
        <NavLink to="https://github.com/fuleprashant/Learn_backend.git">
          <button className="bg-black text-white py-3 px-8 rounded-3xl">
            Get GITHUB CODE
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Projects;

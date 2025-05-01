import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col items-center md:flex-row p-5 justify-between  gap-5 w-full bg-gradient-to-r from-gray-100 via-grey-300 to-blue-300 ">
      <div className="text-2xl flex cursor-pointer">
        <span className="text-blue-950">&lt; </span>
        <span className="text-blue-500">Prashant</span>
        <span className="text-blue-500 ml-1"> Fule</span>
        <span className="text-blue-950 mx-1"> / </span>
        <span className="text-blue-950">&gt;</span>
      </div>
      <div>Passionate React js developer / Web enthusiast</div>
      <div>
        <ul className="flex flex-col">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-500 underline" : "text-black"
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-blue-500 underline" : "text-black"
              }
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "text-blue-500 underline" : "text-black"
              }
            >
              PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive ? "text-blue-500 underline" : "text-black"
              }
            >
              SKILLS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-blue-500 underline" : "text-black"
              }
            >
              CONTACTS
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

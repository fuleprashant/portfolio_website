import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col items-center md:flex-row p-5 justify-between bg-blue-100 gap-5 w-full">
      <div>Fule Prashant</div>
      <div>Passionate React js developer / Web enthusiast</div>
      <div>
        <ul className="flex flex-col">
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/projects">PROJECTS</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACTS</NavLink>
          </li>{" "}
          <li>
            <NavLink to="/skills">SKILLS</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

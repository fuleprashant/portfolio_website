import React, { useEffect, useState } from "react";
import profile from "../images/avatar.jfif";
import { NavLink, useLocation } from "react-router-dom";
import { BsXLg } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [popup, setPopup] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [mobilepopup, setMobilePopup] = useState(false);

  const handlePopup = () => {
    setPopup(!popup);
  };

  return (
    <div className="flex justify-between h-20 bg-blue-100 px-5 items-center">
      <div className="block md:hidden">
        {mobilepopup ? (
          <BsXLg size={36} onClick={() => setMobilePopup(false)} />
        ) : (
          <GiHamburgerMenu size={36} onClick={() => setMobilePopup(true)} />
        )}

        <div
          className={`fixed top-20 left-0 w-full h-full bg-slate-600 shadow-md flex flex-col items-center gap-16 py-4 z- transform transition-transform duration-300 ease-in-out mx-auto ${
            mobilepopup ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul>
            <li>
              <NavLink
                to="/"
                className="block text-center py-3"
                onClick={() => [setMobilePopup(false)]}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block text-center py-3"
                onClick={() => setMobilePopup(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className="block text-center py-3"
                onClick={() => [
                  setMobilePopup(false),
                  setPopup((window.scrollY = 0)),
                ]}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className="block text-center py-3"
                onClick={() => setMobilePopup(false)}
              >
                skills
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-2xl ">Prashant Fule</div>
      <div className="hidden md:block">
        <ul className="flex gap-5 text-xl text-bold">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/projects">PROJECTS</NavLink>
          <NavLink to="/skills">SKILLS</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
        </ul>
      </div>
      <div className=" rounded-4xl relative" onClick={handlePopup}>
        <img src={profile} alt="profile img" className="h-12 w-12" />

        {popup && (
          <div className=" w-50 bg-red-900 absolute rounded-xl z-10 right-1 p-5  ">
            <div className="flex flex-col gap-2">
              <div onClick={() => handlePopup(false)}>My Profile</div>
              <div>download resume</div>
              <div>Logout</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

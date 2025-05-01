import React, { useEffect, useState } from "react";
import profile from "../images/avatar.jfif";
import { NavLink, useLocation } from "react-router-dom";
import { BsGithub, BsXLg } from "react-icons/bs";
import { GiHamburgerMenu, GiThink } from "react-icons/gi";
import { LiaLinkedin } from "react-icons/lia";
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
    <div className="flex justify-between h-20 bg-blue-100 px-5 items-center  bg-gradient-to-r from-gray-100 via-grey-300 to-blue-300 ">
      <div className="block md:hidden">
        {mobilepopup ? (
          <BsXLg size={36} onClick={() => setMobilePopup(false)} />
        ) : (
          <GiHamburgerMenu size={36} onClick={() => setMobilePopup(true)} />
        )}

        <div
          className={`fixed top-20 left-0 w-full h-full bg-white shadow-md flex flex-col items-center gap-16 py-4 z- transform transition-transform duration-300 ease-in-out mx-auto ${
            mobilepopup ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 underline" : "text-black"
                }
                onClick={() => [setMobilePopup(false)]}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 underline" : "text-black"
                }
                onClick={() => setMobilePopup(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 underline" : "text-black"
                }
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
                className={({ isActive }) =>
                  isActive ? "text-blue-500 underline" : "text-black"
                }
                onClick={() => setMobilePopup(false)}
              >
                skills
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-2xl flex cursor-pointer">
        <span className="text-blue-950">&lt; </span>
        <span className="text-blue-500">Prashant</span>
        <span className="text-blue-500 ml-1">Fule</span>
        <span className="text-blue-950 mx-1"> / </span>
        <span className="text-blue-950">&gt;</span>
      </div>
      <div className="hidden md:block">
        <ul className="flex gap-5 text-md lg:text-xl font-serif ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-500 underline" : "text-black"
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-500 underline" : "text-black"
            }
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "text-blue-500 underline" : "text-black"
            }
          >
            PROJECTS
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive ? "text-blue-500 underline" : "text-black"
            }
          >
            SKILLS
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-500 underline" : "text-black"
            }
          >
            CONTACT
          </NavLink>
        </ul>
      </div>
      <div className=" rounded-4xl flex gap-5" onClick={handlePopup}>
        <NavLink>
          <BsGithub size={36} />
        </NavLink>
        <NavLink>
          <LiaLinkedin size={36} />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

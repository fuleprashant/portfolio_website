import React from "react";
import html from "../images/html 2.png";
import css from "../images/css 2.png";
import javascript from "../images/javscript 2.png";
import tailwindcss from "../images/tailwinnd css.png";
import react from "../images/react pic.png";
import redux from "../images/redux.png";

const Specialization = () => {
  return (
    <div className="mt-10">
      <div className="p-5 text-5xl font-bold text-center  mt-10 ">
        Specialazation +++
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-5 ">
        <div className="flex flex-col text-center items-center border border-blue-500 p-8">
          <img src={html} alt="" className="w-80 h-50" />
          <div className="text-4xl mt-2 ">HTML</div>
        </div>
        <div className="flex flex-col text-center items-center border border-blue-500 p-8">
          <img src={css} alt="" className="w-80 h-50" />
          <div className="text-4xl mt-2 ">CSS</div>
        </div>
        <div>
          <div className="flex flex-col text-center items-center border border-blue-500 p-8 ">
            <img src={tailwindcss} alt="" className="w-80 h-50" />
            <div className="text-4xl mt-2 ">TAILWIND CSS</div>
          </div>
        </div>
        <div className="flex flex-col text-center items-center border border-blue-500 p-8">
          <img src={javascript} alt="" className="w-80 h-50" />
          <div className="text-4xl mt-2 ">JAVASCRIPT</div>
        </div>
        <div className="flex flex-col text-center items-center border border-blue-500 p-8">
          <div>
            <img src={react} alt="" className="w-80 h-50" />
            <div className="text-4xl mt-2 ">REACT</div>
          </div>
        </div>
        <div className="flex flex-col text-center items-center border border-blue-500 p-8">
          <img src={redux} alt="" className="w-80 h-50" />
          <div className="text-4xl mt-2 ">REDUX-TOOLKIT</div>
        </div>
      </div>
    </div>
  );
};

export default Specialization;

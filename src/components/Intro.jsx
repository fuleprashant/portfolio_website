import React from "react";
import man from "../images/man.png";
import bg2 from "../images/bg2.jfif";

const Intro = () => {
  return (
    <div className="h-full flex items-center justify-center px-4  relative z-10">
      <div
        className="absolute inset-0 bg-gradient-to-r from-gray-100 via-grey-300 to-blue-300 opacity-30"
        // style={{ backgroundImage: `url(${bg2})` }}
      ></div>
      <div className="flex flex-col lg:flex-row w-full  items-center justify-center gap-8">
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          {/* <img
            src={man}
            alt="Developer"
            className="h-[400px] lg:h-[600px] mt-5 z-20 hover:scale-3d"
          /> */}
          <img
            src={man}
            alt="Developer"
            className="h-[400px] lg:h-[600px] mt-5 z-20 transform transition-transform duration-400 hover:scale-105"
          />
        </div>

        <div className="w-full lg:w-1/2 text-center space-y-6 z-10 transform transition-transform duration-800 hover:scale-105">
          <h4 className="text-2xl text-gray-600">Hello, it's me</h4>
          <h1 className="text-4xl font-bold text-gray-800">Fule Prashant</h1>
          <h2 className="text-2xl text-gray-700">
            And I'm a{" "}
            <span className="text-3xl text-red-500">React.js Developer</span>
          </h2>
          <p className=" text-2xl lg:text-xl text-black">
            I'm a passionate React.js developer with a strong foundation in
            building dynamic, responsive, and scalable web applications. I focus
            on writing clean code, reusable components, and delivering seamless
            user experiences using modern frontend practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;

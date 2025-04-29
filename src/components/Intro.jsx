import React from "react";
import man from "../images/man.jfif";

const Intro = () => {
  return (
    <div className="h-full flex items-center justify-center px-4 bg-white mt-10">
      <div className="flex flex-col lg:flex-row w-full  items-center justify-center gap-8">
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img src={man} alt="Developer" className="h-[400px] lg:h-[600px]" />
        </div>

        <div className="w-full lg:w-1/2 text-center space-y-6">
          <h4 className="text-2xl text-gray-600">Hello, it's me</h4>
          <h1 className="text-4xl font-bold text-gray-800">Fule Prashant</h1>
          <h2 className="text-2xl text-gray-700">
            And I'm a{" "}
            <span className="text-3xl text-red-500">React.js Developer</span>
          </h2>
          <p className=" text-2xl lg:text-xl text-gray-600">
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

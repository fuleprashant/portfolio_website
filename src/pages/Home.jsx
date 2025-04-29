import React from "react";
import Intro from "../components/Intro";
import Specialization from "../components/Specialization";

const Home = () => {
  return (
    <div className="mb-5">
      <Intro />
      <hr className="mt-20" />
      <Specialization />
    </div>
  );
};

export default Home;

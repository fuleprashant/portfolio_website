import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const FirstLayout = () => {
  return (
    <div className="container mx-auto flex flex-col relative">
      <div className="sticky top-0 z-20">
        <Navbar />
      </div>
      <hr />
      <main className="bg-white  ">
        <Outlet />
      </main>
      <hr />
      <Footer />
    </div>
  );
};

export default FirstLayout;

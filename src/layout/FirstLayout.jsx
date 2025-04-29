import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const FirstLayout = () => {
  return (
    <div className="container mx-auto flex flex-col min-h-screen relative bg-[url('/images/bgimage.jfif')] bg-cover bg-center bg-no-repeat ">
      <div className="sticky top-0 h-">
        <Navbar />
      </div>
      <hr />
      <main className="flex-1 bg-white">
        <Outlet />
      </main>
      <hr />
      <Footer />
    </div>
  );
};

export default FirstLayout;

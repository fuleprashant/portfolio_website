import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import FirstLayout from "./layout/FirstLayout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/", // Root path for the layout
      element: <FirstLayout />, // The layout wrapper
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/skills",
          element: <Skills />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <div className=" text-black">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;

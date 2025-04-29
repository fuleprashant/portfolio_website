import React from "react";
import hrms from "../images/hrms.jfif";
import hotel from "../images/hotel.jfif";
import lancer from "../images/lancer.jfif";
import jim from "../images/thedigit.jfif";

const About = () => {
  return (
    <div className="mt-14 mx-auto mb-5">
      <div className="text-3xl md:text-4xl text-left m-5 md:m-0">
        NAME : Fule Prashant B.
      </div>
      <p className="mx-5 md:mx-0  text-left text-xl md:text-2xl mt-5 ">
        A passionate React.js Developer who loves crafting smooth and dynamic
        web experiences.
      </p>
      <p className="mx-5 md:mx-0 text-left text-xl md:text-2xl mt-5 ">
        I have 1.5+ years of experience in React.js and Javascipt..currently i
        work in the technobrain bussiness solution which is localted in
        ahmedabad.
      </p>
      <p className="mx-5 md:mx-0 text-left text-xl md:text-2xl mt-5">
        My role here is build the frontend part of the webApplication.. and
        intrigrate API .. communicate with backend developers and testers for
        the work and build the responsive websites
      </p>

      <div className="mt-10 mx-5 md:mx-0">
        <div className="text-2xl font-bold">PROJECTS</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-5 ">
          <div className="w-80  bg-blue-100 mx-auto">
            <img src={hrms} alt="" className="w-full" />
            <h4 className="text-2xl font-bold m-3 text-left">HRMS</h4>
            <div className=" text-left m-2 font-bold">
              Project information :{" "}
              <span className=" font-extralight">
                This projects is built for the company when i was joining here
                as an intern this project backend is in the php - laravel and
                frontend part was built in react.js
              </span>
            </div>
            <div className="text-left m-2 font-bold">
              MY role:
              <span className=" font-extralight">
                i built the loan page of any employee want to apply the loas
                built the UI for that and intigrate the API which i got from the
                backend developer.
              </span>
            </div>
          </div>
          <div className="w-80  bg-blue-100 mx-auto">
            <img src={hotel} alt="" className="w-full" />
            <h4 className="text-2xl font-bold m-3 text-left">
              HOTEL MANAGMENT SYSTEM
            </h4>
            <div className=" text-left m-2 font-bold">
              Project information :{" "}
              <span className=" font-extralight">
                This projects is built for the austrailian client.this project
                backend is in the .net and database is SQL and frontend part was
                built in react.js
              </span>
            </div>
            <div className="text-left m-2 font-bold">
              MY role:
              <span className=" font-extralight">
                i built the booking the hotel page , customer feed back
                component , Admin dashboard design.. , Admin confirmation about
                the booking .. i built the UI of this pages and intigrate the
                API
              </span>
            </div>
          </div>
          <div className="w-80  bg-blue-100 mx-auto">
            <img src={lancer} alt="" className="w-full" />
            <h4 className="text-2xl font-bold m-3 text-left">LANCER</h4>
            <div className="text-left m-2 font-bold">
              Project Overview:
              <span className="font-extralight">
                Lancer Soda Shop is a web-based application built to manage soda
                product sales and customer orders. The platform includes an
                interactive UI for browsing sodas, placing orders, and managing
                inventory. The frontend is developed with React.js, and the
                backend is powered by AngelScript with SQL for data storage.
              </span>
            </div>

            <div className="text-left m-2 font-bold">
              MY role:
              <span className=" font-extralight">
                i built the multiple functionality in this project like when
                longpress soda come with mapping of the soda can which is handle
                by backend i apply the APIs and intigrate the multiple API
              </span>
            </div>
          </div>
          <div className="w-80   bg-blue-100 mx-auto">
            <img src={jim} alt="" className="w-full" />
            <h4 className="font-bold text-2xl">THE_DIGIT</h4>
            <div className="text-left m-2 font-bold">
              Project Overview:
              <span className="font-extralight">
                The_digit project is the finance domain project where there are
                two type of login user 1 is borrower who apply for the loan and
                other is MLO who decide that which type of banks are giver this
                borrower with this type of intrets loan. tack stack of this
                project is in backend we use .net with sql and for frontend we
                use react.js
              </span>
            </div>
            <div className="text-left m-2 font-bold">
              MY role:
              <span className=" font-extralight">
                i built the multiple functionality in this project apply the
                borrower side API and mlo side api that when the borrower apply
                for the loan mlo can give it either approve and decline
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

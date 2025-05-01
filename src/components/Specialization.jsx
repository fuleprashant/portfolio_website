// import React from "react";
// import html from "../images/html 2.png";
// import css from "../images/css 2.png";
// import javascript from "../images/javscript 2.png";
// import tailwindcss from "../images/tailwinnd css.png";
// import react from "../images/react pic.png";
// import redux from "../images/redux.png";

// const Specialization = () => {
//   return (
//     <div className=" relative">
//       <div
//         className="absolute inset-0 bg-gradient-to-l from-gray-100 via-grey-300 to-blue-300 opacity-30"
//         // style={{ backgroundImage: `url(${bg2})` }}
//       ></div>
//       <div className="p-5 text-5xl font-bold text-center my-5 ">
//         Specialazation +++
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-5   ">
//         <div className="flex flex-col text-center items-center border border-blue-500 p-8 m-5">
//           <img src={html} alt="" className="w-80 h-50 " />
//           <div className="text-4xl mt-2 ">HTML</div>
//         </div>
//         <div className="flex flex-col text-center items-center border border-blue-500 p-8 m-5">
//           <img src={css} alt="" className="w-80 h-50" />
//           <div className="text-4xl mt-2 ">CSS</div>
//         </div>
//         <div>
//           <div className="flex flex-col text-center items-center border border-blue-500 p-8 m-5">
//             <img src={tailwindcss} alt="" className="w-80 h-50" />
//             <div className="text-4xl mt-2 ">TAILWIND CSS</div>
//           </div>
//         </div>
//         <div className="flex flex-col text-center items-center border border-blue-500 m-5">
//           <img src={javascript} alt="" className="w-80 h-50" />
//           <div className="text-4xl mt-2 ">JAVASCRIPT</div>
//         </div>
//         <div className="flex flex-col text-center items-center border border-blue-500 p-8 m-5">
//           <div>
//             <img src={react} alt="" className="w-80 h-50" />
//             <div className="text-4xl mt-2 ">REACT</div>
//           </div>
//         </div>
//         <div className="flex flex-col text-center items-center border border-blue-500 p-5 m-5">
//           <img src={redux} alt="" className="w-80 h-50" />
//           <div className="text-4xl mt-2 ">REDUX-TOOLKIT</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Specialization;
import React from "react";
import html from "../images/html 2.png";
import css from "../images/css 2.png";
import javascript from "../images/javscript 2.png";
import tailwindcss from "../images/tailwinnd css.png";
import react from "../images/react pic.png";
import redux from "../images/redux.png";

const specializationData = [
  { label: "HTML", img: html },
  { label: "CSS", img: css },
  { label: "TAILWIND CSS", img: tailwindcss },
  { label: "JAVASCRIPT", img: javascript },
  { label: "REACT", img: react },
  { label: "REDUX-TOOLKIT", img: redux },
];

const Specialization = () => {
  return (
    <div className="relative mb-5 ">
      <div className="absolute inset-0 bg-gradient-to-l from-blue-200 via-gray-300 to-blue-300 opacity-30 rounded-3xl"></div>

      <div className="p-5 text-5xl font-bold text-center my-5">
        Specialization +++
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-5">
        {specializationData.map(({ label, img }) => (
          <div
            key={label}
            className="flex flex-col text-center items-center border-[3px] border-blue-400 p-8 m-5 rounded-tl-[40px] rounded-br-[40px] transform transition-transform duration-800 hover:scale-110"
          >
            <img src={img} alt={label} className="w-80 h-50" />
            <div className="text-4xl mt-2">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialization;

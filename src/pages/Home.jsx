// import React from "react";
// import Intro from "../components/Intro";
// import Specialization from "../components/Specialization";
// import BGImage from "../images/bgimages.jpg";
// const Home = () => {
//   return (
//     <div className="relative mb-5">
//       {/* Background Image Layer */}
//       <div
//         className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-20 z-0"
//         style={{ backgroundImage: `url(${BGImage})` }}
//       ></div>

//       {/* Content Layer */}
//       <div className="relative z-10">
//         <Intro />
//         <hr className="mt-20" />
//         <Specialization />
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import Intro from "../components/Intro";
import Specialization from "../components/Specialization";

const Home = () => {
  return (
    <div className="mb-">
      <Intro />
      {/* <hr className="" /> */}
      <Specialization />
    </div>
  );
};

export default Home;

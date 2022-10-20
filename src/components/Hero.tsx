import React from "react";
import forestLake from "../assets/forestLake.jpg";

// const Hero = () => {
//     return (
//         <div id="Hero" className="">
//             {/* <p className="absolute z-50 text-[36px] font-bold text-white">
//                 Michael Paterson
//             </p> */}
//             {/* <div className="bg-black absolute bg-opacity-80 h-screen w-screen"></div> */}
//             {/* <img
//                 className="w-screen h-screen aspect-auto object-cover"
//                 src={forestLake}
//                 alt="Forest Lake"
//             /> */}
//         </div>
//     );
// };

const Hero = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center hero">
            <div className="hero-text text-center font-lato">
                <h1 className="text-5xl font-bold text-white">
                    I am Michael Paterson
                </h1>
                <p className="mt-3 text-3xl text-gray-300">
                    I build User Experiences.
                </p>
                <button className="projects-button px-6 border-gray-300 border-4 rounded-md text-gray-300 mt-12 font-bold py-2 text-xl">
                    <a href="#Projects">Projects</a>
                </button>
            </div>
        </div>
    );
};

export default Hero;

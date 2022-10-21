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
        <div className="w-screen h-screen flex items-center justify-center hero drop-shadow-lg">
            <div className="hero-text text-center font-lato">
                <h1 className="text-3xl md:text-5xl font-bold text-white">
                    I am Michael Paterson
                </h1>
                <p className="mt-3 text-xl md:text-3xl text-gray-300">
                    I build User Experiences.
                </p>
                <a href="#Projects">
                    <button className="projects-button px-4 py-1 md:px-6 md:py-2 border-gray-200 border-4 rounded-md text-gray-200 mt-12 font-bold text-md md:text-xl">
                        Projects
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Hero;

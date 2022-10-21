import React, { useState } from "react";
import { ISkill, skillSet } from "../data/skillSet";
import { FaCss3, FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

// Iterate through skills dataset
// For each item in dataset, render a card with the tech icon and name
// If number of icons exceeds width of screen, employ a carousel feature
// Drag carousel to view more skill cards
// Hover over skill icon to make it bounce
const SkillsBar = () => {
    return (
        <div className="flex flex-col justify-center text-gray-300 font-lato">
            {/* SkillCards */}
            <div className="container mt-2 flex space-x-20 justify-center">
                <div className="card flex flex-col items-center justify-center">
                    <FaReact className="w-14 h-14 text-[#61DBFB] card-icon" />
                    <h2 className="mt-2 text-lg">React</h2>
                </div>
                <div className="card flex flex-col items-center justify-center">
                    <FaCss3Alt className="w-14 h-14 text-[#264de4] card-icon" />
                    <h2 className="mt-2 text-lg">CSS</h2>
                </div>
                <div className="card flex flex-col items-center justify-center">
                    <FaHtml5 className="w-14 h-14 text-[#f06529] card-icon" />
                    <h2 className="mt-2 text-lg">HTML</h2>
                </div>
                <div className="card flex flex-col items-center justify-center">
                    <FaJs className="w-14 h-14 text-[#f0db4f] card-icon" />
                    <h2 className="mt-2 text-lg">JavaScript</h2>
                </div>
                <div className="card flex flex-col items-center justify-center">
                    <SiTailwindcss className="w-14 h-14 text-[#0891b2] card-icon" />
                    <h2 className="mt-2 text-lg">Tailwind CSS</h2>
                </div>
            </div>
            {/* Row 2 */}
            <div className="container mt-4 flex space-x-20 justify-center">
                <div className="card flex flex-col items-center justify-center">
                    <TbBrandNextjs className="w-14 h-14 text-[#fff] card-icon" />
                    <h2 className="mt-2 text-lg">NextJs</h2>
                </div>
                <div className="card flex flex-col items-center justify-center">
                    <SiVite className="w-14 h-14 text-[#a855f7] card-icon" />
                    <h2 className="mt-2 text-lg">Vite</h2>
                </div>
            </div>
            {/* End SkillCards */}
        </div>
    );
};

export default SkillsBar;

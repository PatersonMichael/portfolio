import React from "react";
import SkillsBar from "./SkillsBar";

const Skills = () => {
    return (
        <div
            id="Skills"
            className="w-screen bg-body text-gray-300 h-[50vh] pt-4 font-lato flex flex-col items-center space-y-10">
            <h1 className="text-center mt-4 text-2xl font-bold">My Skills</h1>
            <div>
                <SkillsBar />
            </div>
        </div>
    );
};

export default Skills;

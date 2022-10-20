import React from "react";

const Nav = () => {
    return (
        <div className="font-lato">
            <nav className="bg-black fixed z-50 w-[100vw] h-14 flex items-center justify-between">
                <h1 className="text-white font-bold text-xl pl-8">
                    Michael Paterson
                </h1>
                <ul className="text-white flex flex-row pr-11 font-bold text-xl items-center justify-end">
                    <li className="pr-6 align-middle">
                        <a href="#Skills">Skills</a>
                    </li>
                    <li className="pr-6">
                        <a href="#Projects">Projects</a>
                    </li>
                    <li className="pr-6">
                        <button className="hire-button px-6 bg-gray-200 border-2 border-gray-200 rounded-md text-black font-bold py-1">
                            <a href="#Contact">Hire Me</a>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;

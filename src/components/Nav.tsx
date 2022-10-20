import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const Nav = () => {
    const [navbarOpen, setNavBarOpen] = useState(false);

    const handleToggle = () => {
        setNavBarOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setNavBarOpen(false);
    };

    return (
        <div className="font-lato">
            {/* Normal Nav */}
            <nav className="bg-black fixed z-50 w-[100vw] h-14 flex items-center justify-between">
                <h1 className="text-white font-bold text-2xl pl-8">
                    <a onClick={() => closeMenu()} href="#">
                        Michael Paterson
                    </a>
                </h1>
                {/* Small Nav */}
                <nav className="nav-small md:hidden text-white pr-11 mt-2 z-1 relative">
                    <button
                        onClick={handleToggle}
                        className="cursor-pointer hover:animate-pulse">
                        {navbarOpen ? (
                            <MdClose
                                style={{
                                    color: "#fff",
                                    width: "40px",
                                    height: "40px",
                                }}
                            />
                        ) : (
                            <FiMenu
                                style={{
                                    color: "#fff",
                                    width: "40px",
                                    height: "40px",
                                }}
                            />
                        )}
                    </button>
                    <ul
                        className={`menuNav ${
                            navbarOpen ? " showMenu" : ""
                        } font-bold space-y-6 text-xl`}>
                        <a
                            className="hover:animate-pulse mt-4"
                            onClick={() => closeMenu()}
                            href="#Skills">
                            Skills
                        </a>
                        <a
                            className="hover:animate-pulse"
                            onClick={() => closeMenu()}
                            href="#Skills">
                            Projects
                        </a>
                        <a
                            className="hover:animate-pulse"
                            onClick={() => closeMenu()}
                            href="#Skills">
                            Hire Me
                        </a>
                    </ul>
                </nav>
                {/* End Small Nav */}
                <ul className="text-white hidden md:flex flex-row pr-11 font-bold text-xl items-center justify-end">
                    <li className="pr-6 align-middle">
                        <a href="#Skills">Skills</a>
                    </li>
                    <li className="pr-6">
                        <a href="#Projects">Projects</a>
                    </li>
                    <li className="pr-6">
                        <a href="#Contact">
                            <button className="hire-button px-6 bg-gray-200 border-2 border-gray-200 rounded-md text-black font-bold py-1">
                                Hire Me
                            </button>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;

"use client";
import "../css/Navbar.css";
import { useState, useEffect, useRef } from "react";
import { Link } from 'react-scroll';

interface NavigationProps {
    currentIndex: number;
}

export default function Navigation({ currentIndex }: NavigationProps) {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const menuElement = menuRef.current;
        if (menuElement) {
            if (isOpen) {
                menuElement.style.maxHeight = menuElement.scrollHeight + "px";
            } else {
                menuElement.style.maxHeight = "0";
            }
        }
    }, [isOpen]);

    return (
        <nav className="nav z-50 flex w-full flex-wrap md:flex-nowrap fixed bg-retro-offwhite items-center align-middle border-b-2 border-black divide-black md:divide-x-2 md:divide">
            <div className="nav-component h-16 flex w-fit justify-center items-center align-middle aspect-square">
                <i className="fa-solid fa-diamond text-dark-primary p-2"/>
            </div>
            <div className="nav-component h-16 flex w-fit text-nowrap justify-center items-center align-middle md:p-6">
                <h1 className="text-dark-primary font-built-titling italic font-semibold text-xl md:text-3xl p-2">
                    Bonifasius Martin
                </h1>
            </div>

            <input
                className="menu-btn hidden"
                type="checkbox"
                id="menu-btn"
                checked={isOpen}
                onChange={() => setIsOpen(!isOpen)}
            />
            <label
                htmlFor="menu-btn"
                className="menu-icon cursor-pointer md:hidden relative select-none h-16 flex justify-end items-center align-middle p-4 grow"
            >
                <span className="navicon bg-grey-darkest flex items-center relative"></span>
            </label>

            <ul
                ref={menuRef}
                className={`menu transition-max-height duration-500 ease-in-out flex justify-end list-reset w-full ${isOpen ? "flex-wrap flex-row" : "max-h-0"} md:flex-nowrap md:flex bg-inherit gap-4 px-4 md:h-16 items-center align-middle list-none`}
            >
                <li className={`relative group bg-inherit w-fit m-1 my-2 ${currentIndex === 0 ? 'active' : ''}`}>
                    <div className="w-full h-full absolute top-0 left-0 bg-black transition-transform z-0 "></div>
                    <Link
                        to="hero"
                        spy={true}
                        smooth={true}
                        duration={800}
                        className={`link font-mono md:text-base font-bold h-full bg-retro-darkred p-1 flex text-nowrap w-fit border-black border-2 text-retro-secondarywhite group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-500 ease-out relative z-10 px-3 hover:cursor-pointer`}
                    >
                        Home
                    </Link>
                </li>
                <li className={`relative group bg-inherit w-fit m-1 my-2 ${currentIndex === 1 ? 'active' : ''}`}>
                    <div className="w-full h-full absolute top-0 left-0 bg-black transition-transform z-0 "></div>
                    <Link
                        to="bio"
                        spy={true}
                        smooth={true}
                        duration={800}
                        className={`link font-mono md:text-base font-bold h-full bg-[#940000] p-1 flex text-nowrap w-fit border-black border-2 text-retro-secondarywhite group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-500 ease-out relative z-10 px-3 hover:cursor-pointer`}
                    >
                        Bio
                    </Link>
                </li>
                <li className={`relative group bg-inherit w-fit m-1 my-2 ${currentIndex === 2 ? 'active' : ''}`}>
                    <div className="w-full h-full absolute top-0 left-0 bg-black transition-transform z-0 "></div>
                    <Link
                        to="projects"
                        spy={true}
                        smooth={true}
                        duration={800}
                        className={`link font-mono md:text-base font-bold h-full bg-[#c70000] p-1 flex text-nowrap w-fit border-black border-2 text-retro-secondarywhite group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-500 ease-out relative z-10 px-3 hover:cursor-pointer`}
                    >
                        Projects
                    </Link>
                </li>
                <li className={`relative group bg-inherit w-fit m-1 my-2 ${currentIndex === 3 ? 'active' : ''}`}>
                    <div className="w-full h-full absolute top-0 left-0 bg-black transition-transform z-0 "></div>
                    <Link
                        to="experience"
                        spy={true}
                        smooth={true}
                        duration={800}
                        className={`link font-mono md:text-base font-bold h-full bg-[#e77500] p-1 flex text-nowrap w-fit border-black border-2 text-retro-secondarywhite group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-500 ease-out relative z-10 px-3 hover:cursor-pointer`}
                    >
                        Experience
                    </Link>
                </li>
                <li className={`relative group bg-inherit w-fit m-1 my-2 ${currentIndex === 3 ? 'active' : ''}`}>
                    <div className="w-full h-full absolute top-0 left-0 bg-black transition-transform z-0 "></div>
                    <Link
                        to="skills"
                        spy={true}
                        smooth={true}
                        duration={800}
                        className={`link font-mono md:text-base font-bold h-full bg-[#eeb400] p-1 flex text-nowrap w-fit border-black border-2 text-retro-secondarywhite group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-500 ease-out relative z-10 px-3 hover:cursor-pointer`}
                    >
                        Skills
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

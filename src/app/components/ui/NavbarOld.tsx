"use client"

import React, { useState, useEffect } from "react";
import "../css/Navbar.css";
import $ from "jquery";

export default function Navbar() {
    useEffect(() => {
        $(document).ready(function () {
            $('#nav-icon3').click(function () {
                $(this).toggleClass('open');
            });
        });
    }, []);

    return (
        <div>
            {/* Desktop Navbar */}
            <div className="w-full fixed bg-retro-offwhite items-center align-middle border-b-2 border-black divide-black divide-x-2 divide hidden md:flex">
                <div className="nav-component h-12 flex w-fit justify-center items-center align-middle">
                    <i className="fa-solid fa-diamond text-dark-primary p-2"></i>
                </div>
                <div className="nav-component h-12 flex w-fit text-nowrap justify-center items-center align-middle">
                    <h1 className="text-dark-primary font-built-titling italic font-semibold text-lg p-2">
                        Bonifasius Martin
                    </h1>
                </div>
                <div className="nav-component h-12 flex w-full justify-end items-center align-middle gap-4 px-4">
                    {['about me', 'skills', 'work', 'experience'].map((text, index) => (
                        <div className="relative group" key={index}>
                            <a
                                href=""
                                className={`font-mono text-xs font-bold h-full bg-retro-${['darkred', 'bloodred', 'red', 'brightyellow'][index]} p-1 flex text-nowrap w-fit border-black border-2 z-50 text-retro-secondarywhite group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-500 ease-out`}
                            >
                                {text}
                            </a>
                            <div className="w-full h-full absolute top-0 left-0 bg-black -z-10 transition-transform"></div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Mobile Navbar */}
            <div className="w-full fixed bg-retro-offwhite items-center align-middle border-b-2 border-black divide-black divide-x-2 divide flex md:hidden">
                <div className="nav-component h-12 flex w-fit justify-center items-center align-middle">
                    <i className="fa-solid fa-diamond text-dark-primary p-2"></i>
                </div>
                <div className="nav-component h-12 flex w-fit text-nowrap justify-center items-center align-middle">
                    <h1 className="text-dark-primary font-built-titling italic font-semibold text-lg p-2">
                        Bonifasius Martin
                    </h1>
                </div>
                <div className="nav-component h-12 flex w-fit text-nowrap justify-center items-center align-middle">
                    <div id="nav-icon3">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                {/* <div className="nav-component h-12 flex w-full justify-end items-center align-middle gap-4 px-4">
                    {['about me', 'skills', 'work', 'experience'].map((text, index) => (
                        <div className="relative group" key={index}>
                            <a
                                href=""
                                className={`font-mono text-xs font-bold h-full bg-retro-${['darkred', 'bloodred', 'red', 'brightyellow'][index]} p-1 flex text-nowrap w-fit border-black border-2 z-50 text-retro-secondarywhite group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-500 ease-out`}
                            >
                                {text}
                            </a>
                            <div className="w-full h-full absolute top-0 left-0 bg-black -z-10 transition-transform"></div>
                        </div>
                    ))}
                </div> */}
            </div>
        </div>
    );
}

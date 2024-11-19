"use client";

import React, { useState, useEffect } from "react";
import anime from "animejs";
import './css/Grid.css';

const GridComponent = () => {
    const [toggled, setToggled] = useState(true);
    const [currentComponent, setCurrentComponent] = useState(1);
    const [state, setState] = useState({
        columns: 0,
        rows: 0,
        total: 1,
    });

    const toggle = () => {
        setToggled(!toggled);
    };

    const handleStagger = (i: React.MouseEvent<HTMLDivElement>) => {
        toggle()
        const { columns, rows } = state;
        const el = parseInt(i.currentTarget.id);

        // Start stagger animation
        anime({
            targets: ".grid-item",
            delay: anime.stagger(50, { grid: [columns, rows], from: el }),
            // scale: [
            //     { value: .1, easing: 'easeOutSine', duration: 500 },
            //     { value: 1, easing: 'easeInOutQuad', duration: 1200 }
            // ],
            opacity: toggled? 1:0,
        });

        // Start component transition animation in parallel
        if (!toggled) {
            setCurrentComponent((prev) => (prev % 3) + 1);
        }
        // setCurrentComponent((prev) => (prev % 3) + 1);
    };

    const getGridSize = () => {
        const grid = document.getElementById("grid");
        const columns = Math.floor(grid?.offsetWidth / 50);
        const rows = Math.floor(grid?.offsetHeight / 50);

        setState({ columns, rows, total: rows * columns });
        anime({
            targets: ".grid-item",
            duration: 0,
            easing: "linear",
        });
    };

    useEffect(() => {
        getGridSize();
        window.addEventListener("resize", getGridSize);

        return () => {
            window.removeEventListener("resize", getGridSize);
        };
    }, []);

    const { total } = state;

    return (
        <div className="component tiles h-screen w-screen overflow-hidden flex flex-wrap md:px-8 md:py-8 py-16 m-0 align-middle justify-center items-center">
            <div className="bg-dark-secondary rounded-lg border-4 border-black w-[90%] h-[90%] p-4 pb-16 relative">
                <div className="relative w-full h-full border-2 border-black">
                    <div className={`absolute top-0 left-0 w-full h-full flex justify-center items-center align-middle transition-opacity duration-500 ${(currentComponent === 1) ? 'opacity-100' : 'opacity-0'} bg-red-600 text-white`}>
                        <h1>COMPONENT 1</h1>
                    </div>
                    <div className={`absolute top-0 left-0 w-full h-full flex justify-center items-center align-middle transition-opacity duration-500 ${(currentComponent === 2) ? 'opacity-100' : 'opacity-0'} bg-blue-600 text-white`}>
                        <h1>COMPONENT 2</h1>
                    </div>
                    <div className={`absolute top-0 left-0 w-full h-full flex justify-center items-center align-middle transition-opacity duration-500 ${(currentComponent === 3) ? 'opacity-100' : 'opacity-0'} bg-green-600 text-white`}>
                        <h1>COMPONENT 3</h1>
                    </div>


                    <div id="grid" className="z-40 w-full h-full divide-x-2 divide-y-2 ">
                        {Array.from({ length: total }).map((_, index) => (
                            <div
                                key={index}
                                id={index.toString()}
                                className="grid-item"
                                onClick={handleStagger}
                                style={{
                                    width: 50,
                                    height: 50,
                                    backgroundColor: "#fff",
                                }}
                            />
                        ))}
                    </div>
                </div>

                <div id="navigation" className="w-full flex justify-center items-center align-middle gap-4">
                    <button className={`rounded-full aspect-square w-4 bg-red-600 transition-all duration-500 ${(currentComponent === 1 && toggled) ? 'bg-gradient-to-br from-red-600 via-red-500 to-red-200 shadow-[0_0_10px_2px_rgba(255,0,0,0.8)] ' : ''}`}></button>
                    <button className={`rounded-full aspect-square w-4 bg-blue-600 transition-all duration-500 ${(currentComponent === 2 && toggled) ? 'bg-gradient-to-br from-blue-600 via-blue-500 to-blue-200 shadow-[0_0_10px_2px_rgba(0,0,255,0.8)] ' : ''}`}></button>
                    <button className={`rounded-full aspect-square w-4 bg-green-600 transition-all duration-500 ${(currentComponent === 3 && toggled) ? 'bg-gradient-to-br from-green-600 via-green-500 to-green-200 shadow-[0_0_10px_2px_rgba(0,255,0,0.8)] ' : ''}`}></button>
                </div>
            </div>
        </div>
    );
};

export default GridComponent;

"use client"

import React, { useState, useEffect } from "react";
import anime from "animejs";
import randomColor from "randomcolor";
import "./css/Tiles.css";

export default function Tiles() {
    const [state, setState] = useState({
        columns: 0,
        rows: 0,
        total: 1,
    });

    const handleStagger = (i) => {
        const { columns, rows } = state;
        const el = parseInt(i.target.id);
        anime({
            targets: ".grid-item",
            backgroundColor: randomColor(),
            delay: anime.stagger(50, { grid: [columns, rows], from: el }),
        });
    };

    const getGridSize = () => {
        const columns = Math.floor(document.body.clientWidth / 50);
        const rows = Math.floor(document.body.clientHeight / 50);

        setState({ columns, rows, total: rows * columns });
        anime({
            targets: ".grid-item",
            backgroundColor: "#fff",
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
        <div
            className="component tiles max-w-screen max-h-screen overflow-hidden flex flex-wrap bg-black m-0 align-middle"
        >
            <div id="grid" className="">
                {Array.from({ length: total }).map((_, index) => (
                    <div
                        key={index}
                        id={index.toString()}
                        className="grid-item border border-opacity-20 border-1 border-dark-primary"
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
    );
}

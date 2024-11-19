import React, { useState, useEffect } from "react";
import "./css/Banner.css"

export default function Banner() {

    return (
        <div className="component">
            <div id="app">
                <div id="star-container">
                    <div id="star-pattern"></div>
                    <div id="star-gradient-overlay"></div>
                </div>
                <div id="stripe-container">
                    <div id="stripe-pattern"></div>
                </div>
            </div>
        </div>
    );
}

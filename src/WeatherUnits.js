import React from "react";

export default function WeatherUnits(props) {
    return (
        <div className="WeatherUnits">
        <span className="temperature">{Math.round(props.celcius)}</span>
        <span className="unit">°C</span> 
        </div>
    );
    }

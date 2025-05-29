import React, { useState } from "react";

export default function WeatherUnits(props) {
    const [unit, setUnit] = useState("metric");

    function changeToFahrenheit(event) {
        event.preventDefault();
        setUnit("imperial");
    }

    function changeToCelcius(event) {
        event.preventDefault();
        setUnit("metric");
    }

    function fahrenheit() {
        return (props.celcius * 9) / 5 + 32;
    }


    if (unit === "metric") {
    return (
        <div className="WeatherUnits">
        <span className="temperature">{Math.round(props.celcius)}</span>
        <span className="unit">°C │ <a href="/" onClick={changeToFahrenheit}>°F</a></span> 
        </div>
    );
    } else {
        return (
             <div className="WeatherUnits">
        <span className="temperature">{Math.round(fahrenheit())}</span>
            <span className="unit"><a href="/" onClick={changeToCelcius}>°C</a> │ °F</span> 
        </div>
        )
    }
}
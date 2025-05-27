import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
        ready: true,
        temperature: response.data.temperature.current,
        city: response.data.city,
        wind: response.data.wind.speed,
        date: new Date(response.data.time * 1000),
        humidity: response.data.temperature.humidity,
        iconUrl: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
        description: response.data.condition.description,
    });
        }

    if (weatherData.ready) {
    return (<div className="Weather">
        <form>
            <div className="row mt-3">
                <div className="col-9">
            <input 
            type="search"
            placeholder="Enter city.."
            className="form-control"
            autoFocus="on" />
            </div>
            <div className="col-3">
            <input 
            type="submit"
            value="Search"
            autoFocus="on"
            className="btn btn-primary w-100" />
                 </div>
        </div>
        </form>
        
        <h1>{weatherData.city}</h1>
        <ul>
            <li><FormattedDate date={weatherData.date} /></li>
            <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src={weatherData.iconUrl} alt="Mostly cloudy" />
                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                <span className="unit">°C</span>
                </div>
                    <div className="col-6">
                        <ul>
                            <li>Humidity: {weatherData.humidity}%</li>
                            <li>Wind: {weatherData.wind} km/h</li>
                        </ul>
                    </div>
            </div>
    </div>);
} else {
const apiKey="fea6579f5ctf53bb7491ae80ac32o60f";
    let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
}
}
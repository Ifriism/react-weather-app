import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";


export default function Weather(props) {
    const [city, setCity] = useState(props.defaultCity);
    const [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
        ready: true,
        coordinates: response.data.coordinates,
        temperature: response.data.temperature.current,
        city: response.data.city,
        wind: response.data.wind.speed,
        date: new Date(response.data.time * 1000),
        humidity: response.data.temperature.humidity,
        iconUrl: response.data.condition.icon_url,
        description: response.data.condition.description,
    });
        }

        function search() {
        const apiKey="fea6579f5ctf53bb7491ae80ac32o60f";
        let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        }
        
        function handleSubmit(event) {
            event.preventDefault();
            search();
        }

            function handleChange(event) {
            setCity(event.target.value);
            }


    if (weatherData.ready) {
    return (<div className="Weather">
        <form onSubmit={handleSubmit}>
            <div className="row mt-3">
                <div className="col-9">
            <input 
            type="search"
            placeholder="Enter city.."
            className="form-control"
            autoFocus="on"
            onChange={handleChange} />
            </div>
            <div className="col-3">
            <input 
            type="submit"
            value="Search"
            autoFocus="on"
            className="button w-100" />
                 </div>
        </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates}/>
    </div>
    );
    
} else {
    search();
    return "Loading..";
}
}
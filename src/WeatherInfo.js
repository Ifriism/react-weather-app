import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";


export default function WeatherInfo(props) {
    return (      
        <div className="WeatherInfo">

         <h1>{props.data.city}</h1>

        <ul>
            <li><FormattedDate date={props.data.date} /></li>
            <li className="text-capitalize">{props.data.description}</li>
            </ul>

            <div className="row">
                <div className="col-6">
               <div className="currentTemperature">
                    <img src={props.data.iconUrl} alt="Weather icons" />
                    {Math.round(props.data.temperature)}°C
              </div>
                </div>
                
                    <div className="col-6">
                        <div className="weatherConditions">
                        <ul>
                            <li className="humidity">Humidity: {props.data.humidity}%</li>
                            <li>Wind: {props.data.wind} km/h</li>
                        </ul>
                    </div>
                    </div>
            </div>
            </div>
            );
}
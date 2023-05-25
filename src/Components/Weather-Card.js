import { City } from "./Styled/City-Styled";
import useWeatherData from "./WeatherData";
// import React, { useState, useEffect } from 'react';


function Weather() {
    const weatherData = useWeatherData();
 

    return (
        <>
        {weatherData && (
            <City>
                <h1>{weatherData.weather.name}</h1>
                <h1>{Math.round((weatherData.weather.main.temp - 273.15) * 9/5 + 32)}</h1>
                <h3>{weatherData.weather.weather[0].description}</h3>
                <h3>H: {Math.round((weatherData.weather.main.temp_max - 273.15) * 9/5 + 32)} L: {Math.round((weatherData.weather.main.temp_min - 273.15) * 9/5 + 32)}</h3>
            </City>
        )}
        </>
    );
}
export default Weather;
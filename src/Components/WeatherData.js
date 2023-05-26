import React, { useState, useEffect } from 'react';


function useWeatherData() {
    //regular weather data api
    const [weatherData, setWeatherData] = useState(null);
    //one call weather api
    const [oneCallData, setOneCallData] = useState(null);
    const key = '6fd2a7e7bfa6dd9234d5df15d716d7d3';
    const oneCallKey = '3cbc362a18183f4956066be54250c647';

    useEffect(() => {
        if (!navigator.geolocation) {
            return 'Geolocation is not supported on your browser';
        } else {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                //chaining the promises together
                Promise.all([
                    //regular weather api call
                    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`).then(response => response.json()),
                    //one call weather api
                    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${oneCallKey}`).then(response => response.json())
                ])
                .then(([weatherData, oneCallData]) => {
                    //Merge the responses into one object
                    setWeatherData({ weather: weatherData, oneCall: oneCallData});
                    console.log(oneCallData);
                    //The api key might not work for the oneCall API
                })
                .catch(error => {
                    console.error('cannot retrieve data from the server', error);
                })
            })
        }
    }, []);

    return weatherData;
}

export default useWeatherData;
// import React, { useState, useEffect } from React;

// //Need to use state for the changes that will be happening 
// // we need to use an effect for retriving data from the api weather key
// //We need to use the geolocation api so the user can get there latitude and longitude to find their city location
// //We fetch the open weather api key and plug in our variables
// //fetch is promise based so we have to use response and catch to throw a new error 

// function getWeather() {
//     const [weatherData, setWeatherData] = useState(null);
//     const key = '6fd2a7e7bfa6dd9234d5df15d716d7d3';

//     useEffect(() => {
//         if (!navigator.geolocation) {
//             return 'Geolocation is not supported on your browser';
//         } else {
//             navigator.geolocation.getCurrentPosition((position) => {
//                 const lat = position.coords.latitude;
//                 const lon = position.coords.longitude;

//                 fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
//                 .then(response => {
//                     if (!response.ok) {
//                         throw new Error('Network response was not ok');
//                     }
//                     return response.json();
//                 })
//                 .then(data => setWeatherData(data)) 
//                 .catch(error => console.error('Cannot retrieve data from server', error))
//                 }, () => {
//                     console.log('Unable to retrieve your location');
//             })
//         }
//     }, []);

//     return (
//         <>

//         </>
//     )
// }

// export default getWeather;
//TODO Create a search bar so the user can search for a city 
import { useState } from "react";
import { SearchBarContainer, SearchField, SearchButton } from "./Styled/Search/Styled.SearchBar";
import { AddCity } from "./AddCity";
import useWeatherData from "./WeatherData"; 


export default function SearchBar() {
    const geoCoding =  process.env.REACT_APP_GEO_CODING_KEY;
    const weatherData = useWeatherData();
    //Store the cities that are searched into an array list
    const [cities, setCities] = useState([]);
    const [searchCity, setSearchCity] = useState('');
    const weatherAPIKey = process.env.REACT_APP_ONE_CALL;

    


    //Handle the city data search
    const handleSearch = () => {
        fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchCity}&appid=${geoCoding}`)
        .then(response => response.json())
        .then(data => {
            const lat = data[0].lat;
            const lon = data[0].lon;
            const cityName = data[0].name;

            fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${weatherAPIKey}`)
            .then(response => response.json())
            .then(weatherData => {
                setCities(prevCities => [...prevCities, { name: cityName, weather: weatherData }])
            })
        })
        .catch(error => console.error('An error has occured cant find city.', error));
    };

    const handleInputChange = (e) => {
        setSearchCity(e.target.value);
    };
 

    return (
        <>
        <SearchBarContainer>
            <SearchField  type="text" value={searchCity} onChange={handleInputChange} placeholder="Find a City..."></SearchField>
            <SearchButton onClick={handleSearch}>Search</SearchButton>
        </SearchBarContainer>
        {cities.map((city, index) => <AddCity key={index} city={city}  />)}
        </>
    );
}
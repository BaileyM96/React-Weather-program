//TODO Create a search bar so the user can search for a city 
import { useState } from "react";
import { SearchBarContainer, SearchField, SearchButton } from "./Styled/Search/Styled.SearchBar";
import useWeatherData from "./WeatherData";


export default function SearchBar() {
    const geoCoding =  process.env.REACT_APP_GEO_CODING_KEY;
    const weatherData = useWeatherData();
    const [searchCity, setSearchCity] = useState('');


    //Handle the city data search
    const handleSearch = () => {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchCity}&appid=${geoCoding}`).then(response => response.json())
        .then(data => console.log(data[0].name))
        .catch(error => {
            console.error('An error has occured while searching', error);
        });
    };

    const handleInputChange = (e) => {
        setSearchCity(e.target.value);
    };
 
console.log(geoCoding);
    return (
        <SearchBarContainer>
            <SearchField  type="text" value={searchCity} onChange={handleInputChange} placeholder="Find a City..."></SearchField>
            <SearchButton onClick={handleSearch}>Search</SearchButton>
        </SearchBarContainer>
    );
}
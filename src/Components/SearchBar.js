//TODO Create a search bar so the user can search for a city 
import { useState } from "react";
import { SearchBarContainer } from "./Styled/Search/Styled.SearchBar";
import { AddCity } from "./AddCity";
import { GlobalStyle } from "./Styled/Global.Style";

//Trying to use the search bar from semantic ui
import { SemanticSearch, SemanticButton } from "./Styled/Semantic-Ui/Semantic-Search";


export default function SearchBar() {
    const geoCoding =  process.env.REACT_APP_GEO_CODING_KEY;
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
                setSearchCity('');
            })
        })
        .catch(error => console.error('An error has occured cant find city.', error));
    };

    const handleInputChange = (e) => {
        setSearchCity(e.target.value);
    };
 

    return (
        <>
        <GlobalStyle />
        <SearchBarContainer>
            <SemanticSearch 
            size='large' 
            type='text' 
            value={searchCity} 
            onChange={handleInputChange} 
            placeholder='Find a city...'
            >
            </SemanticSearch>
            <SemanticButton onClick={handleSearch}>Search</SemanticButton>
            {/* <SearchField  type="text" value={searchCity} onChange={handleInputChange} placeholder="Find a City..."></SearchField> */}
            {/* <SearchButton onClick={handleSearch}>Search</SearchButton> */}
        </SearchBarContainer>
        {cities.map((city, index) => <AddCity key={index} city={city}  />)}
        </>
    );
}
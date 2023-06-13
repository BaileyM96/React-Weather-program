//TODO Create a search bar so the user can search for a city 
import { useState } from "react";
import useWeatherData from "./WeatherData";
import { FontAwesomeDesign } from "./Styled/City-Styled";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Search() {
    const weatherData = useWeatherData();
    const [city, setCity] = useState('');
    // const [weatherData, setWeatherData] = useState(null);

    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    const handleSearch = () => {
        weatherData(city);
    }
 

    return (
        <>
            <input type="text" value={city} onChange={handleInputChange} />
                <button onClick={handleSearch}>
                    <FontAwesomeIcon icon={faSearch} size="2xl"/>
                </button>
        </>
    );
}
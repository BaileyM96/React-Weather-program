import { CityCardContainer, CityCard, LocationContainer, WeatherDescContainer, Location, Temperture, HighLow } from "./Styled/Cards/Cards.styled";
import useWeatherData from "./WeatherData";


export function AddCity() {
 const weatherData = useWeatherData();
    return (
        <>
        {weatherData && (
       <CityCardContainer>
        <CityCard>
            <LocationContainer>
                <Location>My Location</Location>
                <Temperture>{Math.round((weatherData.weather.main.temp - 273.15) * 9/5 + 32)}°</Temperture>
            </LocationContainer>
                <Location>{weatherData.weather.name}</Location>
                <WeatherDescContainer>
                    <Location>{weatherData.weather.weather[0].description}</Location>
                    <HighLow>H: {Math.round((weatherData.weather.main.temp_max - 273.15) * 9/5 + 32)}° L: {Math.round((weatherData.weather.main.temp_min - 273.15) * 9/5 + 32)}°</HighLow>
                </WeatherDescContainer>
        </CityCard>
       </CityCardContainer>
        )}
        </>
    )
}
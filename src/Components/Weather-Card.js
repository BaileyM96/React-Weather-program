import { City } from "./Styled/City-Styled";
import { Load, LoaderContainer } from "./Styled/Semantic-Ui/Loader";
import useWeatherData from "./WeatherData";



function Weather() {
    const weatherData = useWeatherData();

    if (!weatherData) {
        return (
            <LoaderContainer>
                <Load active size='big'>Getting Weather</Load>
            </LoaderContainer>
        )
    }
 

    return (
        <>
        {weatherData && (
            <City>
                <h1>{weatherData.weather.name}</h1>
                <h1>{Math.round((weatherData.weather.main.temp - 273.15) * 9/5 + 32)}°</h1>
                <h3>{weatherData.weather.weather[0].description}</h3>
                <h3>H: {Math.round((weatherData.weather.main.temp_max - 273.15) * 9/5 + 32)}° L: {Math.round((weatherData.weather.main.temp_min - 273.15) * 9/5 + 32)}°</h3>
            </City>
        )}
        </>
    );
}
export default Weather;
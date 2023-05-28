import { Forecast } from "./Styled/City-Styled";
import { WeekForecast } from './Styled/Container-styled'
import { ItemForecast } from "./Styled/Container-styled";
import { Icon } from "./Styled/Image";
import useWeatherData from "./WeatherData";

const getDay = unix_timestamp => {
    //create a promise
    const date = new Date(unix_timestamp * 1000);
    //returned the date as a string
    return date.toLocaleDateString('en-US', { weekday: 'long' });
}



export default function WeeklyForecast() {
    const weatherData = useWeatherData();

    
    return (
        <>
        {weatherData && (
        <WeekForecast>
            {weatherData.oneCall.daily.map((day, index) => (
                <Forecast key={index}>
                    <ItemForecast>
                        {getDay(day.dt)}
                        <Icon src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} />
                        {Math.round((day.temp.min))}° {Math.round((day.temp.max))}°
                    </ItemForecast>
                </Forecast>
            ))}
        </WeekForecast>
        )}
        </>
    );
}
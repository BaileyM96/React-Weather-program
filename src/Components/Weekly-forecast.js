import { Forecast } from "./Styled/City-Styled";
import { WeekForecast } from './Styled/Container-styled'
import useWeatherData from "./WeatherData";

const getDay = unix_timestamp => {
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
                    {getDay(day.dt)}: {Math.round(day.temp.day - 273.15) * 9/5 + 32}
                </Forecast>
            ))}
        </WeekForecast>
        )}
        </>
    );
}
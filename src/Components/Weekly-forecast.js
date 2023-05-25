import { Forecast } from "./Styled/City-Styled";
import { WeekForecast } from './Styled/Container-styled'
import useWeatherData from "./WeatherData";


export default function WeeklyForecast() {
    const weatherData = useWeatherData();

    
    return (
        <>
        <WeekForecast>
            <Forecast>Today</Forecast>
            <Forecast>Monday</Forecast>
            <Forecast>Tuesday</Forecast>
            <Forecast>Wednesday</Forecast>
            <Forecast>Thursday</Forecast>
        </WeekForecast>
        </>
    );
}
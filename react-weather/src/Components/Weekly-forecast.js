import { Forecast } from "./Styled/City-Styled";
import { WeekForecast } from './Styled/Container-styled'


export default function weeklyForecast() {
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
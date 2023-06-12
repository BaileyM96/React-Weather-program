import { SmallContainer } from './Styled/Container-styled';
import { SmallCard } from './Styled/City-Styled';
import useWeatherData from './WeatherData';
import { BonusData } from './Styled/Container-styled';
import { cardInfo } from './Styled/City-Styled';

export default function Bonus() {
    const weatherData = useWeatherData();

    const getTime = unix_timestamp => {
        const date = new Date(unix_timestamp * 1000) 
            return `${date.getHours()}:${date.getMinutes()}`;
    }



    return (
        <>
        {weatherData && (
        <SmallContainer>
            <SmallCard>UV Index
                <BonusData>{Math.round((weatherData.oneCall.current.uvi))}</BonusData>
            </SmallCard>
            <SmallCard>Feels like
                <BonusData>{Math.round((weatherData.oneCall.current.feels_like))}°</BonusData>
            </SmallCard>
            <SmallCard>Wind 
                <BonusData>{weatherData.oneCall.current.wind_speed} mph</BonusData>
            </SmallCard>
            <SmallCard>Sunset 
                <BonusData>{getTime(weatherData.oneCall.current.sunset)}</BonusData>
            </SmallCard>
        </SmallContainer>
        )}
        </>
    );
}
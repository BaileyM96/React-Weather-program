import { SmallContainer } from './Styled/Container-styled';
import { SmallCard } from './Styled/City-Styled';
import useWeatherData from './WeatherData';
import { BonusData } from './Styled/Container-styled';
import { cardInfo } from './Styled/City-Styled';

export default function Bonus() {
    const weatherData = useWeatherData();
    return (
        <>
        {weatherData && (
        <SmallContainer>
            <SmallCard>UV Index:
                <BonusData>{weatherData.oneCall.current.uvi}</BonusData>
            </SmallCard>
            <SmallCard>Feels like
                <BonusData>{Math.round((weatherData.oneCall.current.feels_like))}°</BonusData>
            </SmallCard>
            <SmallCard>Wind {weatherData.oneCall.current.wind_speed}Mph</SmallCard>
            <SmallCard>Sunset {weatherData.oneCall.current.sunset}</SmallCard>
        </SmallContainer>
        )}
        </>
    );
}
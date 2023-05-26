import { SmallContainer } from './Styled/Container-styled';
import { SmallCard } from './Styled/City-Styled';
import useWeatherData from './WeatherData';
import { cardInfo } from './Styled/City-Styled';

export default function Bonus() {
    const weatherData = useWeatherData();
    return (
        <>
        {weatherData && (
        <SmallContainer>
            <SmallCard>
                UV Index:
                   <cardInfo>{weatherData.oneCall.current.uvi} </cardInfo>
            </SmallCard>
            <SmallCard>Sunrise {weatherData.oneCall.current.sunrise}</SmallCard>
            <SmallCard>Wind {weatherData.oneCall.current.wind_speed}Mph</SmallCard>
            <SmallCard>Sunset {weatherData.oneCall.current.sunset}</SmallCard>
        </SmallContainer>
        )}
        </>
    );
}
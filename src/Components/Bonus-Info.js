import { SmallContainer } from './Styled/Container-styled';
import { SmallCard } from './Styled/City-Styled';
import useWeatherData from './WeatherData';

export default function Bonus() {
    const weatherData = useWeatherData();
    return (
        <>
        {weatherData && (
        <SmallContainer>
            <SmallCard>UV Index:</SmallCard>
            <SmallCard>Sunrise </SmallCard>
            <SmallCard>Wind</SmallCard>
            <SmallCard>Sunset</SmallCard>
        </SmallContainer>
        )}
        </>
    );
}
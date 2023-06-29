import { CityCardContainer, CityCard, LocationContainer, WeatherDescContainer, Location, Temperture, HighLow } from "./Styled/Cards/Cards.styled";


export function AddCity({ city }) {
    return (
        <>
        {city &&  (
       <CityCardContainer>
        <CityCard>
            <LocationContainer>
                <Location>{city.name}</Location>
                <Temperture>{Math.round((city.weather.current.temp))}°</Temperture>
            </LocationContainer>
                <WeatherDescContainer>
                    <Location>{city.weather.current.weather[0].description}</Location>
                    <HighLow>H: {Math.round((city.weather.daily[0].temp.max))}° L: {Math.round((city.weather.daily[0].temp.min))}°</HighLow>
                </WeatherDescContainer>
        </CityCard>
       </CityCardContainer>
        )}
        </>
    )
}
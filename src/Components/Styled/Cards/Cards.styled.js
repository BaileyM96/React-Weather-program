import styled from "styled-components";

export const CityCardContainer = styled.section`
display: flex;
justify-content: center;
align-items: center;
`;

export const CityCard = styled.div`
display: flex;
border-radius: 30px;
flex-direction: column;
margin-top: 30px;
justify-content: flex-start;
background-color: #474E68;
min-width: 90%;
height: 140px;
`;

//Design for the info inside the cards
export const LocationContainer = styled.h1`
display: flex;
justify-content: space-between;
background-color: transparent;
color: white;
padding: 20px 20px 0 10px;
`;

export const Location = styled.h3`
color: white;
background-color: transparent;
`;

//The current weather condition container
export const WeatherDescContainer = styled.h4`
display: flex;
justify-content: space-between;
background-color: transparent;
padding: 25px 15px 30px 10px;
color: white;
`;

//Current temperture container
export const Temperture = styled.div`
color: white;
background-color: transparent;
`;

export const HighLow = styled.div`
color: white;
background-color: transparent;
`;
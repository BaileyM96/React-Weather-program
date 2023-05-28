import styled from "styled-components";

export const WeekForecast = styled.section`
display: grid;
justify-content: center;
`;

export const ItemForecast = styled.div`
display: flex;
background-color: transparent;
justify-content: space-between;
align-items: center;
padding: 10px;
width: 50%;
`;

export const BonusData = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
background-color: transparent;
`;

export const SmallContainer = styled.section`
display: grid;
place-items: center;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
`;




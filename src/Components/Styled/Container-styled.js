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
width: 65%;
`;

export const BonusData = styled.div`
display: flex;
font-size: 24px;
flex-direction: row;
justify-content: center;
background-color: transparent;
`;

export const SmallContainer = styled.section`
display: grid;
place-items: center;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
margin-bottom: 85px;
`;

export const FooterContainer = styled.section`
display: flex;
justify-content: flex-end;
align-items: center;
background-color: #474E68;
min-height: 8vh;
border-radius: 0 0 10px 10px;
position: fixed;
bottom: 0;
width: 100%;
`;






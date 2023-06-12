import styled from "styled-components";
import Slider from 'react-slick'

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
`;

export const SmallContainer1 = styled.section`
display: flex;
`;

export const StyledSlider = styled(Slider)`
display: flex;
justify-content: center;
align-items: center';
`;




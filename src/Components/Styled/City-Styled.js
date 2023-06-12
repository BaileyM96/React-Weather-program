import styled from 'styled-components';
//Hello
export const City = styled.div`
display: grid;
padding-top: 30px;
place-items: center;
color: white;
width: 100;
height: 30vh;
/* border-style: solid;
border-color: red; */
`;

export const Forecast = styled.section`
display: grid;
background-color: #474E68;
grid-template-columns: 1fr;
padding-left: 10px;
place-items: center;
justify-items: flex-start;
color: white;
width: 145px;
height: 140px;
border-radius: 10px;
margin-top: 30px;
`;

export const SmallCard = styled.div`
display: grid;
margin-top: 30px;
/* font-size: 24px; */
border-radius: 10px;
padding-top: 10px;
justify-items: center;
background-color: #474E68;
width: 145px;
height: 140px;
color: white;
`;

export const SmallCard1 = styled(SmallCard)`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
width: 90vw;
margin-left: 20px;
`;

export const cardInfo = styled.div`
display: grid;
justify-items: center;
`;




import styled from "styled-components";

export const SearchBarContainer = styled.section`
display: flex;
justify-content: center;
align-items: center;
margin-top: 10px;
`;

export const SearchField = styled.input`
&::placeholder {
    color: white;
    padding-left: 10px;
}
border-style: none;
border-radius: 10px;
background-color: #474E68;
min-width: 90%;
height: 30px;
font-size: 1.125rem;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
color: white;
`

export const SearchButton = styled.button`
border: none;
color: black;
`
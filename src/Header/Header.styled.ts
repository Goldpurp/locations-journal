import styled from "styled-components";

export const NavBar = styled.nav`
gap: 10px;
color: white;
display: flex;
padding: 0 5px;
font-size: 25px;
min-width: 100%;
font-weight: 900;
flex-direction: row;
align-items: center;
background-color: red;
justify-content: center;
font-family: "Montserrat", sans-serif;


@media (max-width: 540px) {
    font-size: 15px;
    min-width: 100%;
    font-weight: 600;
}
`;


export const Icon = styled.span`
font-size: 25px;


@media (max-width: 540px) {
    font-size: 15px;
}
`;


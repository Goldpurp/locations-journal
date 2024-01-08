import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CardFrame = styled.div`
  display: flex;
  min-width: 90%;
  margin-top: 10px;
  padding-top: 30px;
  align-items: center;
  background-color: white;
  justify-content: center;
  box-shadow: 1px 1px 12px 1px gray;
  font-family: "Montserrat", sans-serif;


  @media (max-width: 431px) {
    min-width: 100%;
  }
`;

export const ImgTag = styled.img`
  width: 100%;
  border-radius: 5px;
`;

export const ImgTagDiv = styled.div`
  width: 230px;
  padding: 25px;

  @media (max-width: 920px) {
    min-width: 40%;
  }
`;

export const Location = styled.div`
  gap: 5px;
  margin: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: red;

  @media (max-width: 431px) {
    font-size: 14px;
  }
`;

export const MapAnchor = styled.a`
  color: gray;

  @media (max-width: 431px) {
    font-size: 9px;
  }
`;

export const CityName = styled.h1`
  margin: 0;
  color: black;
  font-weight: 600;

  @media (max-width: 431px) {
    font-size: 20px;
  }
`;

export const Country = styled.h5`
  margin: 5px;
  color: black;
  font-weight: bolder;
  font-family: "Cutive Mono", monospace;

  @media (max-width: 431px) {
    font-size: 12px;
  }
`;

export const Population = styled.a`
  color: black;
  margin: 10px 0;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;

  @media (max-width: 431px) {
    font-size: 11px;
  }
`;

export const CountryBio = styled.p`
  font-size: 15px;
  font-weight: 300;

  @media (max-width: 431px) {
    font-size: 11px;
  }
`;

export const AboutCountry = styled.div`
  margin: 0;
  display: flex;
  padding-right: 5%;
  flex-direction: column;

  @media (max-width: 431px) {
    min-width: 45%;
  }
`;

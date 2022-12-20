import React from "react";
import styled from "styled-components";
import { useCountry } from "../../../Context/CountryContext";

const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 80px 40px;
  border: 2px solid red;
  box-sizing: border-box;
`;
const Left = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 50%;
  padding-right: 40px;
  box-sizing: border-box;
`;

const Right = styled.section`
  display: flex;
  justify-content: start;
  align-items: left;
  flex-direction: column;
  height: 100%;
  width: 50%;
  padding-left: 40px;
  gap: 15px;
`;
const Flag = styled.div`
  height: 50%;
  width: 100%;
  background-color: blue;
`;
const Name = styled.h3`
  margin: 0;
`;
const Info = styled.h4`
margin: 0;
`
const InfoSpan = styled.span`
color: grey;
font-weight: 300;
font-size: 14px;
`

const CardLower = () => {
  const { countries } = useCountry();

  return (
    <Container>
      <Left>
        <Flag></Flag>
      </Left>
      <Right>
        <Name>Germany</Name>
        <Info>Population: <InfoSpan>5,000,000</InfoSpan> </Info>
        <Info>Region: <InfoSpan>Europe</InfoSpan> </Info>
        <Info>Capital: <InfoSpan>Berlin</InfoSpan> </Info>
        <Info>Currency: <InfoSpan>Euro</InfoSpan> </Info>
        <Info>Languages:<InfoSpan> German</InfoSpan> </Info>
        <Info>Continent:<InfoSpan>South America</InfoSpan> </Info>
        <Info>Area: <InfoSpan>2,000,000 km2</InfoSpan> </Info>
        
      </Right>
    </Container>
  );
};

export default CardLower;

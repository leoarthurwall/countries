import React from "react";
import styled from "styled-components";
import { useCountry } from "../../../Context/CountryContext";
import { BiMap } from "react-icons/bi";

const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 40px 40px;
  box-sizing: border-box;
`;
const Left = styled.section`
  display: flex;
  justify-content: start;
  align-items: left;
  flex-direction: column;
  height: 100%;
  width: 50%;
  padding-right: 40px;
  box-sizing: border-box;
  gap: 30px;
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
  height: 45%;
  width: 100%;
  background-color: blue;
`;
const Name = styled.h3`
  margin: 0;
`;
const Info = styled.h4`
  margin: 0;
`;
const InfoSpan = styled.span`
  color: grey;
  font-weight: 300;
  font-size: 14px;
`;

const ViewMap = styled.a`
display: flex;
align-items: center;
justify-content: center;
height: auto;
width: fit-content;
padding: 12px 15px;
font-size: 14px;
color: white;
gap 10px;
box-sizing: border-box;
background-color: rgba(0, 0, 0, 0.4);
border-radius: 25px;
box-shadow: rgba(0, 0, 0, 0.16) 1px 3px 5px;
text-decoration: none;
cursor: pointer;
transition: 0.2s;
&:hover{
    background-color: rgba(0, 0, 0, 0.5);
}
`;

const MapText = styled.p`
  color: white;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
`;

const NeighborContainer = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
width: 100%;
gap: 10px;
`
const Neighbor = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: auto;
width: fit-content;
padding: 12px 15px;
font-size: 14px;
color: white;
gap 10px;
box-sizing: border-box;
background-color: rgba(0, 0, 0, 0.4);
border-radius: 25px;
box-shadow: rgba(0, 0, 0, 0.16) 1px 3px 5px;
text-decoration: none;
cursor: pointer;
transition: 0.2s;
&:hover{
    background-color: rgba(0, 0, 0, 0.5);
}
`;
const CardLower = () => {
  const { countries } = useCountry();

  return (
    <Container>
      <Left>
        <Flag></Flag>
        <ViewMap href="https://goo.gl/maps/Z9DXNxhf2o93kvyc6" target="_blank">
          <MapText>View On Map</MapText>
          <BiMap size={18} />
        </ViewMap>
        <Info>Bordering Countries:</Info>
        <NeighborContainer>
          <Neighbor>France</Neighbor>
          <Neighbor>Spain</Neighbor>
          <Neighbor>Germany</Neighbor>
          <Neighbor>Poland</Neighbor>
          <Neighbor>Poland</Neighbor>
          <Neighbor>Poland</Neighbor><Neighbor>Poland</Neighbor>

        </NeighborContainer>
      </Left>
      <Right>
        <Name>Germany</Name>
        <Info>
          Population: <InfoSpan>5,000,000</InfoSpan>{" "}
        </Info>
        <Info>
          Region: <InfoSpan>Europe</InfoSpan>{" "}
        </Info>
        <Info>
          Capital: <InfoSpan>Berlin</InfoSpan>{" "}
        </Info>
        <Info>
          Currency: <InfoSpan>Euro</InfoSpan>{" "}
        </Info>
        <Info>
          Languages:<InfoSpan> German</InfoSpan>{" "}
        </Info>
        <Info>
          Continent:<InfoSpan>South America</InfoSpan>{" "}
        </Info>
        <Info>
          Area: <InfoSpan>2,000,000 km2</InfoSpan>{" "}
        </Info>
      </Right>
    </Container>
  );
};

export default CardLower;

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
const Flag = styled.img`
  height: 45%;
  max-height: 150px;
  max-width: 300px;
  width: 100%;
  background-color: grey;
`;
const Name = styled.h3`
  font-size: 24px;
  margin: 0;
`;
const Info = styled.h4`
  margin: 0;
  font-weight: 600;
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
`;
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
  const { modalCountry } = useCountry();

  return (
    <Container>
      {modalCountry.length === 1 ? (
        <>
          <Left>
            <Flag
              src={modalCountry[0].flags.png}
              alt={`${modalCountry[0].name.common}'s flag`}
            ></Flag>
            <ViewMap
              href="https://goo.gl/maps/Z9DXNxhf2o93kvyc6"
              target="_blank"
            >
              <MapText>View On Map</MapText>
              <BiMap size={18} />
            </ViewMap>
            <Info>Bordering Countries:</Info>
            <NeighborContainer>
              {modalCountry.length === 1 &&
                modalCountry[0].borders.map((border: any) => (
                  <Neighbor>{border}</Neighbor>
                ))}
            </NeighborContainer>
          </Left>
          <Right>
            <Name>{modalCountry[0].name.common}</Name>
            <Info>
              Population:{" "}
              <InfoSpan>
                {modalCountry[0].population.toLocaleString("en-UK")}
              </InfoSpan>{" "}
            </Info>
            <Info>
              Region: <InfoSpan>{modalCountry[0].continents}</InfoSpan>{" "}
            </Info>
            <Info>
              Sub Region: <InfoSpan>{modalCountry[0].subregion}</InfoSpan>{" "}
            </Info>
            <Info>
              Capital: <InfoSpan>{modalCountry[0].capital}</InfoSpan>{" "}
            </Info>
            <Info>
              Currency: <InfoSpan>Building</InfoSpan>{" "}
            </Info>
            <Info>
              Languages:<InfoSpan> Building</InfoSpan>{" "}
            </Info>
            <Info>
              Continent: <InfoSpan>{modalCountry[0].continents}</InfoSpan>{" "}
            </Info>
            <Info>
              Area:{" "}
              <InfoSpan>
                {modalCountry[0].area.toLocaleString("en-UK")} km2
              </InfoSpan>{" "}
            </Info>
            <Info>
              Country phone code:{" "}
              <InfoSpan>
                {" "}
                {modalCountry[0].idd.root}
                {modalCountry[0].idd.suffixes[0]}
              </InfoSpan>{" "}
            </Info>
          </Right>
        </>
      ) : null}
    </Container>
  );
};

export default CardLower;

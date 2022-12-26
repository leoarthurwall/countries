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
  padding: 0px 40px 40px 40px;
  box-sizing: border-box;
`;
const Left = styled.section`
  display: flex;
  justify-content: start;
  align-items: left;
  flex-direction: column;
  height: 100%;
  width: 50%;
  padding-right: 20px;
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
  padding-left: 20px;
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
background-color: #7A74E0;
border-radius: 25px;
box-shadow: rgba(0, 0, 0, 0.16) 1px 3px 5px;
text-decoration: none;
cursor: pointer;
transition: 0.2s;
&:hover{
  background-color: #5B4E87;
}
`;

const MapText = styled.p`
  color: white;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
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
background-color: #7A74E0;
border-radius: 25px;
box-shadow: rgba(0, 0, 0, 0.16) 1px 3px 5px;
text-decoration: none;
cursor: pointer;
transition: 0.2s;
&:hover{
    background-color: #5B4E87;
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
            <ViewMap href={modalCountry[0].maps.googleMaps} target="_blank">
              <MapText>View On Map</MapText>
              <BiMap size={18} />
            </ViewMap>
            <InfoContainer>
              <Info>Bordering Countries:</Info>
              <NeighborContainer>
                {!modalCountry[0].borders ? (
                  <Neighbor>None</Neighbor>
                ) : (
                  modalCountry[0].borders.map((border: any, index: any) => (
                    <Neighbor key={index}>{border}</Neighbor>
                  ))
                )}
              </NeighborContainer>
            </InfoContainer>
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
              {!modalCountry[0].idd?.root ? (
                <InfoSpan>No Info</InfoSpan>
              ) : (
                <InfoSpan>
                  {modalCountry[0].idd.root}
                  {modalCountry[0].idd.suffixes[0]}
                </InfoSpan>
              )}
            </Info>
          </Right>
        </>
      ) : null}
    </Container>
  );
};

export default CardLower;

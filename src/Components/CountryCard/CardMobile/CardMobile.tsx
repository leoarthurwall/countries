import styled from "styled-components";
import { useCountry } from "../../../Context/CountryContext";
import { BiMap } from "react-icons/bi";

const Container = styled.div`
  display: flex;
  justify-content: end;
  height: 100%;
  width: 100%;
  padding: 0px 20px 20px 20px;
  box-sizing: border-box;
`;

const Main = styled.section`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: 10px;
`;
const Flag = styled.img`
  height: 45%;
  max-height: 150px;
  max-width: 300px;
  width: 100%;
  background-color: ${(props) => props.theme.placeholder};
`;
const Name = styled.h3`
  font-size: 18px;
  text-align: center;
  margin: 0;
  color: ${(props) => props.theme.header};
`;
const Info = styled.h4`
  margin: 0;
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  color: ${(props) => props.theme.header};
`;
const InfoSpan = styled.span`
  color: ${(props) => props.theme.fontSpanColor};
  font-weight: 300;
  font-size: 12px;
  
`;

const ViewMap = styled.a`
display: flex;
align-items: center;
justify-content: center;
height: auto;
width: fit-content;
padding: 8px 12px;
font-size: 12px;
color: white;
gap 10px;
box-sizing: border-box;
background-color: ${(props) => props.theme.accentColor};
border-radius: 25px;
box-shadow: ${(props) => props.theme.boxShadow} 1px 3px 5px;
text-decoration: none;
cursor: pointer;
transition: 0.2s;
&:hover{
  background-color: ${(props) => props.theme.accentColorHover};
}
`;

const MapText = styled.p`
  color: ${(props) => props.theme.buttonTextColor};
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
  justify-content: center;
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
padding: 8px 12px;
font-size: 14px;
color: ${(props) => props.theme.buttonTextColor};
gap 10px;
box-sizing: border-box;
background-color: ${(props) => props.theme.accentColor};
border-radius: 25px;
box-shadow: ${(props) => props.theme.boxShadow} 1px 3px 5px;
text-decoration: none;
cursor: pointer;
transition: 0.2s;
&:hover{
    background-color: ${(props) => props.theme.accentColorHover};
}
`;
const CardMobile = () => {
  const { modalCountry, handleBoarderClick, countries } = useCountry();


  // console.log(
  //   "border filtered",
  //   modalCountry.length === 1 &&
  //   [...countries].filter(
  //     (country: any) => (modalCountry[0]?.border).indexOf(country?.cca3) !== -1
  //   )
  // );
  //   let arrayOne  = [1,2,3,4,5]
  //   let arrayTwo  = [1,2,4,5,6]
  //   const output = arrayTwo.filter((number) => arrayOne.indexOf(number) !== -1)
  // console.log("output:", output)

  // Plan
  //1 - create a new array with the countries that match the borders pf the modal country

  // NOTE - cannot seem to find a way to create a new array of the countries that match the modalCountry's boarders. 

  //2 - map through the country.name.common of the new array

  console.log(
    "modal country borders",
    modalCountry.length === 1 && modalCountry[0].borders
  );

  return (
    <Container>
      {modalCountry.length === 1 ? (
        <>
          <Main>
            <Flag
              src={modalCountry[0].flags.png}
              alt={`${modalCountry[0].name.common}'s flag`}
            ></Flag>

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
                    <Neighbor onClick={handleBoarderClick} key={index}>
                      {border}
                    </Neighbor>
                  ))
                )}
              </NeighborContainer>
            </InfoContainer>
          </Main>
        </>
      ) : null}
    </Container>
  );
};

export default CardMobile;

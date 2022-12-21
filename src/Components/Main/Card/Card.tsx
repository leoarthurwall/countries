import styled from "styled-components";
import CardSingle from "./CardSingle/CardSingle";
import { ReactElement } from "react";
import { useCountry } from "../../../Context/CountryContext";

const Container = styled.section`
  width: auto;
  margin: 0 auto;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 50px;
  grid-column-gap: 25px;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 850px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;



const Card: React.FC = (): ReactElement => {
  const { filteredCountries, countries } = useCountry();
  return (
    <Container >
      {filteredCountries.length === 0
        ? countries.map((country: any, index: any) => (
            <CardSingle key={index} country={country} />
          ))
        : filteredCountries.map((country: any, index: any) => (
            <CardSingle key={index} country={country} />
          ))}
    </Container>
  );
};

export default Card;

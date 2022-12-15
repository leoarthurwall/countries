import styled from "styled-components";
import CardSingle from "./CardSingle/CardSingle";
import { useState, useEffect } from "react";
import { ICountries } from "../../../ICountries";

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

const Card = () => {
  const [countries, setCountries] = useState<ICountries[]>([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setCountries(json);
      });
  }, []);
  console.log({ countries });
  return (
    <Container>
      {countries.map((country, index) => (
        <CardSingle key={index} country={country} />
      ))}
    </Container>
  );
};

export default Card;

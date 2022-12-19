import styled from "styled-components";
import Upper from "./Upper/Upper";
import { ReactElement } from "react";
import Card from "./Card/Card";
import { useState, useEffect } from "react";
import { ICountries } from "../../ICountries";

const Container = styled.main`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  max-width: 1400px;
  padding: 0 70px 50px 70px;

  box-sizing: border-box;

  display: flex;
  flex-direction: column;
`;

const Main: React.FC = (): ReactElement => {
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
      <Upper />
      <Card />
    </Container>
  );
};

export default Main;

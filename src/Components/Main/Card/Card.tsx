import styled from "styled-components";
import CardSingle from "./CardSingle/CardSingle";
import { ReactElement } from "react";

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

type Props = {
  countries: any;
  filteredItems: any;
};

const Card: React.FC<Props> = ({ countries, filteredItems }): ReactElement => {
  console.log("filteredItems", filteredItems.length);
  return (
    <Container>
      {filteredItems.length === 0
        ? countries.map((country: any, index: any) => (
            <CardSingle key={index} country={country} />
          ))
        : filteredItems.map((country: any, index: any) => (
            <CardSingle key={index} country={country} />
          ))}
    </Container>
  );
};

export default Card;

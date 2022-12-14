import styled from "styled-components";
import CardSingle from "./CardSingle/CardSingle";

const Container = styled.section`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 50px;
  grid-column-gap: 25px;
`;



const Card = () => {
  return (
    <Container>
      <CardSingle />
      <CardSingle />
      <CardSingle />
      <CardSingle />
      <CardSingle />
      <CardSingle />
      <CardSingle />
      <CardSingle />
      <CardSingle />
      <CardSingle />
    </Container>
  );
};

export default Card;

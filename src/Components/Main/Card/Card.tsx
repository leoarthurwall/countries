import styled from "styled-components";
import CardSingle from "./CardSingle/CardSingle";
import { useState, useEffect } from "react";

const Container = styled.section`
  width: 100%;
  height: 100%;
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
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
          .then((res) => res.json())
          .then((json) => {
            console.log(json);
            setData(json);
          });
      }, []);
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

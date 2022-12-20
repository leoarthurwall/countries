import React from "react";
import styled from "styled-components";
import { useCountry } from "../../../Context/CountryContext";

const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 40px;
  border: 2px solid red;
  box-sizing: border-box;
`;
const Left = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 50%;
  padding-right: 20px;
  box-sizing: border-box;
`;

const Right = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 50%;
  padding-left: 20px;
`;
const Flag = styled.div`
  height: 50%;
  width: 100%;
  background-color: blue;
`;

const CardLower = () => {
  const { countries } = useCountry();

  return (
    <Container>
      <Left>
        <Flag></Flag>
      </Left>
      <Right></Right>
    </Container>
  );
};

export default CardLower;

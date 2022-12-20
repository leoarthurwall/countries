import React from "react";
import styled from "styled-components";

const Container = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
`;

const CountryCard = () => {
  return <Container>CountryCard</Container>;
};

export default CountryCard;

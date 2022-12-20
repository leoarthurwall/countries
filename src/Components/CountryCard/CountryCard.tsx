import styled from "styled-components";
import { ReactElement } from "react";

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
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
`;

const Card = styled.div`
  height: 70%;
  width: 70%;
  background-color: #fff;
  border-radius: 5px;
`;

const CountryCard: React.FC = (): ReactElement => {
  return (
    <Container>
      <Card></Card>
    </Container>
  );
};

export default CountryCard;

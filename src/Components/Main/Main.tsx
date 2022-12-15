import styled from "styled-components";
import Upper from "./Upper/Upper";
import { ReactElement } from "react";
import Card from "./Card/Card";

const Container = styled.main`
  height: 100%;
  width: 100%;
  max-width: 1400px;
  padding: 0 70px 50px 70px;

  box-sizing: border-box;

  display: flex;
  flex-direction: column;
`;

const Main: React.FC = (): ReactElement => {
  return (
    <Container>
      <Upper />
      <Card />
    </Container>
  );
};

export default Main;

import styled from "styled-components";
import { ReactElement } from "react";
import Upper from "./Upper/Upper";
import Card from "./Card/Card";


const Container = styled.main`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  max-width: 1400px;
  padding: 0 70px 50px 70px;

  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  @media(max-width: 600px){
    padding: 0 40px 50px 40px;

  }
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

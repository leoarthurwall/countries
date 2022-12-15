import styled from "styled-components";
import { ReactElement } from "react";
import SearchBar from "./SearchBar/SearchBar";
import Dropdown from "./Dropdown/Dropdown";

const Container = styled.section`
  width: 100%;
  padding: 30px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  @media(max-width: 700px){
    flex-direction: column;
    gap: 25px;
  }
`;
const Upper: React.FC = (): ReactElement => {
  return (
    <Container>
      <SearchBar />
      <Dropdown />
    </Container>
  );
};

export default Upper;

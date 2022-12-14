import styled from "styled-components";
import { ReactElement } from "react";
import SearchBar from "./SearchBar/SearchBar";
import Dropdown from "./Dropdown/Dropdown";

const Container = styled.section`
  width: 100%;
  padding: 30px 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;
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

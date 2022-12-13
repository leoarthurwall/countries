import styled from "styled-components";
import { ReactElement } from "react";
import SearchBar from "./SearchBar/SearchBar";

const Container = styled.section`
  width: 100%;
  padding: 30px 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid blue;
`;
const Upper: React.FC = (): ReactElement => {
  return (
    <Container>
      <SearchBar />
    </Container>
  );
};

export default Upper;

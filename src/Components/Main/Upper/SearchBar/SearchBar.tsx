import { ReactElement } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

const Input = styled.input``;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SearchBar: React.FC = (): ReactElement => {
  return (
    <SearchContainer>
      <Input type="text" placeholder="Search for a country..."></Input>
      <AiOutlineSearch />
    </SearchContainer>
  );
};

export default SearchBar;

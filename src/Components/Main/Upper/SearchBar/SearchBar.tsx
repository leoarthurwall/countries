import { ReactElement } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

const Input = styled.input`
  padding: 15px 50px;
  width: 250px;
  outline: none;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  ::placeholder {
    color: grey;
}
`;

const InputForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SearchBar: React.FC = (): ReactElement => {
  return (
    <InputForm>
      <Input type="text" placeholder="Search for a country..."></Input>
      <AiOutlineSearch size={20} style={{ position: "absolute", left: "20px",  color: "grey" }} />
    </InputForm>
  );
};

export default SearchBar;

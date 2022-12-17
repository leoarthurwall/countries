import { ReactElement } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

const Input = styled.input`
  padding-left: 50px;
  height: 45px;
  box-sizing: border-box;
  width: 300px;
  outline: none;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  ::placeholder {
    color: grey;
  }
  @media (max-width: 700px) {
    width: 250px;
  }
`;

const InputForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

type Props = {
  countries: any;
};
const SearchBar: React.FC<Props> = ({ countries }): ReactElement => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e: any) => {
    setInputText(e.target.value.toLowerCase());
    console.log({ inputText });
    console.log({includesInputText})

  };

  const includesInputText = countries.filter((country:any) => country.name.common.toLowerCase().startsWith(inputText) //make case insensitive!!!
  )
  return (
    <InputForm onChange={handleInputChange}>
      <Input type="text" placeholder="Search for a country..."></Input>
      <AiOutlineSearch
        size={20}
        style={{ position: "absolute", left: "20px", color: "grey" }}
      />
    </InputForm>
  );
};

export default SearchBar;

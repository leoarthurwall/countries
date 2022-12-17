import { ReactElement } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

const Wrapper = styled.div`
  z-index: 20;
  position: relative;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

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

const SearchOptions = styled.ul<IisSearchOpen>`
  margin: 0;
  list-style: none;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 10px 0;
  position: absolute;
  width: 100%;
  top: 55px;
  box-sizing: border-box;
  // visibility: ${({ isSearchOpen }) => (isSearchOpen ? "visible" : "hidden")};
`;

const SearchItem = styled.li`
  font-weight: 400;
  font-size: 14px;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #e8eaed;
  }
`;

interface IisSearchOpen {
  isSearchOpen: Boolean;
}

type Props = {
  countries: any;
};
const SearchBar: React.FC<Props> = ({ countries }): ReactElement => {
  const [inputText, setInputText] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // SETS THE INPUT TEXT STATE
  const handleInputChange = (e: any) => {
    setInputText(e.target.value.toLowerCase());
    console.log({ inputText });
    console.log({ inputFilteredArray });
    // if (inputFilteredArray.length < 250 && inputFilteredArray.length > 1) {
    //   setIsSearchOpen(true);
    // } else {
    //   setIsSearchOpen(false);
    // }
    console.log({ isSearchOpen });
  };

  //RETURNS COUNTRRIES THAT START WITH THE LETTERS WRITTEN INTO THE INPUT BAR
  const inputFilteredArray = countries.filter((country: any) =>
    country.name.common.toLowerCase().startsWith(inputText)
  );
  return (
    <Wrapper>
      <InputForm onChange={handleInputChange}>
        <Input type="text" placeholder="Search for a country..."></Input>
        <AiOutlineSearch
          size={20}
          style={{ position: "absolute", left: "20px", color: "grey" }}
        />
      </InputForm>
      {inputText.length > 0 && (
        <SearchOptions isSearchOpen={isSearchOpen}>
          {inputText !== "" &&
            inputFilteredArray.map((item: any, index: any) => (
              <SearchItem key={index}>{item.name.common}</SearchItem>
            ))}
        </SearchOptions>
      )}
    </Wrapper>
  );
};

export default SearchBar;

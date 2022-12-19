import { ReactElement } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { useCountry } from "../../../../Context/CountryContext";

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

const SearchBar: React.FC = (): ReactElement => {
  const {
    countries,
    inputText,
    setInputText,
    isSearchOpen,
    setFilteredCountries,
  } = useCountry();

  //RETURNS COUNTRIES THAT START WITH THE LETTERS WRITTEN INTO THE INPUT BAR
  const inputFilteredArray = countries.filter((country: any) => {
    if (inputText === "") {
      return null;
    } else if (
      country.name.common.toLowerCase().startsWith(inputText.toLowerCase())
    ) {
      return country;
    }
  });

  //ONLY DISPLAYS SEARCH OPTIONS WHEN MET
  const displaySearchOptions =
    inputFilteredArray.length !== 250 && inputFilteredArray.length !== 0;

  // CHANGE HANDLER - RECORDS THE INPUTTED TEXT
  const handleInputChange = (e: any) => {
    setInputText(e.target.value);
  };

  //FORM SUBMIT HANDLER - RETURNS COUNTRIES THAT START WITH TEXT INPUT
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log({ event });
    setFilteredCountries(
      [...countries].filter((country: any) =>
        country.name.common.toLowerCase().startsWith(inputText.toLowerCase())
      )
    );
    setInputText("");
  };

  // GETS THE COUNTRY THAT IS CLICKED ON
  const handleCountryClick = (e: any) => {
    setFilteredCountries(
      [...countries].filter((country: any) =>
        country.name.common
          .toLowerCase()
          .startsWith(e.target.innerText.toLowerCase())
      )
    );
    setInputText("");
  };

  // NOTE - BRING SEARCH STATE, FILTERS AND HANDLERS TO MAIN SO IT CAN BE PASSED INTO THE CARD WHEN SELECTED
  return (
    <Wrapper>
      <InputForm onSubmit={handleFormSubmit}>
        <Input
          value={inputText}
          type="text"
          placeholder="Search for a country..."
          onChange={handleInputChange}
        ></Input>
        <AiOutlineSearch
          size={20}
          style={{ position: "absolute", left: "20px", color: "grey" }}
        />
      </InputForm>
      {displaySearchOptions ? (
        <SearchOptions isSearchOpen={isSearchOpen}>
          {inputFilteredArray.map((item: any, index: any) => (
            <SearchItem key={index} onClick={handleCountryClick}>
              {item.name.common}
            </SearchItem>
          ))}
        </SearchOptions>
      ) : null}
    </Wrapper>
  );
};

export default SearchBar;

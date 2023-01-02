import { ReactElement } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { useCountry } from "../../../../Context/CountryContext";
import { useEffect } from "react";

const Wrapper = styled.div`
  z-index: 50;
  position: relative;
  gap: 10px;
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    max-width: 300px;
    width: 100%;
  }
`;

const Input = styled.input`
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.mainBackgroundColor};
  padding-left: 50px;
  height: 45px;
  box-sizing: border-box;
  width: 300px;
  outline: none;
  border: none;
  box-shadow: ${(props) => props.theme.boxShadow} 0px 1px 4px;
  ::placeholder {
    color: ${(props) => props.theme.placeholder};
  }

  @media (max-width: 700px) {
    width: 200px;
  }
  @media (max-width: 600px) {
    width: 100%;
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
  background-color: ${(props) => props.theme.mainBackgroundColor};
  box-shadow: ${(props) => props.theme.boxShadow} 0px 1px 4px;
  padding: 10px 0;
  position: absolute;
  width: 100%;
  top: 55px;
  box-sizing: border-box;

  // visibility: ${({ isSearchOpen }) => (isSearchOpen ? "visible" : "hidden")};
`;

const SearchItem = styled.li`
  color: ${(props) => props.theme.fontColor};
  font-weight: 400;
  font-size: 14px;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.searchHoverBackground};
  }
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.fontColor};
`;

interface IisSearchOpen {
  isSearchOpen: Boolean;
}

const SearchBar: React.FC = (): ReactElement => {
  const {
    countries,
    inputText,
    setInputText,
    setIsSearchOpen,
    isSearchOpen,
    setFilteredCountries,
    setSearchQuery,
  } = useCountry();

  //HANDLES THE OFF DROPDOWN CLICK TO CLOSE THE DROPDOWN MENU
  useEffect(() => {
    const handleSearchOffClick = (e: any) => {
      if (e.path[0].id !== "search-ul") {
        setInputText("");
        setIsSearchOpen(false);
      }
      console.log("pathTagname:", e.path[1].id);
    };
    document.body.addEventListener("click", handleSearchOffClick);

    return () =>
      document.body.removeEventListener("click", handleSearchOffClick);
  }, [setInputText, setIsSearchOpen]);
  console.log({ isSearchOpen });

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
  if (inputFilteredArray.length !== 250 && inputFilteredArray.length !== 0) {
    setIsSearchOpen(true);
  } else {
    setIsSearchOpen(false);
  }

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
    setSearchQuery(inputText);
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
    setSearchQuery(e.target.innerText);
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
        <IconContainer>
          <AiOutlineSearch
            size={20}
            style={{ position: "absolute", left: "20px" }}
          />
        </IconContainer>
      </InputForm>
      {isSearchOpen ? (
        <SearchOptions id="search-ul" isSearchOpen={isSearchOpen}>
          {inputFilteredArray.map((item: any, index: any) => (
            <SearchItem id="search-ul" key={index} onClick={handleCountryClick}>
              {item.name.common}
            </SearchItem>
          ))}
        </SearchOptions>
      ) : null}
    </Wrapper>
  );
};

export default SearchBar;

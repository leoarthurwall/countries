import styled from "styled-components";
import { ReactElement } from "react";
import { BiChevronUp } from "react-icons/bi";
import { useCountry } from "../../../../Context/CountryContext";
import { useEffect } from "react";

const Wrapper = styled.div`
  z-index: 40;
  position: relative;
  gap: 10px;
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    width: 100%;
    max-width: 200px;
  }
`;
const DropdownButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  padding: 0 20px;
  width: 200px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.mainBackgroundColor};
  box-shadow: ${(props) => props.theme.boxShadow} 0px 1px 4px;
  cursor: pointer;
  border: none;

  @media (max-width: 600px) {
    width: 100%;
  }
`;
const Text = styled.h4`
  margin: 0;
  font-weight: 400;
  color: ${(props) => props.theme.fontColor};
  font-size: 14px;
`;
const IconContainer = styled.div<IisDropdownOpen>`
  height: 20px;
  width: 20px;

  transform: ${({ isDropdownOpen }) => isDropdownOpen && "rotate(0.5turn)"};
  transform-origin: center center;
  transition: all 0.4s ease-in-out;
  color: ${(props) => props.theme.fontColor};
`;
const DropdownMenu = styled.ul<IisDropdownOpen>`
  margin: 0;
  list-style: none;
  background-color: ${(props) => props.theme.mainBackgroundColor};
  box-shadow: ${(props) => props.theme.boxShadow} 0px 1px 4px;
  padding: 10px 0;
  position: absolute;
  width: 200px;
  top: 55px;
  box-sizing: border-box;
  visibility: ${({ isDropdownOpen }) =>
    isDropdownOpen ? "visible" : "hidden"};
`;
const DropdownItem = styled.li`
  font-weight: 400;
  color: ${(props) => props.theme.fontColor};
  font-size: 14px;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.searchHoverBackground};
  }
`;


interface IisDropdownOpen {
  isDropdownOpen: Boolean;
}

const Dropdown: React.FC = (): ReactElement => {
  const {
    isDropdownOpen,
    setIsDropdownOpen,
    setFilteredCountries,
    countries,
    setSearchQuery,
  } = useCountry();

  const handleSelectedOption = (e: any) => {
    setIsDropdownOpen(!isDropdownOpen);
    setFilteredCountries(
      [...countries].filter(
        (country: any) => country.region === e.target.innerHTML
      )
    );
    setSearchQuery(e.target.innerHTML);
  };

  const handleAllOptions = () => {
    setFilteredCountries(countries);
    setIsDropdownOpen(!isDropdownOpen);
    setSearchQuery("All");
  };

  //HANDLES THE OFF DROPDOWN CLICK TO CLOSE THE DROPDOWN MENU
  useEffect(() => {
    const handleDropdownClick = (e: any) => {
      if (e.path[0].id !== "dropdown-button-display") {
        setIsDropdownOpen(false);
      }
      console.log("pathTagname:", e.path[0]);
    };
    document.body.addEventListener("click", handleDropdownClick);

    return () =>
      document.body.removeEventListener("click", handleDropdownClick);
  }, []);

  return (
    <>
      <Wrapper>
        <DropdownButton
          id="dropdown-button-display"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <Text id="dropdown-button-display"> Filter by Region</Text>
          <IconContainer
            id="dropdown-button-display"
            isDropdownOpen={isDropdownOpen}
          >
            <BiChevronUp id="dropdown-button-display" size={"auto"} />
          </IconContainer>
        </DropdownButton>
        <DropdownMenu isDropdownOpen={isDropdownOpen}>
          <DropdownItem onClick={handleSelectedOption}>Europe</DropdownItem>
          <DropdownItem onClick={handleSelectedOption}>Americas</DropdownItem>
          <DropdownItem onClick={handleSelectedOption}>Africa</DropdownItem>
          <DropdownItem onClick={handleSelectedOption}>Asia</DropdownItem>
          <DropdownItem onClick={handleSelectedOption}>Oceania</DropdownItem>
          <DropdownItem onClick={handleAllOptions}>View All</DropdownItem>
        </DropdownMenu>
      </Wrapper>
      
    </>
  );
};

export default Dropdown;

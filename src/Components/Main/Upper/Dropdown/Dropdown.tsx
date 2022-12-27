import styled from "styled-components";
import { ReactElement } from "react";
import { BiChevronUp } from "react-icons/bi";
import { useCountry } from "../../../../Context/CountryContext";

const Wrapper = styled.div`
  z-index: 40;
  position: relative;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;
const DropdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  padding: 0 20px;
  width: 200px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  cursor: pointer;
  @media (max-width: 600px) {
    
  }
`;
const Text = styled.h4`
  margin: 0;
  font-weight: 400;
  font-size: 14px;
`;
const IconContainer = styled.div<IisDropdownOpen>`
  height: 20px;
  width: 20px;

  transform: ${({ isDropdownOpen }) => isDropdownOpen && "rotate(0.5turn)"};
  transform-origin: center center;
  transition: all 0.4s ease-in-out;
`;
const DropdownMenu = styled.ul<IisDropdownOpen>`
  margin: 0;
  list-style: none;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
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
  font-size: 14px;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #e8eaed;
  }
`;

const OptionsOverlay = styled.div<IisDropdownOpen>`
  position: fixed;
  background-color: rgba(0, 0, 0, 0);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 30;
  visibility: ${({ isDropdownOpen }) => !isDropdownOpen && "hidden"};
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

  const handleDropdownClick = (val: any) => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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

  return (
    <>
      <Wrapper>
        <DropdownContainer onClick={handleDropdownClick}>
          <Text> Filter by Region</Text>
          <IconContainer isDropdownOpen={isDropdownOpen}>
            <BiChevronUp size={"auto"} />
          </IconContainer>
        </DropdownContainer>
        <DropdownMenu isDropdownOpen={isDropdownOpen}>
          <DropdownItem onClick={handleSelectedOption}>Europe</DropdownItem>
          <DropdownItem onClick={handleSelectedOption}>Americas</DropdownItem>
          <DropdownItem onClick={handleSelectedOption}>Africa</DropdownItem>
          <DropdownItem onClick={handleSelectedOption}>Asia</DropdownItem>
          <DropdownItem onClick={handleSelectedOption}>Oceania</DropdownItem>
          <DropdownItem onClick={handleAllOptions}>View All</DropdownItem>
        </DropdownMenu>
      </Wrapper>
      <OptionsOverlay
        isDropdownOpen={isDropdownOpen}
        onClick={handleDropdownClick}
      />
    </>
  );
};

export default Dropdown;

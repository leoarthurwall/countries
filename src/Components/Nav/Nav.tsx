import styled from "styled-components";
import { useCountry } from "../../Context/CountryContext";
import DarkMode from "./DarkMode/DarkMode";

const Container = styled.nav`
  height: 60px;
  widht: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 70px;
  box-sizing: border-box;
  box-shadow: ${(props) => props.theme.boxShadow} 0px 1px 5px 0px;
  @media (max-width: 600px) {
    padding: 0 40px;
  }
`;
const Header = styled.h1`
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.header};
  font-size: 20px;
  font-weight: 600;
  width: fit-content;
  cursor: pointer;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const Nav = () => {
  const { setInputText, setFilteredCountries, setSearchQuery } = useCountry();

  const handleHomeClick = () => {
    setInputText("");
    setFilteredCountries([]);
    setSearchQuery("");
  };

  return (
    <Container>
      <Header onClick={handleHomeClick}>Countries of the World</Header>
      <DarkMode />
    </Container>
  );
};

export default Nav;

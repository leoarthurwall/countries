import styled from "styled-components";
import { IoMoonOutline } from "react-icons/io5";
import { useContext } from "react";
import { useCountry } from "../../Context/CountryContext";

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
  font-weight: 700;
  width: fit-content;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const DarkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: ${(props) => props.theme.fontColor};
  cursor: pointer;
  @media (max-width: 600px) {
    padding: 8px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.circle};
    box-shadow: ${(props) => props.theme.boxShadow} 0px 1px 4px;
    transition: 0.2s;
    &:hover {
      background-color: ${(props) => props.theme.circleHover};
    }
  }
`;
const DarkText = styled.h4`
  margin: 0;
  font-size: 16px;
  color: ${(props) => props.theme.header};
  font-weight: 600;
  @media (max-width: 600px) {
    display: none;
  }
`;
const Nav = () => {
  const {handleColorThemeClick} = useCountry();
  return (
    <Container>
      <Header>Where in the world?</Header>
      <DarkContainer onClick={handleColorThemeClick} >
        <IoMoonOutline />
        <DarkText>Dark Mode</DarkText>
      </DarkContainer>
    </Container>
  );
};

export default Nav;

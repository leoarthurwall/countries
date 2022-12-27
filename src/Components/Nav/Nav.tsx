import styled from "styled-components";
import { IoMoonOutline } from "react-icons/io5";

const Container = styled.nav`
  height: 60px;
  widht: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 70px;
  box-sizing: border-box;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
const Header = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: 700;
  width: fit-content;
`;

const DarkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  @media (max-width: 600px) {
    padding: 8px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.05);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    transition: 0.2s;
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`;
const DarkText = styled.h4`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  @media (max-width: 600px) {
    display: none;
  }
`;
const Nav = () => {
  return (
    <Container>
      <Header>Where in the world?</Header>
      <DarkContainer>
        <IoMoonOutline />
        <DarkText>Dark Mode</DarkText>
      </DarkContainer>
    </Container>
  );
};

export default Nav;

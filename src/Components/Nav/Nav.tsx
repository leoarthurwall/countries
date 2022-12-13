import styled from "styled-components";
import { IoMoonOutline } from "react-icons/io5";

const Container = styled.nav`
  height: 60px;
  widht: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 70px;
  border: 1px solid blue;
  box-sizing: border-box;
`;
const Header = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: 600;
  width: fit-content;
`;

const DarkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding
`;
const DarkText = styled.h4`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
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

import styled from "styled-components";

const Container = styled.nav`
    height: 60px;
    widht: 100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:  20px 40px;
    border: 1px solid blue;
    box-sizing: border-box;

`;
const Header = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: 600;
  border: 1px solid red;
  width: fit-content;
`;
const Nav = () => {
  return (
    <Container>
      <Header>Where in the world?</Header>
    </Container>
  );
};

export default Nav;

import styled from "styled-components";

const Container = styled.main`
height: 100vh;
width: 100vw;

display: flex:
flex-direction: column;
`;
const Header = styled.header``;

function App() {
  return (
    <Container>
      <Header>Hello World</Header>
    </Container>
  );
}

export default App;

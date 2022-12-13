import styled from "styled-components";
import Main from "./Components/Main/Main";
import Nav from "./Components/Nav/Nav";

const Container = styled.main`
height: 100vh;
width: 100vw;

display: flex:
flex-direction: column;
`;

function App() {
  return (
    <Container>
      <Nav />
      <Main />
    </Container>
  );
}

export default App;

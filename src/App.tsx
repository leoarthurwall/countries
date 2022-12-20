import styled from "styled-components";
import Nav from "./Components/Nav/Nav";
import Main from "./Components/Main/Main";
import CountryCard from "./Components/CountryCard/CountryCard";


const Container = styled.main`
height: 100%;
width: 100vw;

display: flex:
flex-direction: column;

`;

function App() {
  return (
    <Container>
      <Nav />
      <Main />
      <CountryCard />
    </Container>
  );
}

export default App;

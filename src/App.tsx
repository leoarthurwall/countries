import styled, { ThemeProvider } from "styled-components";
import Nav from "./Components/Nav/Nav";
import Main from "./Components/Main/Main";
import CountryCard from "./Components/CountryCard/CountryCard";

const Container = styled.body`
height: 100%;
width: 100vw;
background-color: ${(props) => props.theme.body};
display: flex:
flex-direction: column;

`;
const lightTheme = {
  body: "#FAFAFA",
  header: "#000",
  fontColor: "#666",
  fontSpanColor: "#808080",
  mainBackgroundColor: "#fff",
  placeholder: "#808080",
  searchHoverBackground: "#e8eaed",
  boxShadow: "rgba(0, 0, 0, 0.16)",
};

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Container>
        <Nav />
        <Main />
        <CountryCard />
      </Container>
    </ThemeProvider>
  );
}

export default App;

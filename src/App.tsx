import styled, { ThemeProvider } from "styled-components";
import Nav from "./Components/Nav/Nav";
import Main from "./Components/Main/Main";
import CountryCard from "./Components/CountryCard/CountryCard";
import { useCountry } from "./Context/CountryContext";

const Container = styled.main`
min-height: 100vh;
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
  circle: "rgba(0, 0, 0, 0.05)",
  circleHover: "rgba(0, 0, 0, 0.2)",
  circleIconColor: "#000",
  accentColor: "#334560",
  accentColorHover: "#222D35",
  buttonTextColor: "#fff",
};

const darkTheme = {
  body: "#222D35",
  header: "#fff",
  fontColor: "#fff",
  fontSpanColor: "#fff",
  mainBackgroundColor: "#2D3641",
  placeholder: "#fff",
  searchHoverBackground: "#334560",
  boxShadow: "rgba(0, 0, 0, 0.16)",
  circle: "#334560",
  circleHover: "#222D35",
  circleIconColor: "#fff",
  accentColor: "#334560",
  accentColorHover: "#222D35",
  buttonTextColor: "#fff",
};

function App() {
  const { isDarkMode } = useCountry();
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Container>
        <Nav />
        <Main />
        <CountryCard />
      </Container>
    </ThemeProvider>
  );
}

export default App;

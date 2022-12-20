import styled from "styled-components";
import Main from "./Components/Main/Main";
import Nav from "./Components/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import Country from "./Pages/Country";

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
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/country" element={<Country />} />
      </Routes>
    </Container>
  );
}

export default App;

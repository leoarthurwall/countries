import styled from "styled-components";
import Nav from "./Components/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import Country from "./Pages/Country";
import Home from "./Pages/Home";


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
        <Route path="/" element={<Home />} />
        <Route path="/country" element={<Country />} />
      </Routes>
    </Container>
  );
}

export default App;

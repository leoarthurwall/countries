import styled from "styled-components"
import Upper from "./Upper/Upper"

const Container = styled.main`
height: 100%;
width: 100%;

display: flex;
flex-direction: column;
`

const Main = () => {
  return (
    <Container>
        <Upper />
    </Container>
  )
}

export default Main
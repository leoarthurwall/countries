import styled from "styled-components"
import Upper from "./Upper/Upper"
import { ReactElement } from "react";


const Container = styled.main`
height: 100%;
width: 100%;

display: flex;
flex-direction: column;
`

const Main: React.FC = (): ReactElement => {
  return (
    <Container>
        <Upper />
    </Container>
  )
}

export default Main
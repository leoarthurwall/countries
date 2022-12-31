import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 20px;
width: 40px;
color: ${(props) => props.theme.fontColor};
border: ${(props) => props.theme.fontColor} 1px solid;


`

const DarkMode = () => {
  return (
    <Container>DarkMode</Container>
  )
}

export default DarkMode
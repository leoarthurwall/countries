import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: auto;
  width: 45px;
  color: ${(props) => props.theme.fontColor};
  border: ${(props) => props.theme.fontColor} 1px solid;
  border-radius: 25px;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const IconCircle = styled.div`
  height: 20px;
  width: 20px;
  background-color: ${(props) => props.theme.fontColor};
  border-radius: 50%;
  margin: 1px;
`;
const DarkMode = () => {
  return (
    <Container>
      <IconCircle></IconCircle>
    </Container>
  );
};

export default DarkMode;

import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { useCountry } from "../../../Context/CountryContext";

const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: auto;
  width: 100%;

`;

const CloseCircle = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.circle};
  box-shadow: ${(props) => props.theme.boxShadow} 0px 1px 4px;
  transition: 0.2s;
  margin: 20px;
  color: ${(props) => props.theme.circleIconColor};


  &:hover {
    background-color: ${(props) => props.theme.circleHover};
  }
  cursor: pointer;
`;
const CardUpper = () => {
  const { handleCountryModalClick} = useCountry()
  return (
    <Container>
      <CloseCircle onClick={handleCountryModalClick}>
        <AiOutlineClose size={16} />
      </CloseCircle>
    </Container>
  );
};

export default CardUpper;

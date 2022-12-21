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
  background-color: rgba(0, 0, 0, 0.4);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  transition: 0.2s;
  margin: 20px;


  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
  cursor: pointer;
`;
const CardUpper = () => {
  const { handleCountryModalClick} = useCountry()
  return (
    <Container>
      <CloseCircle onClick={handleCountryModalClick}>
        <AiOutlineClose size={16} style={{ color: "white" }} />
      </CloseCircle>
    </Container>
  );
};

export default CardUpper;

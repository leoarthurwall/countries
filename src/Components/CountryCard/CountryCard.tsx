import styled from "styled-components";
import { ReactElement } from "react";
import CardUpper from "./CardUpper/CardUpper";
import CardLower from "./CardLower/CardLower";
import { useCountry } from "../../Context/CountryContext";

const Container = styled.section<IcountryModalOpen>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  visibility: ${({ countryModalOpen }) => !countryModalOpen && "hidden"};
  opacity: ${({ countryModalOpen }) => (!countryModalOpen ? "0" : "1")};
  transition: all 0.4s;
`;

const Card = styled.div`
  height: 70%;
  width: 70%;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

interface IcountryModalOpen {
  countryModalOpen: boolean;
}

const CountryCard: React.FC = (): ReactElement => {
  const { countryModalOpen, handleCountryModalClick } = useCountry();
  return (
    <Container
      countryModalOpen={countryModalOpen}
      onClick={handleCountryModalClick}
    >
      <Card>
        <CardUpper />
        <CardLower />
      </Card>
    </Container>
  );
};

export default CountryCard;

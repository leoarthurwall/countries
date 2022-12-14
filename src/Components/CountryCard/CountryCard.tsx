import styled from "styled-components";
import { ReactElement } from "react";
import CardUpper from "./CardUpper/CardUpper";
import CardLower from "./CardLower/CardLower";
import { useCountry } from "../../Context/CountryContext";
import CardMobile from "./CardMobile/CardMobile";
import { useMediaQuery } from "react-responsive";

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
  z-index: 100;
  visibility: ${({ countryModalOpen }) => !countryModalOpen && "hidden"};
  opacity: ${({ countryModalOpen }) => (!countryModalOpen ? "0" : "1")};
  transition: all 0.4s;
`;

const Card = styled.div`
  height: auto;
  width: 70%;
  max-width: 750px;
  background-color: ${(props) => props.theme.mainBackgroundColor};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  z-index: 120;
  @media(max-width:600px){
    width: 80%;
  }
`;

const Overlay = styled.div<IcountryModalOpen>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.7);
  z-index: 80;
  visibility: ${({ countryModalOpen }) => !countryModalOpen && "hidden"};
  opacity: ${({ countryModalOpen }) => (!countryModalOpen ? "0" : "1")};
  transition: all 0.4s;
`;
interface IcountryModalOpen {
  countryModalOpen: boolean;
}

const CountryCard: React.FC = (): ReactElement => {
  const { countryModalOpen, handleCountryModalClick } = useCountry();

  const isMobile = useMediaQuery({
    query: "(max-width: 600px)",
  });

  return (
    <Container countryModalOpen={countryModalOpen}>
      <Card>
        <CardUpper />
        {isMobile ? <CardMobile /> : <CardLower />}
      </Card>
      <Overlay
        onClick={handleCountryModalClick}
        countryModalOpen={countryModalOpen}
      />
    </Container>
  );
};

export default CountryCard;

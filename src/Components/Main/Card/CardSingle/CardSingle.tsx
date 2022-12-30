import styled from "styled-components";
import { useCountry } from "../../../../Context/CountryContext";
import { ICountries } from "../../../../ICountries";

const Container = styled.div`
  position: relative;
  height: 380px;
  width: 100%;
  min-width: 220px;
  max-width: 300px;
  background-color: ${(props) => props.theme.mainBackgroundColor};
  box-shadow: ${(props) => props.theme.boxShadow} 0px 1px 4px;

  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
const ContainerOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
`;

const Flag = styled.img`
  background-color: ${(props) => props.theme.placeholder};
  height: 50%;
  width: 100%;
`;
const TextContainer = styled.div`
  height: 50%;
  width: 100%;

  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
`;
const Header = styled.h4`
  margin-bottom: 15px;
  color: ${(props) => props.theme.header};
`;
const SubHeader = styled.h5`
  margin: 5px 0;
  color: ${(props) => props.theme.fontColor};
`;
const Result = styled.span`
  font-weight: 300;
  color: ${(props) => props.theme.fontSpanColor}
`;

type Props = {
  country: ICountries;
};

const CardSingle: React.FC<Props> = ({ country }) => {
  const { region, capital, population, name, flags } = country;
  const { handleCountryModalClick } = useCountry();

  const populationFormatted = population.toLocaleString("en-UK");

  return (
    <Container onClick={handleCountryModalClick}>
        <Flag src={flags.png} alt={`image of ${name.common}'s flag`}></Flag>
        <TextContainer>
          <Header>{name.common}</Header>
          <SubHeader>
            Population: <Result>{populationFormatted}</Result>
          </SubHeader>
          <SubHeader>
            Region: <Result>{region}</Result>
          </SubHeader>
          <SubHeader>
            Capital: <Result>{capital}</Result>
          </SubHeader>
        </TextContainer>
        <ContainerOverlay id={name.common} />
    </Container>
  );
};

export default CardSingle;

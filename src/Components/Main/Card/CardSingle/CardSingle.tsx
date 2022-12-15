import styled from "styled-components";
import { ICountries } from "../../../../ICountries";

const Container = styled.div`
  height: 380px;
  width: 100%;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  display: flex;
  flex-direction: column;
`;

const Flag = styled.img`
  background-color: #92d3ee;
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
`;
const SubHeader = styled.h5`
  margin:  5px 0;
`;
const Result = styled.span`
  font-weight: 300;
`;

type Props = {
  country: ICountries;
}

const CardSingle: React.FC<Props> = ({country}) => {

  const { region, capital, population, name, flags } = country

  return (
    <Container >
      <Flag src={flags.png} alt={`image of {name.common}'s flag`}></Flag>
      <TextContainer>
        <Header>{name.common}</Header>
        <SubHeader>
          Population: <Result>{population}</Result>
        </SubHeader>
        <SubHeader>
          Region: <Result>{region}</Result>
        </SubHeader>
        <SubHeader>
          Capital: <Result>{capital}</Result>
        </SubHeader>
      </TextContainer>
    </Container>
  );
};

export default CardSingle;

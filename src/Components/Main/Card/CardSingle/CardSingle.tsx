import styled from "styled-components";

const Container = styled.div`
  height: 400px;
  width: 100%;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  display: flex;
  flex-direction: column;
`;

const Flag = styled.div`
  background-color: #92d3ee;
  height: 45%;
  width: 100%;
`;
const TextContainer = styled.div`
  height: 55%;
  width: 100%;

  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
`;
const Header = styled.h4`
margin: 0;`;
const SubHeader = styled.h5`
margin: 0;`
const Result = styled.span`
font-weight:300`

const CardSingle = () => {
  return (
    <Container>
      <Flag></Flag>
      <TextContainer>
        <Header>Germany</Header>
        <SubHeader>Population: <Result>81,770,343</Result></SubHeader>
        <SubHeader>Region: <Result>Europe</Result></SubHeader>
        <SubHeader>Capital: <Result>Berlin</Result></SubHeader>
      </TextContainer>
    </Container>
  );
};

export default CardSingle;

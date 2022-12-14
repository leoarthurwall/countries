import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 50px;
  grid-column-gap: 25px;
`;

const CardSingle = styled.div`
  height: 400px;
  width: 100%;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const Card = () => {
  return (
    <Container>
      <CardSingle />
      <CardSingle />
      <CardSingle />
      <CardSingle />
      <CardSingle />
      <CardSingle />
      <CardSingle />
    </Container>
  );
};

export default Card;

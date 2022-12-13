import styled from "styled-components";
import Search from "./Search/Search";

const Container = styled.section`
  width: 100%;
  padding: 30px 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid blue;
`;
const Upper = () => {
  return (
    <Container>
      <Search />
    </Container>
  );
};

export default Upper;

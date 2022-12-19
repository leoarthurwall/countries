import styled from "styled-components";
import { ReactElement } from "react";
import SearchBar from "./SearchBar/SearchBar";
import Dropdown from "./Dropdown/Dropdown";
import { useCountry } from "../../../Context/CountryContext";

const Container = styled.section`
  width: 100%;
  padding: 40px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 25px;
  }
`;

const Text = styled.h3`
  font-weight: 500;
`;
const Span = styled.span`
  font-weight: 300;
  font-size: 14px;
  color: grey;
`;
const SpanQuery = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: grey;
`;

const Upper: React.FC = (): ReactElement => {
  const { countries, filteredCountries, searchQuery } =
    useCountry();

  // CAPITALISES ONLY THE FIRST LETTER OF THE SEARCHQUERY STRING
  const queryWithCapFirstLetter =
    searchQuery.toLowerCase().charAt(0).toUpperCase() + searchQuery.slice(1);
  console.log({ searchQuery });

  //  function countryQuantity () {
  //   if(filteredCountries.length === 1) {
  //     return "country"
  //   } else {
  //     return "countries"
  //   }
  //  }
  console.log("FCL", filteredCountries.length);

  return (
    <Container>
      <SearchBar />
      {searchQuery === "" ? (
        <Text>
          All <Span>({countries.length} countries)</Span>
        </Text>
      ) : (
        <Text>
          <SpanQuery>Current Search:</SpanQuery> {queryWithCapFirstLetter}
          {filteredCountries.length > 1 && (
            <Span> ({filteredCountries.length}) countries </Span>
          )}
        </Text>
      )}

      <Dropdown />
    </Container>
  );
};

export default Upper;

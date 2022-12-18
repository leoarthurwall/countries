import styled from "styled-components";
import { ReactElement } from "react";
import SearchBar from "./SearchBar/SearchBar";
import Dropdown from "./Dropdown/Dropdown";

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

type Props = {
  countries: any;
  selectedItem: string;
  setSelectedItem: (val: string) => void;
  filteredItems: any[];
  inputText: string;
  setInputText: (val: string) => void;
};
const Upper: React.FC<Props> = ({
  countries,
  selectedItem,
  setSelectedItem,
  filteredItems,
  inputText,
  setInputText,
}): ReactElement => {
  return (
    <Container>
      <SearchBar countries={countries} inputText={inputText} setInputText={setInputText}/>
      {selectedItem === "" ? (
        <Text>
          All <Span>({countries.length} countries)</Span>
        </Text>
      ) : (
        <Text>
          {selectedItem} <Span>({filteredItems.length} countries)</Span>
        </Text>
      )}

      <Dropdown
        countries={countries}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
    </Container>
  );
};

export default Upper;

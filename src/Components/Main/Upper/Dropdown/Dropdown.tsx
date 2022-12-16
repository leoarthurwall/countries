import styled from "styled-components";
import { ReactElement } from "react";
import { BiChevronUp } from "react-icons/bi";
import { useState } from "react";

const Wrapper = styled.div`
  position: relative;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;
const DropdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  padding: 0 20px;
  width: 200px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  cursor: pointer;
`;
const Text = styled.h4`
  margin: 0;
  font-weight: 400;
  font-size: 14px;
`;
const IconContainer = styled.div<IisOpen>`
  height: 20px;
  width: 20px;

  transform: ${({ isOpen }) => isOpen && "rotate(0.5turn)"};
  transform-origin: center center;
  transition: all 0.4s ease-in-out;
`;
const DropdownMenu = styled.ul<IisOpen>`
  margin: 0;
  list-style: none;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 10px 0;
  position: absolute;
  width: 200px;
  top: 55px;
  box-sizing: border-box;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
`;
const DropdownItem = styled.li`
  font-weight: 400;
  font-size: 14px;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #e8eaed;
  }
`;

interface IisOpen {
  isOpen: Boolean;
}

type Props = {
  countries: any;
  selectedItem: string;
  setSelectedItem: (val: string) => void;
};

const Dropdown: React.FC<Props> = ({
  countries,
  selectedItem,
  setSelectedItem,
}): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDropdownClick = (val: any) => {
    setIsOpen(!isOpen);
  };

  const handleSelectedOption = (e: any) => {
    setSelectedItem(e.target.innerHTML);
    setIsOpen(!isOpen);
    console.log({ selectedItem });
  };

  return (
    <Wrapper>
      <DropdownContainer onClick={handleDropdownClick}>
        <Text> Filter by Region</Text>
        <IconContainer isOpen={isOpen}>
          <BiChevronUp size={"auto"} />
        </IconContainer>
      </DropdownContainer>
      <DropdownMenu isOpen={isOpen}>
        <DropdownItem onClick={handleSelectedOption}>Europe</DropdownItem>
        <DropdownItem onClick={handleSelectedOption}>Americas</DropdownItem>
        <DropdownItem onClick={handleSelectedOption}>Africa</DropdownItem>
        <DropdownItem onClick={handleSelectedOption}>Asia</DropdownItem>
        <DropdownItem onClick={handleSelectedOption}>Oceania</DropdownItem>
      </DropdownMenu>
    </Wrapper>
  );
};

export default Dropdown;

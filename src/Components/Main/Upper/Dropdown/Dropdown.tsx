import styled from "styled-components";
import { ReactElement } from "react";
import { BiChevronUp } from "react-icons/bi";

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
`;
const Text = styled.h4`
  margin: 0;
  font-weight: 400;
  font-size: 14px;
`;
const DropdownMenu = styled.ul`
  margin: 0;
  list-style: none;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 10px 20px;
  position: absolute;
  width: 200px;
  top: 55px;
  box-sizing: border-box;
`;
const DropdownItem = styled.li`
  font-weight: 400;
  font-size: 14px;
  padding: 10px 0;
`;
const Dropdown: React.FC = (): ReactElement => {
  return (
    <Wrapper>
      <DropdownContainer>
        <Text> Filter by Region</Text>
        <BiChevronUp size={20} />
      </DropdownContainer>
      <DropdownMenu>
        <DropdownItem>Europe</DropdownItem>
        <DropdownItem> America</DropdownItem>
        <DropdownItem>Africa</DropdownItem>
        <DropdownItem> Asia</DropdownItem>
        <DropdownItem>Oceana</DropdownItem>
      </DropdownMenu>
    </Wrapper>
  );
};

export default Dropdown;

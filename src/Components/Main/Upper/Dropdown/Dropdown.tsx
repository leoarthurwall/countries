import styled from "styled-components"
import { ReactElement } from "react";
import { BiChevronUp } from "react-icons/bi";


const DropdownContainer = styled.div`
`
const Text = styled.h4`
margin: 0;
`

const Dropdown: React.FC = (): ReactElement  => {
  return (
    <DropdownContainer>
        <Text> Filter by Region</Text>
        <BiChevronUp />
    </DropdownContainer>
  )
}

export default Dropdown
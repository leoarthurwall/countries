import styled from "styled-components"
import { ReactElement } from "react";
import { BiChevronUp } from "react-icons/bi";


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

`
const Text = styled.h4`
margin: 0;
font-weight: 400;
font-size: 14px;
`

const Dropdown: React.FC = (): ReactElement  => {
  return (
    <DropdownContainer>
        <Text> Filter by Region</Text>
        <BiChevronUp size={20}/>
    </DropdownContainer>
  )
}

export default Dropdown
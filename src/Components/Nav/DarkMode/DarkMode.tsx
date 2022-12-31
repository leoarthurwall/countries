import styled from "styled-components";
import { useCountry } from "../../../Context/CountryContext";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const Container = styled.div<IisDarkMode>`
  height: 22px;
  width: 45px;
  color: ${(props) => props.theme.fontColor};
  border: ${(props) => props.theme.fontColor} 1px solid;
  border-radius: 25px;
  display: flex;
  align-items: center;
  cursor: pointer;
  animation-duration: 0.5s;
`;

const IconCircle = styled.div<IisDarkMode>`
  height: 20px;
  width: 20px;
  background-color: ${(props) => props.theme.fontColor};
  color: ${(props) => props.theme.mainBackgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  margin: 1px;
  transform: ${({ isDarkMode }) =>
    isDarkMode ? "translateX(0)" : "translateX(23px)"};
  transition: all 0.15s ease-in;
`;

interface IisDarkMode {
  isDarkMode: Boolean;
}

const DarkMode = () => {
  const { isDarkMode, handleColorThemeClick } = useCountry();
  return (
    <Container onClick={handleColorThemeClick} isDarkMode={isDarkMode}>
      <IconCircle isDarkMode={isDarkMode}>
        {isDarkMode ? <BsFillMoonFill size={14}/> : <BsFillSunFill size={14}/>}
      </IconCircle>
    </Container>
  );
};

export default DarkMode;

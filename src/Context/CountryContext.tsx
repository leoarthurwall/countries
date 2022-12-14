import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { ICountries } from "../ICountries";

type CountryProviderProps = {
  children: ReactNode;
};

type CountryContextProps = {
  countries: any[];
  setCountries: (val: any[]) => void;
  isDropdownOpen: boolean;
  setIsDropdownOpen: (val: boolean) => void;
  inputText: string;
  setInputText: (val: string) => void;
  inputReturn: any[];
  isSearchOpen: boolean;
  setIsSearchOpen: (val: boolean) => void;
  filteredCountries: any[];
  setFilteredCountries: (val: any[]) => void;
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  countryModalOpen: boolean;
  setCountryModalOpen: (val: boolean) => void;
  handleCountryModalClick: (val: any) => void;
  modalCountry: any[];
  setModalCountry: (val: any[]) => void;
  modalCountryBorders: any[];
  setModalCountryBorders: (val: any[]) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  handleColorThemeClick: (val: any) => void;
  handleBoarderClick: (val: any) => void;
};
const CountryContext = createContext({} as CountryContextProps);

export function useCountry() {
  return useContext(CountryContext);
}

export function CountryProvider({ children }: CountryProviderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false); // boolean that states if dropdown is open or closed
  const [countries, setCountries] = useState<ICountries[]>([]); // Array that stores all of the country data from the API
  const [inputText, setInputText] = useState<any>(""); // stores the input text as string
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false); //State to know if search bar is open or closed
  const [filteredCountries, setFilteredCountries] = useState<ICountries[]>([]); // Array of filtered countries from dropdown or input change
  const [searchQuery, setSearchQuery] = useState<string>(""); // Stores the search query of the user: dorpodown selection or input string
  const [countryModalOpen, setCountryModalOpen] = useState<boolean>(false); // boolean to state if country modal is open or closed
  const [modalCountry, setModalCountry] = useState<ICountries[]>([]); //Array that stores the modal display country
  const [modalCountryBorders, setModalCountryBorders] = useState<ICountries[]>(
    []
  ); // Array that stores the modal country's borders
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false); //boolean to toggle dark mode on or off

  
  //ON CLICK HANDLER THAT DISPLAYS THE COUNTRY OF THE BOARDER THAT IS CLICKED
  const handleBoarderClick = (e: any) => {
    const clickedBorder: any[] = [...countries].filter(
      (country) => country.cca3 === e.target.innerText
    );
    setModalCountry(clickedBorder);
  };

  //TOGGLES BETWEEN LIGHT AND DARK MODE
  const handleColorThemeClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  //FETCHES COUNTRY DATA FROM API
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setCountries(json);
      });
  }, []);
  console.log({ countries });

  // CREATES AN ARRAY THAT MATCHES THE INPUT TEXT COUNTRY
  const inputReturn: any[] = countries.filter(
    (country: any) =>
      country.name.common.toLowerCase() === inputText.toLowerCase()
  );
  console.log({ inputReturn });

  // TOGGLES THE MODAL TO OPEN AND CLOSE
  const handleCountryModalClick = (e: any) => {
    setModalCountry(
      [...countries].filter(
        (country: any) => country.name.common === e.target.id
      )
    );

    setCountryModalOpen(!countryModalOpen);
  };
  console.log({ modalCountry });

  return (
    <CountryContext.Provider
      value={{
        countries,
        setCountries,
        isDropdownOpen,
        setIsDropdownOpen,
        inputText,
        setInputText,
    
        inputReturn,
        isSearchOpen,
        setIsSearchOpen,
        filteredCountries,
        setFilteredCountries,
        searchQuery,
        setSearchQuery,
        countryModalOpen,
        setCountryModalOpen,
        handleCountryModalClick,
        modalCountry,
        setModalCountry,
        modalCountryBorders,
        setModalCountryBorders,
        isDarkMode,
        setIsDarkMode,
        handleColorThemeClick,
        handleBoarderClick,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}

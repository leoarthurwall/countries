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
  selectedCountry: string;
  setSelectedCountry: (val: string) => void;
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
};
const CountryContext = createContext({} as CountryContextProps);

export function useCountry() {
  return useContext(CountryContext);
}

export function CountryProvider({ children }: CountryProviderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [countries, setCountries] = useState<ICountries[]>([]);
  const [inputText, setInputText] = useState<any>("");
  const [selectedCountry, setSelectedCountry] = useState<any>("");
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(true);
  const [filteredCountries, setFilteredCountries] = useState<ICountries[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [countryModalOpen, setCountryModalOpen] = useState<boolean>(false);
  const [modalCountry, setModalCountry] = useState<ICountries[]>([]);

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
        selectedCountry,
        setSelectedCountry,
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
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}

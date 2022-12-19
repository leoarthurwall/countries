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
  selectedRegion: string;
  setSelectedRegion: (val: string) => void;
  inputText: string;
  setInputText: (val: string) => void;
  selectedCountry: string;
  setSelectedCountry: (val: string) => void;
//   filteredItems: any[];
  inputReturn: any[];
  isSearchOpen: boolean;
  setIsSearchOpen: (val: boolean) => void;
  filteredCountries: any[];
  setFilteredCountries: (val: any[]) => void;
};
const CountryContext = createContext({} as CountryContextProps);

export function useCountry() {
  return useContext(CountryContext);
}

export function CountryProvider({ children }: CountryProviderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [countries, setCountries] = useState<ICountries[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [inputText, setInputText] = useState<any>("");
  const [selectedCountry, setSelectedCountry] = useState<any>("");
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(true);
  const [filteredCountries, setFilteredCountries] = useState<ICountries[]>([]);

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

  //CREATES AN ARRAY THAT MATCHES THE SELECTED REGION FROM THE DROPDOWN
//   const filteredItems: any[] = countries.filter(
//     (country: any) => country.region === selectedRegion
//   );
//   console.log({ filteredItems });

  // CREATES AN ARRAY THAT MATCHES THE INPUT TEXT COUNTRY
  const inputReturn: any[] = countries.filter(
    (country: any) =>
      country.name.common.toLowerCase() === inputText.toLowerCase()
  );
  console.log({ inputReturn });

  return (
    <CountryContext.Provider
      value={{
        countries,
        setCountries,
        isDropdownOpen,
        setIsDropdownOpen,
        selectedRegion,
        setSelectedRegion,
        inputText,
        setInputText,
        selectedCountry,
        setSelectedCountry,
        // filteredItems,
        inputReturn,
        isSearchOpen,
        setIsSearchOpen,
        filteredCountries,
        setFilteredCountries,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}

import { createContext, ReactNode, useContext, useState } from "react";
import { ICountries } from "../ICountries";

type CountryProviderProps = {
  children: ReactNode;
};

type CountryContextProps = {
  countries: any[];
  setCountries: (val: any[]) => void;
  isDropdownOpen: boolean;
  setIsDropdownOpen: (val: boolean) => void;
  selectedItem: string;
  setSelectedItem: (val: string) => void;
  inputText: string;
  setInputText: (val: string) => void;
  selectedCountry: string;
  setSelectedCountry: (val: string) => void;
  filteredItems: any[];
  inputReturn: any[];
  isSearchOpen: boolean;
  setIsSearchOpen: (val: boolean) => void;
};
const CountryContext = createContext({} as CountryContextProps);

export function useCountry() {
  return useContext(CountryContext);
}

export function CountryProvider({ children }: CountryProviderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [countries, setCountries] = useState<ICountries[]>([]);
  const [selectedItem, setSelectedItem] = useState<string>("");
  const [inputText, setInputText] = useState<any>("");
  const [selectedCountry, setSelectedCountry] = useState<any>("");
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(true);


  //CREATES AN ARRAY THAT MATCHES THE SELECTED REGION FROM THE DROPDOWN
  const filteredItems: any[] = countries.filter(
    (country: any) => country.region === selectedItem
  );
  console.log({ filteredItems });

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
        selectedItem,
        setSelectedItem,
        inputText,
        setInputText,
        selectedCountry,
        setSelectedCountry,
        filteredItems,
        inputReturn,
        isSearchOpen,
        setIsSearchOpen,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}

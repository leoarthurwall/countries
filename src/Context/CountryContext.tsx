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
  const [selectedCountry, setSelectedCountry] = useState<any>("") 


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
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}

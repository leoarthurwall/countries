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
};
const CountryContext = createContext({} as CountryContextProps);

export function useCountry() {
  return useContext(CountryContext);
}

export function CountryProvider({ children }: CountryProviderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [countries, setCountries] = useState<ICountries[]>([]);
  const [selectedItem, setSelectedItem] = useState<string>("");


  return (
    <CountryContext.Provider
      value={{
        countries,
        setCountries,
        isDropdownOpen,
        setIsDropdownOpen,
        selectedItem,
        setSelectedItem,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}

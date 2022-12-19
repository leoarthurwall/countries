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
};
const CountryContext = createContext({} as CountryContextProps);

export function useCountry() {
  return useContext(CountryContext);
}

export function CountryProvider({ children }: CountryProviderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [countries, setCountries] = useState<ICountries[]>([]);

  return (
    <CountryContext.Provider
      value={{
        countries,
        setCountries,
        isDropdownOpen,
        setIsDropdownOpen,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}

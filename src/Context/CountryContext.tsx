import { createContext, ReactNode, useContext, useState } from "react";

type CountryProviderProps = {
  children: ReactNode;
};

type CountryContextProps = {
  isDropdownOpen: boolean;
  setIsDropdownOpen: (val: boolean) => void;
};
const CountryContext = createContext({} as CountryContextProps);

export function useCountry() {
  return useContext(CountryContext);
}

export function CountryProvider({ children }: CountryProviderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  return (
    <CountryContext.Provider
      value={{
        isDropdownOpen,
        setIsDropdownOpen,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}

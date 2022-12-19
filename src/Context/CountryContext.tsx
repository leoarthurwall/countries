import { createContext, ReactNode, useContext } from "react";

const CountryContext = createContext({});

export function useCountry() {
  return useContext(CountryContext);
}

type CountryProviderProps = {
    children: ReactNode
}

export function CountryProvider({children}: CountryProviderProps ) {
    return(
        <CountryContext.Provider value={{}}>
            {children}
        </CountryContext.Provider>
    )
}
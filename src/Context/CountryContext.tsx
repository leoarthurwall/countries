import { createContext, useContext } from "react";

const CountryContext = createContext({});

export function useCountry() {
  return useContext(CountryContext);
}

export function CountryProvider({children}) {
    return(
        <CountryContext.Provider value={{}}>
            {children}
        </CountryContext.Provider>
    )
}
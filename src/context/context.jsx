import { createContext } from "react";

export const GlobalContext = createContext();

const GlobalState = ({ children }) => {
  <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};

export default GlobalState;

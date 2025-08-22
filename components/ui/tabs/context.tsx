import { createContext, useContext } from "react";
import { TabBarContextProps } from "./types";

export const TabBarContext = createContext<TabBarContextProps | null>(null);

export const useTabBar = () => {
  const context = useContext(TabBarContext);
  if (!context) {
    throw new Error("useTabBar debe ser usado dentro de un TabBarItem");
  }
  return context;
};

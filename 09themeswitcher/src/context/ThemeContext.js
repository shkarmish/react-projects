import { createContext, useContext } from "react";

// Create context
export const ThemeContext = createContext();

// 2. Custom hook - usetheme() easily access
export const useTheme = () => useContext(ThemeContext);
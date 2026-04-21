import { createContext, useContext } from "react";

// 1. Context banao
export const ThemeContext = createContext();

// 2. Custom hook - har jagah useContext(ThemeContext) likhne ki zaroorat nahi
export const useTheme = () => useContext(ThemeContext);
import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

// 3. Provider - state yahan rahegi, poori app ko dega
function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
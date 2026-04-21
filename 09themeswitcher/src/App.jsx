import ThemeProvider from "./context/ThemeProvider";
import { useTheme } from "./context/ThemeContext";
import ToggleButton from "./components/ToggleButton";
import Card from "./components/Card";

// Created as a separate component so that useTheme() works
// (it must be inside the Provider)
function Layout() {
  const { isDark } = useTheme();

  return (
    <div className={`
      min-h-screen flex flex-col items-center justify-center gap-6
      transition-colors duration-500
      ${isDark ? "bg-slate-900" : "bg-slate-100"}
    `}>
      {/* Toggle Button - Directly gets theme from Context */}
      <ToggleButton />

      {/* Card - Directly gets isDark from Context */}
      <Card />
    </div>
  );
}

// In App, you only need to wrap with the Provider
function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
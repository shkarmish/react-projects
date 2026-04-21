import ThemeProvider from "./context/ThemeProvider";
import { useTheme } from "./context/ThemeContext";
import ToggleButton from "./components/ToggleButton";
import Card from "./components/Card";

// Alag component isliye banaya taake useTheme() kaam kare
// (Provider ke andar hona zaroori hai)
function Layout() {
  const { isDark } = useTheme();

  return (
    <div className={`
      min-h-screen flex flex-col items-center justify-center gap-6
      transition-colors duration-500
      ${isDark ? "bg-slate-900" : "bg-slate-100"}
    `}>
      {/* Toggle Button - Context se directly theme uthata hai */}
      <ToggleButton />

      {/* Card - Context se directly isDark uthata hai */}
      <Card />
    </div>
  );
}

// App mein sirf Provider wrap karna hai
function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
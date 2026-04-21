import { useTheme } from "../context/ThemeContext";

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
      viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
      viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
    </svg>
  );
}

function ToggleButton() {
// Directly get isDark and toggleTheme from Context - no props needed!
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm
        transition-all duration-300 cursor-pointer shadow-md
        ${isDark
          ? "bg-slate-700 text-yellow-300 hover:bg-slate-600 border border-slate-500"
          : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-300"
        }
      `}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default ToggleButton;
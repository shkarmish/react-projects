import { useTheme } from "../context/ThemeContext";

function Card() {
  // Context se isDark lo directly
  const { isDark } = useTheme();

  return (
    <div className={`
      w-80 rounded-2xl shadow-2xl overflow-hidden
      transition-all duration-500
      ${isDark ? "bg-slate-800 text-white" : "bg-white text-slate-800"}
    `}>

      {/* Card Image Placeholder */}
      <div className={`
        w-full h-44 flex items-center justify-center text-5xl
        transition-colors duration-500
        ${isDark ? "bg-slate-700" : "bg-slate-100"}
      `}>
        🌙
      </div>

      {/* Card Body */}
      <div className="p-6 space-y-3">

        {/* Badge */}
        <span className={`
          text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full
          ${isDark ? "bg-indigo-500 text-white" : "bg-indigo-100 text-indigo-600"}
        `}>
          Featured
        </span>

        {/* Title */}
        <h2 className="text-xl font-bold mt-2">Dark Mode Toggle</h2>

        {/* Description */}
        <p className={`text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vel amet eos voluptates ea voluptatum deleniti delectus voluptas sed quas, atque fugit necessitatibus placeat eveniet expedita deserunt accusamus autem quisquam!🎉
        </p>

        {/* Divider */}
        <hr className={`${isDark ? "border-slate-600" : "border-slate-200"}`} />

        {/* Footer */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2">
            <div className={`
              w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold
              ${isDark ? "bg-indigo-500 text-white" : "bg-indigo-100 text-indigo-600"}
            `}>
              TS
            </div>
            <span className={`text-xs font-medium ${isDark ? "text-slate-300" : "text-slate-600"}`}>
             React Theme Switcher
            </span>
          </div>
          <span className={`text-xs ${isDark ? "text-slate-500" : "text-slate-400"}`}>
            Apr 22, 2026
          </span>
        </div>

      </div>
    </div>
  );
}

export default Card;
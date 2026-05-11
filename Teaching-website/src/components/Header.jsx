import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/courses', label: 'Courses' },
  { to: '/experience', label: 'Experience' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/contact', label: 'Contact' },
  { to: '/about', label: 'About Me' },
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const desktopLinkClass = ({ isActive }) =>
    `transition hover:text-white ${isActive ? 'text-white' : ''}`

  const mobileLinkClass = ({ isActive }) =>
    `block rounded-2xl px-4 py-3 text-base transition hover:bg-slate-900 hover:text-white ${
      isActive ? 'bg-slate-900 text-white' : ''
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-sm sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500 text-sm font-bold text-slate-950">BG</span>
          <span>BrightGen Education</span>
        </Link>

        <nav className="hidden items-center gap-8 text-slate-300 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={desktopLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 md:inline-flex"
          >
            Start learning
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-200 transition hover:border-cyan-400 md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={`${menuOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden border-t border-slate-800 bg-slate-950 transition-[max-height] duration-300 md:hidden`}>
        <nav className="space-y-1.5 px-3 py-3 text-slate-200">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={mobileLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="block rounded-2xl bg-cyan-500 px-4 py-3 text-center text-base font-semibold text-slate-950 transition hover:bg-cyan-400"
            onClick={() => setMenuOpen(false)}
          >
            Start learning
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header;

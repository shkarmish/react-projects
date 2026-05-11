import { Link } from 'react-router-dom'

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/experience', label: 'Experience' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/contact', label: 'Contact' },
  { to: '/about', label: 'About Me' },
]

const Footer = () => {
  return (
    <footer className="border-t border-slate-800/90 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Link to="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-50">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500 text-sm font-bold text-slate-950">BG</span>
              <span>BrightGen Education</span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-slate-400">
              Trusted home tuition and online classes for Playgroup to Matric, Intermediate, and Graduation (B.Com &amp; BBA only) — by Sir Armish.
            </p>
            <div className="mt-6 space-y-1 text-sm">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=shkarmish@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate-300 transition hover:text-cyan-200"
              >
                shkarmish@gmail.com
              </a>
              <a
                href="https://wa.me/923234989003"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate-300 transition hover:text-cyan-200"
              >
                WhatsApp: +92 323 498 9003
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Explore</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {footerLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-slate-300 transition hover:text-cyan-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800/90 pt-6 text-sm text-slate-500">
          <p>© 2026 BrightGen Education. Trusted home tuition for Playgroup to Matric, Intermediate, and Graduation (B.Com &amp; BBA only).</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;

import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section id="home" className="bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 sm:pb-20 sm:pt-12 lg:px-8 lg:pb-4 lg:pt-10">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-8">
          <div className="space-y-8 lg:space-y-6">
            <div className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Playgroup → Matric • Intermediate • Graduation (B.Com &amp; BBA)
            </div>
            <div>
              <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
                BrightGen Education by Sir Armish — premium tuition for every stage.
              </h1>
              <p className="mt-6 max-w-2xl text-slate-300 sm:text-lg lg:mt-4 lg:text-base">
                Trusted home tuition and online classes for students from Playgroup to Matric, through Intermediate, and at the graduation level — B.Com and BBA only.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-7 py-3 text-base font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Explore courses
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-white/5 px-7 py-3 text-base font-semibold text-white transition hover:border-cyan-400 hover:bg-slate-900/80"
              >
                Get started
              </Link>
            </div>
          </div>

          <div className="space-y-6 rounded-3xl border border-slate-800/90 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-500/10 sm:p-8 lg:space-y-4 lg:p-5">
            <div className="rounded-3xl bg-slate-950/70 p-6 ring-1 ring-slate-800/70 lg:p-4">
              <p className="text-sm uppercase tracking-[0.22em] text-cyan-300">What students love</p>
              <h2 className="mt-4 text-2xl font-semibold text-white lg:mt-2 lg:text-xl">Real learning, real results</h2>
              <p className="mt-3 text-slate-300 lg:mt-2 lg:text-sm">
                Comprehensive tuition and structured study plans for every student.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:gap-3">
              <div className="rounded-3xl bg-slate-950/80 p-5 text-center ring-1 ring-slate-800/70 lg:p-4 lg:text-left">
                <p className="text-3xl font-semibold text-white lg:text-2xl">25+</p>
                <p className="mt-2 text-sm text-slate-400 lg:mt-1">Happy students taught personally</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-5 text-center ring-1 ring-slate-800/70 lg:p-4 lg:text-left">
                <p className="text-3xl font-semibold text-white lg:text-2xl">4.9/5</p>
                <p className="mt-2 text-sm text-slate-400 lg:mt-1">Average review from parents</p>
              </div>
            </div>
            <div className="rounded-3xl bg-cyan-500/10 p-5 text-slate-200 ring-1 ring-cyan-500/20 lg:p-4">
              <p className="text-sm uppercase tracking-[0.18em] text-cyan-300">Personal tuition</p>
              <p className="mt-3 text-base sm:text-lg lg:mt-2 lg:text-sm">
                One-on-one home tuition and online classes tailored to each student.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-950/80 p-5 text-slate-200 ring-1 ring-slate-800/70 lg:p-4">
              <p className="text-sm uppercase tracking-[0.18em] text-cyan-300">Contact Sir Armish</p>
              <a
                href="https://wa.me/923234989003"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-base text-cyan-300 transition hover:text-cyan-200 lg:mt-2 lg:text-sm"
              >
                WhatsApp: +92 323 498 9003
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=shkarmish@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-base text-cyan-300 transition hover:text-cyan-200 lg:text-sm"
              >
                Email: shkarmish@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;

import { useEffect, useState } from 'react'

const slides = [
  {
    title: 'Achieve top results in school exams',
    description: 'Tailored tuition for students aiming for strong grades and confident learning.',
    tag: 'Strong grades, smart guidance',
  },
  {
    title: 'Playgroup to Matric',
    description: 'Comprehensive support from early learning to board exams, with strong foundations in language, numbers, and confidence.',
    tag: 'Strong start, strong finish',
  },
  {
    title: 'BISE Lahore excellence for Matric & Intermediate',
    description: 'Targeted BISE Lahore coaching with crisp concept review, model paper practice, and results-driven exam preparation.',
    tag: 'Confidence, clarity, top marks',
  },
  {
    title: 'Graduation — B.Com & BBA coaching',
    description: 'Practical, professional tuition at the graduation level — B.Com and BBA only — covering assignments, case studies, and exam preparation.',
    tag: 'Professional business tuition',
  },
]

const Banner = () => {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % slides.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-8">
        <div className="overflow-hidden rounded-[2rem] border border-cyan-500/20 bg-slate-900/70 p-8 shadow-2xl shadow-cyan-500/10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
                Learning spotlight
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
                {slides[active].title}
              </h2>
              <p className="max-w-3xl text-slate-300 sm:text-lg">
                {slides[active].description}
              </p>
            </div>
            <div className="w-full max-w-[16rem] self-center rounded-3xl bg-slate-950/90 p-5 text-center ring-1 ring-cyan-500/20 sm:max-w-sm sm:p-8 lg:max-w-none lg:self-auto">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">{slides[active].tag}</p>
              <p className="mt-4 text-xl font-semibold text-white">Sir Armish</p>
              <a
                href="https://wa.me/923234989003"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                WhatsApp now
              </a>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                onClick={() => setActive(index)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  index === active
                    ? 'bg-cyan-500 text-slate-950'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner;

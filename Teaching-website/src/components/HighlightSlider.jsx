import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const unsplash = (id) =>
  `https://images.unsplash.com/photo-${id}?q=80&auto=format&fit=crop`

const buildSrcSet = (base) =>
  [600, 1000, 1400, 1800].map((w) => `${base}&w=${w} ${w}w`).join(', ')

const SLIDE_SIZES = '(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1280px'

const slides = [
  {
    id: 'home-tuition',
    eyebrow: 'Personal Home Tuition',
    title: 'One-on-one lessons at your home.',
    description:
      'Personalised teaching tailored to each student’s pace, schedule, and learning style — anywhere in Lahore.',
    cta: { label: 'Explore courses', to: '/courses' },
    image: unsplash('1522202176988-66273c2fd55f'),
    overlayFrom: 'from-cyan-500/40',
  },
  {
    id: 'board-prep',
    eyebrow: 'BISE Lahore Board Prep',
    title: 'Score top grades in Matric and Inter.',
    description:
      'Past papers, mock tests, and structured revision frameworks built for board exam success.',
    cta: { label: 'See programs', to: '/courses' },
    image: unsplash('1456513080510-7bf3a84b82f8'),
    overlayFrom: 'from-blue-500/40',
  },
  {
    id: 'online-classes',
    eyebrow: 'Online Classes Available',
    title: 'Prefer online? We’ve got you covered.',
    description:
      'Same quality one-on-one teaching as home tuition — on a flexible schedule that fits your day.',
    cta: { label: 'Book a class', to: '/contact' },
    image: unsplash('1497486751825-1233686d5d80'),
    overlayFrom: 'from-emerald-500/40',
  },
  {
    id: 'graduation',
    eyebrow: 'Graduation Coaching',
    title: 'Specialist B.Com & BBA tuition.',
    description:
      'Professional graduation-level coaching covering business studies, assignments, case studies, and exams.',
    cta: { label: 'Get started', to: '/contact' },
    image: unsplash('1523240795612-9a054b0db644'),
    overlayFrom: 'from-violet-500/40',
  },
]

const SWIPE_THRESHOLD = 50

const HighlightSlider = () => {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef(null)
  const touchDeltaX = useRef(0)

  useEffect(() => {
    if (paused) return undefined
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % slides.length)
    }, 5500)
    return () => clearInterval(interval)
  }, [paused])

  const goTo = (index) => {
    const total = slides.length
    setActive(((index % total) + total) % total)
  }

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX
    touchDeltaX.current = 0
    setPaused(true)
  }

  const handleTouchMove = (event) => {
    if (touchStartX.current === null) return
    touchDeltaX.current = event.touches[0].clientX - touchStartX.current
  }

  const handleTouchEnd = () => {
    if (touchStartX.current === null) return
    const delta = touchDeltaX.current
    if (delta <= -SWIPE_THRESHOLD) {
      goTo(active + 1)
    } else if (delta >= SWIPE_THRESHOLD) {
      goTo(active - 1)
    }
    touchStartX.current = null
    touchDeltaX.current = 0
    setPaused(false)
  }

  return (
    <section className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div
          className="relative touch-pan-y select-none overflow-hidden rounded-[2rem] border border-slate-800/90 bg-slate-900/80 shadow-2xl shadow-cyan-500/10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <article key={slide.id} className="relative w-full flex-none">
                <div className="relative aspect-[16/11] sm:aspect-[16/8] lg:aspect-[16/6]">
                  <img
                    src={`${slide.image}&w=1400`}
                    srcSet={buildSrcSet(slide.image)}
                    sizes={SLIDE_SIZES}
                    alt={slide.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    fetchpriority={index === 0 ? 'high' : 'auto'}
                  />
                  <div className="absolute inset-0 bg-slate-950/55" />
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/30`}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent`}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${slide.overlayFrom} via-transparent to-transparent opacity-60`}
                  />
                  <div className="relative z-10 flex h-full max-w-2xl flex-col justify-end gap-3 p-6 sm:gap-4 sm:p-10 lg:max-w-xl lg:justify-center lg:p-14">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300 sm:text-sm">
                      {slide.eyebrow}
                    </p>
                    <h3 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                      {slide.title}
                    </h3>
                    <p className="text-sm text-slate-200 sm:text-base lg:text-lg">
                      {slide.description}
                    </p>
                    <div>
                      <Link
                        to={slide.cta.to}
                        className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                      >
                        {slide.cta.label}
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(active - 1)}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/60 p-2 text-white backdrop-blur transition hover:border-cyan-400 hover:bg-slate-950/80 sm:inline-flex"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/60 p-2 text-white backdrop-blur transition hover:border-cyan-400 hover:bg-slate-950/80 sm:inline-flex"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                index === active ? 'w-8 bg-cyan-400' : 'w-2.5 bg-slate-700 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HighlightSlider;

import { useEffect, useState } from 'react'
import { fetchReviews, subscribeToReviews } from '../lib/reviews'

const Testimonials = ({ showAddReviewButton = false }) => {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    fetchReviews()
      .then((rows) => {
        if (!cancelled) setTestimonials(rows)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    const unsubscribe = subscribeToReviews((newReview) => {
      setTestimonials((current) => {
        if (current.some((review) => review.id === newReview.id)) return current
        return [newReview, ...current]
      })
    })

    return () => {
      cancelled = true
      unsubscribe()
    }
  }, [])

  useEffect(() => {
    if (paused || testimonials.length <= 1) return undefined
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [paused, testimonials.length])

  const goTo = (index) => {
    const total = testimonials.length
    if (total === 0) return
    setActive(((index % total) + total) % total)
  }

  const next = () => goTo(active + 1)
  const prev = () => goTo(active - 1)

  return (
    <section id="testimonials" className="bg-slate-900 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8">
        <div
          className={
            showAddReviewButton
              ? 'flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between'
              : 'mx-auto max-w-3xl text-center'
          }
        >
          <div className={showAddReviewButton ? 'max-w-3xl' : ''}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Success stories</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              What students and parents say about Sir Armish.
            </h2>
          </div>
          {showAddReviewButton && (
            <a
              href="#add-review"
              className="inline-flex flex-none items-center justify-center gap-2 self-start rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 sm:self-auto"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Add a review
            </a>
          )}
        </div>

        {loading ? (
          <div className="mt-12 flex items-center justify-center rounded-[2rem] border border-slate-800/90 bg-slate-950/80 px-6 py-16 text-slate-400 shadow-xl shadow-slate-950/20">
            Loading reviews…
          </div>
        ) : testimonials.length === 0 ? (
          <div className="mt-12 flex flex-col items-center justify-center gap-3 rounded-[2rem] border border-slate-800/90 bg-slate-950/80 px-6 py-16 text-center text-slate-400 shadow-xl shadow-slate-950/20">
            <p className="text-base text-slate-300 sm:text-lg">No reviews yet — be the first to share your experience.</p>
            {showAddReviewButton ? (
              <a
                href="#add-review"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Write a review
              </a>
            ) : null}
          </div>
        ) : (
          <div
            className="mt-12"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
          <div className="overflow-hidden rounded-[2rem] border border-slate-800/90 bg-slate-950/80 shadow-xl shadow-slate-950/20">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {testimonials.map((item, index) => (
                <article
                  key={item.id || `${item.name}-${index}`}
                  className="w-full flex-none px-6 py-10 sm:px-12 sm:py-14"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-8 w-8 text-cyan-400/70"
                    fill="currentColor"
                  >
                    <path d="M7.17 6A5.17 5.17 0 002 11.17V18h6.83v-6.83H4.83A2.34 2.34 0 017.17 8.83V6zm10 0a5.17 5.17 0 00-5.17 5.17V18h6.83v-6.83h-4A2.34 2.34 0 0117.17 8.83V6z" />
                  </svg>
                  {item.rating ? (
                    <div className="mt-4 flex items-center gap-1" aria-label={`${item.rating} out of 5 stars`}>
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <svg
                          key={starIndex}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className={`h-4 w-4 ${
                            starIndex < item.rating ? 'text-cyan-400' : 'text-slate-700'
                          }`}
                        >
                          <path d="M12 2l2.95 6.31 6.95.66-5.2 4.78 1.5 6.85L12 17.27 5.8 20.6l1.5-6.85L2.1 8.97l6.95-.66z" />
                        </svg>
                      ))}
                    </div>
                  ) : null}
                  <p className="mt-6 text-lg leading-8 text-slate-200 sm:text-xl">
                    “{item.quote}”
                  </p>
                  <div className="mt-8">
                    <p className="font-semibold text-white">{item.name}</p>
                    <p className="text-sm text-slate-400">
                      {[item.role, item.level].filter(Boolean).join(' • ')}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous review"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-cyan-400 hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {testimonials.map((item, index) => (
                <button
                  key={item.id || `${item.name}-${index}`}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Go to review ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    index === active ? 'w-8 bg-cyan-400' : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next review"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-cyan-400 hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
        )}
      </div>
    </section>
  )
}

export default Testimonials;

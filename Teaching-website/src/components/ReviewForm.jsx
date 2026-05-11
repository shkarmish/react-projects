import { useState } from 'react'
import { submitReview } from '../lib/reviews'

const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/shkarmish@gmail.com'

const ratingOptions = [1, 2, 3, 4, 5]

const ReviewForm = () => {
  const [rating, setRating] = useState(5)
  const [hovered, setHovered] = useState(0)
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())

    try {
      await submitReview({
        name: payload.name,
        role: payload.role,
        level: payload.level,
        quote: payload.quote,
        rating,
      })

      fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...payload,
          rating: String(rating),
          _subject: 'New review submission — BrightGen Education',
          _template: 'table',
          _captcha: 'false',
          form_type: 'Review',
        }),
      }).catch(() => {})

      setStatus('success')
      form.reset()
      setRating(5)
    } catch (error) {
      setStatus('error')
      setErrorMessage(error.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <section id="add-review" className="scroll-mt-24 bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Share your experience</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Write a review for Sir Armish.
            </h2>
            <p className="text-slate-300 sm:text-lg">
              Have you or your child studied with Sir Armish? Share a short review and it will be
              added to the reviews above instantly.
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>• Your review appears in the slider immediately after submission.</li>
              <li>• Email is optional and kept private — not shown on the site.</li>
              <li>• Be specific — mention the class or level for context.</li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-[2rem] border border-slate-800/90 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20"
          >
            <div>
              <label htmlFor="review-name" className="text-sm uppercase tracking-[0.24em] text-cyan-300">
                Your name
              </label>
              <input
                id="review-name"
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-cyan-400"
                placeholder="e.g. Ayesha Khan"
              />
            </div>

            <div>
              <label htmlFor="review-role" className="text-sm uppercase tracking-[0.24em] text-cyan-300">
                Your role
              </label>
              <input
                id="review-role"
                name="role"
                type="text"
                required
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-cyan-400"
                placeholder="Parent or Student"
              />
            </div>

            <div>
              <label htmlFor="review-level" className="text-sm uppercase tracking-[0.24em] text-cyan-300">
                Class / Level
              </label>
              <input
                id="review-level"
                name="level"
                type="text"
                required
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-cyan-400"
                placeholder="e.g. Matric, Intermediate, B.Com, BBA"
              />
            </div>

            <div>
              <label htmlFor="review-email" className="text-sm uppercase tracking-[0.24em] text-cyan-300">
                Email <span className="ml-1 text-[0.65rem] tracking-normal text-slate-500">(optional, private)</span>
              </label>
              <input
                id="review-email"
                name="email"
                type="email"
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-cyan-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Rating</p>
              <div className="mt-2 flex items-center gap-1" onMouseLeave={() => setHovered(0)}>
                {ratingOptions.map((value) => {
                  const filled = (hovered || rating) >= value
                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setRating(value)}
                      onMouseEnter={() => setHovered(value)}
                      aria-label={`${value} star${value > 1 ? 's' : ''}`}
                      className="rounded-md p-1 transition hover:scale-110"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className={`h-7 w-7 transition-colors ${
                          filled ? 'text-cyan-400' : 'text-slate-600'
                        }`}
                        fill="currentColor"
                      >
                        <path d="M12 2l2.95 6.31 6.95.66-5.2 4.78 1.5 6.85L12 17.27 5.8 20.6l1.5-6.85L2.1 8.97l6.95-.66z" />
                      </svg>
                    </button>
                  )
                })}
                <span className="ml-2 text-sm text-slate-400">{rating} / 5</span>
              </div>
            </div>

            <div>
              <label htmlFor="review-quote" className="text-sm uppercase tracking-[0.24em] text-cyan-300">
                Your review
              </label>
              <textarea
                id="review-quote"
                name="quote"
                rows="5"
                required
                minLength="20"
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-cyan-400"
                placeholder="Share your experience studying with Sir Armish — subject, level, and what helped you most."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex w-full items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' ? 'Submitting…' : 'Submit review'}
            </button>

            {status === 'success' && (
              <p className="text-sm text-cyan-300">
                Thanks for your review! It has been added to the slider above.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-400">
                {errorMessage} You can also share your review on WhatsApp at +92 323 498 9003.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default ReviewForm;

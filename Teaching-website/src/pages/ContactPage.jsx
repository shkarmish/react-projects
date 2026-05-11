import { useState } from 'react'

const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/shkarmish@gmail.com'

const ContactPage = () => {
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
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error(`Request failed (${response.status})`)
      }

      const data = await response.json()
      if (data.success === 'true' || data.success === true) {
        setStatus('success')
        form.reset()
      } else {
        throw new Error(data.message || 'Submission failed')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage(error.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <section className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 sm:pt-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Get in touch</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let&apos;s plan your next lesson.
          </h2>
          <p className="mt-6 text-slate-300 sm:text-lg">
            Get in touch to start tuition, ask about exam preparation, or discuss home teaching options with Sir Armish.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-4 rounded-[2rem] border border-slate-800/90 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Email</p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=shkarmish@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-white transition hover:text-cyan-200"
              >
                shkarmish@gmail.com
              </a>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">WhatsApp</p>
              <a
                href="https://wa.me/923234989003"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-white transition hover:text-cyan-200"
              >
                +92 323 498 9003
              </a>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Call</p>
              <a
                href="tel:+923234989003"
                className="mt-2 block text-white transition hover:text-cyan-200"
              >
                +92 323 498 9003
              </a>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Tutor</p>
              <p className="mt-2 text-white">Sir Armish — Personal home tuition</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-[2rem] border border-slate-800/90 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20"
          >
            <input type="hidden" name="_subject" value="New lead from BrightGen Education website" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <div>
              <label htmlFor="name" className="text-sm uppercase tracking-[0.24em] text-cyan-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-cyan-400"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm uppercase tracking-[0.24em] text-cyan-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-cyan-400"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm uppercase tracking-[0.24em] text-cyan-300">
                WhatsApp / Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                pattern="[0-9+\s\-]{7,}"
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-cyan-400"
                placeholder="+92 3XX XXXXXXX"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm uppercase tracking-[0.24em] text-cyan-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-cyan-400"
                placeholder="Which class or subject do you need help with?"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex w-full items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            {status === 'success' && (
              <p className="text-sm text-cyan-300">
                Thanks — your message has been sent. Sir Armish will get back to you shortly.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-400">
                {errorMessage} You can also reach Sir Armish directly on WhatsApp at +92 323 498 9003.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactPage;

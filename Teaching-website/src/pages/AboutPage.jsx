const highlights = [
  'Personal home tuition tailored to each student’s pace',
  'Online classes with structured lesson plans and revision',
  'Strong focus on concept clarity, not rote learning',
  'Patient, encouraging style that builds long-term confidence',
]

const AboutPage = () => {
  return (
    <section className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 sm:pt-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">About me</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Hi, I&apos;m Sir Armish — founder of BrightGen Education.
            </h2>
            <p className="text-slate-300 sm:text-lg">
              I&apos;ve been teaching for over 5 years, helping students from Playgroup to Matric,
              through Intermediate, and at the graduation level — B.Com and BBA only — build strong
              academic foundations. My focus is on concept clarity, consistent practice, and a calm,
              supportive learning environment, both at home and online.
            </p>
            <p className="text-slate-300 sm:text-lg">
              Whether your child is preparing for board exams, struggling with a specific subject,
              or looking for serious B.Com or BBA support, I work closely with families to create a
              study plan that actually fits the student.
            </p>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex gap-3 text-slate-300">
                  <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3">
                      <path
                        fillRule="evenodd"
                        d="M16.7 5.3a1 1 0 010 1.4l-7 7a1 1 0 01-1.4 0l-3-3a1 1 0 111.4-1.4L9 11.6l6.3-6.3a1 1 0 011.4 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 rounded-[2rem] border border-slate-800/90 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20">
            <div className="overflow-hidden rounded-3xl ring-1 ring-slate-800/70">
              <img
                src="/sir-armish.jpg"
                alt="Sir Armish — Founder of BrightGen Education"
                className="aspect-square w-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-cyan-300">Quick facts</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Sir Armish</h3>
              <p className="mt-2 text-slate-400">Founder & Lead Tutor, BrightGen Education</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-950/70 p-5 ring-1 ring-slate-800/70">
                <p className="text-3xl font-semibold text-white">5+</p>
                <p className="mt-2 text-sm text-slate-400">Years teaching</p>
              </div>
              <div className="rounded-2xl bg-slate-950/70 p-5 ring-1 ring-slate-800/70">
                <p className="text-3xl font-semibold text-white">25+</p>
                <p className="mt-2 text-sm text-slate-400">Students mentored</p>
              </div>
            </div>
            <div className="rounded-2xl bg-cyan-500/10 p-5 ring-1 ring-cyan-500/20">
              <p className="text-sm uppercase tracking-[0.18em] text-cyan-300">Reach out</p>
              <a
                href="https://wa.me/923234989003"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-base text-cyan-200 transition hover:text-cyan-100"
              >
                WhatsApp: +92 323 498 9003
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=shkarmish@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-base text-cyan-200 transition hover:text-cyan-100"
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

export default AboutPage;

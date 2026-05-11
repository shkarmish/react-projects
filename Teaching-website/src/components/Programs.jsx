const programs = [
  {
    icon: '📝',
    title: 'Easy enrollment',
    description: 'Start with a single WhatsApp message or email and get your first lesson scheduled fast.',
  },
  {
    icon: '🎯',
    title: 'Personal learning plan',
    description: 'Each student receives a tailored study plan that maps progress from basics to exam readiness.',
  },
  {
    icon: '⏱️',
    title: 'Flexible learning rhythm',
    description: 'Online or home classes are booked around your day so students can learn consistently without stress.',
  },
  {
    icon: '📈',
    title: 'Progress focus',
    description: 'Regular reviews, quizzes, and feedback keep students confident and moving forward.',
  },
]

const Programs = () => {
  return (
    <section className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">How BrightGen works</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            A simple, confident learning journey for students and parents.
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            From the first session to exam preparation, every step is designed to be clear, supportive, and results-driven.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {programs.map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-slate-800/90 bg-slate-900/80 p-8 transition hover:-translate-y-1 hover:border-cyan-500/30">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-500/10 text-3xl">
                {item.icon}
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-slate-400">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs;

const features = [
  {
    title: 'Personal learning plans',
    body: 'Every student gets a plan tailored to goals, pace, and preferred learning style. Study the way that works best for you.',
  },
  {
    title: 'Personal teaching by Sir Armish',
    body: 'Every lesson is delivered personally by Sir Armish, with focused attention, clear feedback, and progress that shows up in school results.',
  },
  {
    title: 'Simple scheduling and time support',
    body: 'Online and home classes are arranged around your day, with flexible timing that keeps learning steady and stress-free.',
  },
]

const Features = () => {
  return (
    <section id="features" className="bg-slate-900 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Why choose BrightGen Education</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Expert home tuition for Playgroup to Matric, Intermediate, and Graduation level — B.Com &amp; BBA only.
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            Personalised lessons, strong exam preparation, and one-on-one support from Sir Armish for every student level.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-3xl border border-slate-800/90 bg-slate-950/70 p-8 transition hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-slate-900/90">
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-4 text-slate-400">{feature.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features;

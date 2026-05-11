const milestones = [
  {
    year: '2023 — Present',
    title: 'Founder & Lead Tutor — BrightGen Education',
    description:
      'Launched BrightGen Education to deliver focused one-on-one home tuition and structured online classes for serious students. Personally mentoring 25+ students from Playgroup to Matric, Intermediate, and Graduation (B.Com & BBA only) with custom study plans, board-paper drills, and consistent parent communication.',
  },
  {
    year: '2022 — 2023',
    title: 'Faculty — Punjab Group of Colleges (PGC), Lahore',
    description:
      'Taught Intermediate classes — including I.Com — at one of Lahore’s most established academic groups. Handled large-class instruction, BISE Lahore board preparation, past-paper sessions, and result-focused exam coaching for college-level students.',
  },
  {
    year: '2021 — 2022',
    title: 'Senior Subject Tutor — The Educators School System, Lahore',
    description:
      'Worked with Matric groups across core subjects, taking a lead role in BISE Lahore board preparation, mock-paper assessments, and weak-area remediation. Built revision frameworks that consistently improved student grades across the academic year.',
  },
]

const stats = [
  { label: 'Years teaching', value: '5+' },
  { label: 'Students mentored', value: '25+' },
  { label: 'Average review', value: '4.9/5' },
  { label: 'Levels covered', value: 'Playgroup, Matric, Intermediate, B.Com, BBA' },
]

const ExperiencePage = () => {
  return (
    <section className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 sm:pt-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Experience</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            5+ years of teaching across every learning stage.
          </h2>
          <p className="mt-6 text-slate-300 sm:text-lg">
            From early-years foundations to university-level business studies, Sir Armish has built a
            consistent track record of helping students grow with structure, patience, and clarity.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-slate-800/90 bg-slate-900/80 p-6">
              <p className="text-3xl font-semibold text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 space-y-6">
          {milestones.map((milestone) => (
            <article
              key={milestone.title}
              className="rounded-[2rem] border border-slate-800/90 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">{milestone.year}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{milestone.title}</h3>
              <p className="mt-3 text-slate-400">{milestone.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperiencePage;

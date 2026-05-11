const courses = [
  {
    name: 'Playgroup to Matric',
    description: 'Complete school support from early learning to board exams, including reading, writing, maths, science, and arts subjects.',
  },
  {
    name: 'Intermediate',
    description: 'Lahore Board Intermediate coaching with concept clarity, exam strategies, and strong classroom support.',
  },
  {
    name: 'Graduation — B.Com & BBA only',
    description: 'Professional tuition at the graduation level for B.Com and BBA students — business studies, assignments, case studies, and exam preparation. Other graduation programs are not offered.',
  },
]

const Courses = () => {
  return (
    <section id="courses" className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 sm:pt-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Learning levels</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Clear programs for Playgroup to Matric, Intermediate, and Graduation (B.Com &amp; BBA only).
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {courses.map((course) => (
            <article key={course.name} className="rounded-[2rem] border border-slate-800/90 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20 transition hover:-translate-y-1 hover:border-cyan-500/30">
              <div className="inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                {course.name}
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">{course.name}</h3>
              <p className="mt-4 text-slate-400">{course.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.24em] text-cyan-300">Live lessons</span>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.24em] text-cyan-300">Exam-ready</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses;

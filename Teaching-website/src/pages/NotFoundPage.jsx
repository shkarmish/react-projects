import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <section className="bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center gap-6 px-4 py-20 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">404</p>
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Page not found.
        </h1>
        <p className="max-w-xl text-slate-300 sm:text-lg">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Go to home
        </Link>
      </div>
    </section>
  )
}

export default NotFoundPage;

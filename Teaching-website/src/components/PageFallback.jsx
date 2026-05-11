const PageFallback = () => {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[40vh] items-center justify-center px-4 py-20 text-slate-400"
    >
      <span className="inline-flex items-center gap-3 text-sm">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-400" />
        Loading…
      </span>
    </div>
  )
}

export default PageFallback;

import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error) {
    console.error('Unhandled error:', error)
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="bg-slate-950 text-slate-100">
          <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center gap-6 px-4 py-20 text-center sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Something went wrong</p>
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              We hit an unexpected error.
            </h1>
            <p className="max-w-xl text-slate-300">
              Please reload the page. If the issue persists, contact Sir Armish on WhatsApp at +92 323 498 9003.
            </p>
            <button
              type="button"
              onClick={this.handleReload}
              className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Reload page
            </button>
          </div>
        </section>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary;

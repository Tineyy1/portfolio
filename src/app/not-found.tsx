import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-base bg-grid px-6">
      <div className="glass rounded-2xl px-8 py-10 max-w-md w-full text-center">
        <p className="font-mono text-signal text-sm mb-3">ERROR 404</p>
        <h1 className="font-display text-3xl text-ink mb-3">Route not found</h1>
        <p className="font-mono text-xs text-ink-muted bg-surface rounded-lg p-4 text-left mb-6 leading-relaxed">
          <span className="text-danger">$</span> curl yourdomain.com{`{path}`}
          <br />
          <span className="text-danger">404</span> no handler matched this
          request
          <br />
          <span className="text-ink-faint">→ check the URL, or head back home</span>
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-signal text-base font-semibold px-5 py-2.5 text-sm hover:bg-signal-glow transition-colors"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="wrap flex min-h-[60vh] flex-col justify-center py-24">
      <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">Error 404</p>
      <h1 className="mt-4 font-heading text-4xl leading-[1.0] font-bold text-ink md:text-shore">
        Nothing at this address.
      </h1>
      <p className="measure mt-5 text-lg text-ink-muted">
        That page does not exist in either town. It may have been renamed or moved.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="bg-accent px-7 py-3.5 font-bold text-page hover:bg-warm">
          Home
        </Link>
        <Link
          href="/projects"
          className="border border-rule-strong px-7 py-3.5 font-bold text-ink hover:border-ink"
        >
          Project records
        </Link>
      </div>
    </div>
  );
}

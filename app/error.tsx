'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="wrap flex min-h-[60vh] flex-col justify-center py-24">
      <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">Error</p>
      <h1 className="mt-4 font-heading text-4xl leading-[1.0] font-bold text-ink md:text-shore">
        Something went wrong.
      </h1>
      <p className="measure mt-5 text-lg text-ink-muted">
        This page failed to render. Trying again usually clears it.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 self-start bg-accent px-7 py-3.5 font-bold text-page hover:bg-warm"
      >
        Try again
      </button>
    </div>
  );
}

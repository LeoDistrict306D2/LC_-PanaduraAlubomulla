'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Membership enquiry form.
 *
 * The town field is required rather than optional: the club allocates new
 * members to a town lead, so it is the one thing the secretary actually needs
 * before replying.
 *
 * No backend, so rather than render a form that silently discards what people
 * type, this composes a pre-filled email and hands it to the visitor's mail
 * client. It works, needs no server or third-party form service, and no
 * personal data passes through anyone else's hands.
 */
export function JoinForm({ email }: { email: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '');
    const town = String(data.get('town') ?? '');

    const body = [
      `Name: ${name}`,
      `Age: ${String(data.get('age') ?? '')}`,
      `Town: ${town}`,
      '',
      String(data.get('message') ?? ''),
    ].join('\n');

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      `Membership enquiry — ${name} (${town})`,
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  }

  const field =
    'mt-2 w-full border border-rule-strong bg-page px-3 py-3 text-ink focus:border-warm focus:outline-none';
  const label = 'block text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint';

  return (
    <form onSubmit={handleSubmit} className="measure">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="join-name" className={label}>
            Your name
          </label>
          <input id="join-name" name="name" type="text" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="join-age" className={label}>
            Age
          </label>
          <input id="join-age" name="age" type="number" min={12} max={30} required className={field} />
        </div>
        <div>
          <label htmlFor="join-town" className={label}>
            Which town
          </label>
          <select id="join-town" name="town" required defaultValue="" className={field}>
            <option value="" disabled>
              Choose one
            </option>
            <option value="Panadura">Panadura</option>
            <option value="Alubomulla">Alubomulla</option>
            <option value="Between the two">Somewhere between</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="join-message" className={label}>
            Anything you want to tell us
          </label>
          <textarea id="join-message" name="message" rows={5} className={field} />
        </div>
      </div>

      <button
        type="submit"
        className="group mt-7 inline-flex items-center gap-2 bg-accent px-7 py-3.5 font-bold text-page transition-colors hover:bg-warm"
      >
        Send enquiry
        <ArrowRight aria-hidden size={16} className="transition-transform group-hover:translate-x-1" />
      </button>

      <p aria-live="polite" className="mt-4 min-h-[1.5rem] text-sm text-ink-muted">
        {sent
          ? 'Your email app should have opened with the message ready. If it did not, write to us directly at the address below.'
          : ''}
      </p>
    </form>
  );
}

import type { Metadata } from 'next';
import { club } from '@/content/club';
import { PageMasthead } from '@/components/PageMasthead';
import { JoinForm } from '@/components/JoinForm';

export const metadata: Metadata = {
  title: 'Join',
  description: `Membership of ${club.name} is open in Panadura, Alubomulla and everywhere between.`,
  alternates: { canonical: '/join' },
};

const reasons = [
  {
    title: 'You get a town lead',
    body: 'New members are put with the lead for their town, not into a general list. You will know who to call in your first week.',
  },
  {
    title: 'You will not always travel',
    body: 'Meetings alternate between the two towns. Whoever travelled last time does not travel this time — that rule is why the club still has members at both ends.',
  },
  {
    title: 'Two places to try things',
    body: 'A project that works on the coast gets tried inland, and the other way round. You will see the same idea rebuilt for a different place.',
  },
  {
    title: 'You will lead one',
    body: 'Every member leads a project eventually — paired with a lead from the other town, which is the fastest way to learn how this club works.',
  },
];

export default function JoinPage() {
  return (
    <>
      <PageMasthead
        kicker="Membership"
        title="Whichever end you are at."
        standfirst="Open to anyone aged 12 to 30 in Panadura, Alubomulla, or anywhere between. No experience needed."
      />

      <div className="wrap band grid gap-14 md:grid-cols-12">
        <section className="md:col-span-5" aria-labelledby="why">
          <h2 id="why" className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
            What you are joining
          </h2>
          <ol className="mt-6 border-t-2 border-ink">
            {reasons.map((reason, index) => (
              <li key={reason.title} className="border-b border-rule py-5">
                <div className="flex gap-5">
                  <span
                    aria-hidden
                    className="font-heading text-sm font-bold text-warm tabular-nums"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-ink">{reason.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{reason.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="md:col-span-6 md:col-start-7 drop-sm" aria-labelledby="enquiry">
          <h2 id="enquiry" className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
            Enquiry
          </h2>
          <p className="measure mt-4 mb-8 text-ink-muted">
            Tell us which town you are in — it decides which lead picks this up. The form opens a
            pre-written email to the club secretary.
          </p>
          <JoinForm email={club.contact.email ?? ''} />
          {club.contact.email ? (
            <p className="mt-6 text-sm text-ink-faint">
              Or write directly to{' '}
              <a
                href={`mailto:${club.contact.email}`}
                className="font-semibold text-ink-muted underline underline-offset-2 hover:text-warm"
              >
                {club.contact.email}
              </a>
              .
            </p>
          ) : null}
        </section>
      </div>
    </>
  );
}

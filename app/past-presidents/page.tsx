import type { Metadata } from 'next';
import { club } from '@/content/club';
import { pastPresidents } from '@/content/past-presidents';
import { PageMasthead } from '@/components/PageMasthead';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Past Presidents',
  description: `Every president of ${club.name} since charter.`,
  alternates: { canonical: '/past-presidents' },
};

export default function PastPresidentsPage() {
  const years = [...pastPresidents].sort((a, b) => b.year.localeCompare(a.year));

  return (
    <>
      <PageMasthead
        kicker={`${years.length} terms`}
        title="Twelve years, both ends."
        standfirst="Each president sets a theme. Read in order they track the club's slow argument with itself about how to be in two places at once."
      />

      <div className="wrap band">
        <ol className="border-t-2 border-ink">
          {years.map((president, index) => (
            <li key={president.year} className="border-b border-rule">
              <Reveal delay={Math.min(index, 5) * 45}>
                <div className="grid gap-3 py-6 md:grid-cols-12 md:gap-8">
                  <p className="font-heading text-lg font-bold text-warm tabular-nums md:col-span-2">
                    {president.year}
                  </p>
                  <div className="md:col-span-4">
                    <p className="font-heading text-xl font-bold text-ink">{president.name}</p>
                    {president.theme ? (
                      <p className="mt-1 text-sm text-ink-muted">{president.theme}</p>
                    ) : null}
                  </div>
                  <div className="md:col-span-5 md:col-start-8">
                    {president.highlights && president.highlights.length > 0 ? (
                      <ul className="space-y-1">
                        {president.highlights.map((highlight) => (
                          <li key={highlight} className="text-sm leading-relaxed text-ink-muted">
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-ink-faint">—</p>
                    )}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

import type { Metadata } from 'next';
import { club } from '@/content/club';
import { PageMasthead } from '@/components/PageMasthead';
import { Photo } from '@/components/Photo';
import { SplitFigures } from '@/components/SplitFigures';

export const metadata: Metadata = {
  title: 'About',
  description: club.about.mission,
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <PageMasthead
        kicker="About the club"
        title="It nearly split in year three."
        standfirst={club.about.mission}
      />

      <div className="wrap band grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          {club.about.story.map((paragraph, index) => (
            <p key={index} className="measure mb-6 text-lg leading-relaxed text-ink-muted last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="md:col-span-4 md:col-start-9 drop-sm">
          <Photo image={club.heroImage} ratio="landscape" sizes="(min-width: 768px) 33vw, 100vw" />
          <dl className="mt-10 border-t-2 border-ink">
            {[
              { term: 'Chartered', value: club.charterDate?.slice(0, 4) ?? '—' },
              { term: 'Towns', value: 'Panadura · Alubomulla' },
              { term: 'District', value: club.district },
              { term: 'Sponsor', value: club.sponsoringLionsClub ?? '—' },
            ].map((row) => (
              <div key={row.term} className="flex justify-between gap-4 border-b border-rule py-3">
                <dt className="text-xs tracking-[0.12em] text-ink-faint uppercase">{row.term}</dt>
                <dd className="text-right text-sm font-semibold">{row.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      <section className="border-y border-rule bg-panel band">
        <div className="wrap grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">Mission</h2>
            <p className="mt-4 font-heading text-2xl leading-snug font-bold text-ink">
              {club.about.mission}
            </p>
          </div>
          <div className="md:col-span-5 md:col-start-8 drop-sm">
            <h2 className="text-xs font-semibold tracking-[0.16em] text-warm uppercase">Vision</h2>
            <p className="mt-4 font-heading text-2xl leading-snug font-bold text-ink">
              {club.about.vision}
            </p>
          </div>
        </div>
      </section>

      <SplitFigures stats={club.stats} label="Club record since charter" />
    </>
  );
}

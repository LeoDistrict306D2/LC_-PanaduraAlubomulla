import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { club } from '@/content/club';
import { projects } from '@/content/projects';
import { board } from '@/content/board';
import { byDateDesc, getInitials, sortExecutives } from '@/lib/utils';
import { Photo } from '@/components/Photo';
import { Reveal } from '@/components/Reveal';
import { SplitFigures } from '@/components/SplitFigures';
import { SplitRecord } from '@/components/SplitRecord';

/**
 * Home.
 *
 * The split runs from the first screen: the headline sits left, the photograph
 * drops below it on the right, and nothing on the page lines up horizontally
 * with anything else. The layout states the club's premise before the copy
 * gets to it.
 */
export default function HomePage() {
  const featured = byDateDesc(projects.filter((project) => project.featured)).slice(0, 3);
  const leadership = sortExecutives(board).slice(0, 4);
  const charterYear = club.charterDate ? new Date(club.charterDate).getFullYear() : null;

  return (
    <>
      {/* Opening -------------------------------------------------------- */}
      <section className="wrap grid gap-10 pt-12 pb-16 md:grid-cols-12 md:pt-16 md:pb-20">
        <div className="md:col-span-6">
          <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
            {club.district}
            {charterYear ? ` · Chartered ${charterYear}` : ''}
          </p>

          <h1 className="mt-6 font-heading text-5xl leading-[0.98] font-bold text-ink md:text-shore">
            {club.tagline}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            {club.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 bg-accent px-7 py-3.5 font-bold text-page transition-colors hover:bg-warm"
            >
              See the records
              <ArrowRight
                aria-hidden
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/join"
              className="inline-flex items-center border border-rule-strong px-7 py-3.5 font-bold text-ink transition-colors hover:border-ink"
            >
              Join us
            </Link>
          </div>
        </div>

        {/* Dropped, never level with the headline. */}
        <div className="drop md:col-span-6">
          <Photo
            image={club.heroImage}
            ratio="landscape"
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </section>

      <SplitFigures stats={club.stats} label="Club record since charter" />

      {/* Method --------------------------------------------------------- */}
      <section className="wrap band" aria-labelledby="how">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 id="how" className="font-heading text-3xl leading-tight font-bold text-ink md:text-5xl">
              How you run
              <br />a club in two places
            </h2>
            <p className="measure mt-5 text-ink-muted">
              Four rules, arrived at the hard way after the club nearly split in its third year.
            </p>
          </div>

          <ol className="grid gap-px bg-rule-strong sm:grid-cols-2 md:col-span-6 md:col-start-7 drop-sm">
            {club.about.values.map((value, index) => (
              <li key={value.title} className="bg-page p-6">
                <Reveal delay={index * 70}>
                  <span
                    aria-hidden
                    className="font-heading text-sm font-bold text-warm tabular-nums"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-2 font-heading text-xl font-bold text-ink">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {value.description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Records -------------------------------------------------------- */}
      <section className="border-y border-rule bg-panel band" aria-labelledby="records">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2
              id="records"
              className="font-heading text-3xl leading-tight font-bold text-ink md:text-5xl"
            >
              What we have run
            </h2>
            <Link href="/projects" className="text-sm font-bold text-warm hover:text-accent">
              All {projects.length} records →
            </Link>
          </div>

          <div className="mt-14 flex flex-col gap-16 md:gap-24">
            {featured.map((project, index) => (
              <SplitRecord key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Board ---------------------------------------------------------- */}
      <section className="wrap band" aria-labelledby="board-heading">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2
              id="board-heading"
              className="font-heading text-3xl leading-tight font-bold text-ink md:text-4xl"
            >
              Who runs it
            </h2>
            <p className="measure mt-4 text-ink-muted">
              The board for {leadership[0]?.term ?? 'this year'}. Note the paired vice presidents
              and directors — one for each town, which is the rule that keeps the club whole.
            </p>
            <Link href="/board" className="mt-6 inline-block text-sm font-bold text-warm hover:text-accent">
              The full board →
            </Link>
          </div>

          <ul className="grid grid-cols-2 gap-6 md:col-span-7 md:col-start-6 lg:grid-cols-4 drop-sm">
            {leadership.map((member, index) => (
              <li key={member.id} className={index % 2 === 1 ? 'drop-sm' : undefined}>
                <Reveal delay={index * 60}>
                  {member.photo ? (
                    <Photo
                      image={member.photo}
                      ratio="portrait"
                      sizes="(min-width: 1024px) 18vw, 45vw"
                    />
                  ) : (
                    <div
                      aria-hidden
                      className="flex aspect-[3/4] items-center justify-center bg-accent font-heading text-3xl font-bold text-page"
                    >
                      {getInitials(member.name)}
                    </div>
                  )}
                  <p className="mt-3 font-heading text-sm leading-tight font-bold">{member.name}</p>
                  <p className="mt-1 text-xs text-ink-faint">{member.position}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Close ---------------------------------------------------------- */}
      <section className="bg-accent text-page">
        <div className="wrap band grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="font-heading text-3xl leading-[1.05] font-bold md:text-5xl">
              Whichever town you are in.
            </h2>
            <p className="mt-5 max-w-xl text-page/80">
              Membership is open to anyone aged 12 to 30 in Panadura, Alubomulla, or anywhere in
              between. Tell us which end you are at and we will put you with that town&rsquo;s lead.
            </p>
          </div>
          <div className="flex items-end md:col-span-4 md:col-start-9">
            <Link
              href="/join"
              className="group inline-flex items-center gap-2 bg-warm px-7 py-3.5 font-bold text-ink transition-colors hover:bg-page"
            >
              Join the club
              <ArrowRight
                aria-hidden
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

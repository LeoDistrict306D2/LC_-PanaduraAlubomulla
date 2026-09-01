import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Project } from '@/lib/types';
import { cn, formatDate } from '@/lib/utils';
import { Photo } from './Photo';
import { Reveal } from './Reveal';
import { TownTag } from './TownTag';

/**
 * A project as a split record — the site's signature.
 *
 * The two columns are deliberately never level: the text column is dropped
 * below the photograph (or the reverse, alternating down the page). One club,
 * two towns, twelve kilometres apart, and the layout says so before the copy
 * does.
 *
 * The offset only applies from `md` up. On a phone the columns stack, and a
 * hanging margin there would read as a bug rather than a decision.
 */
export function SplitRecord({ project, index = 0 }: { project: Project; index?: number }) {
  const flipped = index % 2 === 1;

  return (
    <Reveal delay={Math.min(index, 3) * 80}>
      <article className="grid gap-6 md:grid-cols-12 md:gap-10">
        <div className={cn('md:col-span-7', flipped && 'md:order-2 md:col-start-6 drop')}>
          <Link href={`/projects/${project.slug}`} tabIndex={-1} aria-hidden>
            <Photo
              image={project.heroImage}
              ratio="landscape"
              sizes="(min-width: 768px) 55vw, 100vw"
            />
          </Link>
        </div>

        <div className={cn('md:col-span-5', flipped ? 'md:order-1 md:col-start-1' : 'drop')}>
          <TownTag location={project.location} />

          <p className="mt-4 text-xs font-semibold tracking-[0.14em] text-ink-faint uppercase">
            {formatDate(project.date, { year: 'numeric', month: 'long' })} · {project.year}
          </p>

          <h3 className="mt-3 font-heading text-3xl leading-[1.02] font-bold text-ink md:text-4xl">
            <Link href={`/projects/${project.slug}`} className="hover:text-warm">
              {project.title}
            </Link>
          </h3>

          <p className="mt-4 leading-relaxed text-ink-muted">{project.summary}</p>

          {project.impact && project.impact.length > 0 ? (
            <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-rule pt-5">
              {project.impact.slice(0, 4).map((stat) => (
                <div key={stat.id}>
                  <dd className="font-heading text-2xl font-bold text-ink tabular-nums">
                    {stat.prefix}
                    {typeof stat.value === 'number'
                      ? stat.value.toLocaleString('en-LK')
                      : stat.value}
                    {stat.suffix}
                  </dd>
                  <dt className="mt-0.5 text-xs tracking-[0.1em] text-ink-faint uppercase">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          ) : null}

          <Link
            href={`/projects/${project.slug}`}
            className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-warm hover:text-accent"
          >
            Read the record
            <ArrowRight
              aria-hidden
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}

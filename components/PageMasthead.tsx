import Link from 'next/link';

/**
 * Page heading, split like everything else: kicker and title on the left, the
 * standfirst dropped below in a narrower right-hand column.
 */
export function PageMasthead({
  kicker,
  title,
  standfirst,
  breadcrumb,
}: {
  kicker: string;
  title: string;
  standfirst?: string;
  breadcrumb?: { href: '/projects'; label: string };
}) {
  return (
    <div className="border-b border-rule">
      <div className="wrap grid gap-6 pt-12 pb-10 md:grid-cols-12 md:gap-10 md:pt-18 md:pb-14">
        <div className="md:col-span-7">
          {breadcrumb ? (
            <nav aria-label="Breadcrumb" className="mb-5">
              <Link href={breadcrumb.href} className="text-sm font-bold text-warm hover:text-accent">
                ← {breadcrumb.label}
              </Link>
            </nav>
          ) : null}

          <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">{kicker}</p>

          <h1 className="mt-4 font-heading text-4xl leading-[1.0] font-bold text-ink md:text-shore">
            {title}
          </h1>
        </div>

        {standfirst ? (
          <p className="text-lg leading-relaxed text-ink-muted md:col-span-4 md:col-start-9 drop-sm">
            {standfirst}
          </p>
        ) : null}
      </div>
    </div>
  );
}

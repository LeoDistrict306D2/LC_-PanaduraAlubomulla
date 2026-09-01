import type { Metadata } from 'next';
import Link from 'next/link';
import { club } from '@/content/club';
import { gallery } from '@/content/gallery';
import { PageMasthead } from '@/components/PageMasthead';
import { Photo } from '@/components/Photo';

export const metadata: Metadata = {
  title: 'Gallery',
  description: `Photographs from the work of ${club.name}.`,
  alternates: { canonical: '/gallery' },
};

export default function GalleryPage() {
  return (
    <>
      <PageMasthead
        kicker="Photographs"
        title="Coast and inland."
        standfirst="Pictures from both towns, filed against the record they belong to. All duotoned, which is what makes two towns look like one club."
      />

      <div className="wrap band">
        {gallery.length === 0 ? (
          <div className="measure">
            <p className="text-ink-muted">
              The gallery is empty while the club&rsquo;s photography is being collected.
              Photographs from each project are already on its own page.
            </p>
            <Link
              href="/projects"
              className="mt-6 inline-block text-sm font-bold text-warm hover:text-accent"
            >
              Go to the records →
            </Link>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, index) => (
              <div key={item.id} className={index % 3 === 1 ? 'drop-sm' : undefined}>
                <Photo
                  image={item}
                  ratio="landscape"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

import type { Metadata } from 'next';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { club } from '@/content/club';
import { PageMasthead } from '@/components/PageMasthead';

export const metadata: Metadata = {
  title: 'Contact',
  description: `How to reach ${club.name}.`,
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageMasthead
        kicker="Contact"
        title="Get in touch."
        standfirst="Partnerships, sponsorship, or a project idea in either town. Email reaches both leads."
      />

      <div className="wrap band grid gap-12 md:grid-cols-12">
        <section className="md:col-span-7" aria-labelledby="details">
          <h2
            id="details"
            className="text-xs font-semibold tracking-[0.16em] text-accent uppercase"
          >
            Details
          </h2>
          <dl className="mt-6 border-t-2 border-ink">
            {club.contact.email ? (
              <div className="flex items-start gap-4 border-b border-rule py-5">
                <Mail aria-hidden size={18} className="mt-1.5 shrink-0 text-warm" />
                <div>
                  <dt className="text-xs tracking-[0.12em] text-ink-faint uppercase">Email</dt>
                  <dd className="mt-1.5">
                    <a
                      href={`mailto:${club.contact.email}`}
                      className="font-heading text-xl font-bold break-all underline underline-offset-4 hover:text-warm"
                    >
                      {club.contact.email}
                    </a>
                  </dd>
                </div>
              </div>
            ) : null}

            {club.contact.phone ? (
              <div className="flex items-start gap-4 border-b border-rule py-5">
                <Phone aria-hidden size={18} className="mt-1.5 shrink-0 text-warm" />
                <div>
                  <dt className="text-xs tracking-[0.12em] text-ink-faint uppercase">Phone</dt>
                  <dd className="mt-1.5">
                    <a
                      href={`tel:${club.contact.phone}`}
                      className="font-heading text-xl font-bold hover:text-warm"
                    >
                      {club.contact.phone}
                    </a>
                  </dd>
                </div>
              </div>
            ) : null}

            <div className="flex items-start gap-4 border-b border-rule py-5">
              <MapPin aria-hidden size={18} className="mt-1.5 shrink-0 text-warm" />
              <div>
                <dt className="text-xs tracking-[0.12em] text-ink-faint uppercase">
                  Where we work
                </dt>
                <dd className="mt-1.5 font-heading text-xl leading-snug font-bold">
                  Panadura <span className="text-ink-faint">and</span> Alubomulla
                  <span className="mt-1 block text-sm font-normal text-ink-muted">
                    Kalutara District, Sri Lanka
                  </span>
                </dd>
              </div>
            </div>
          </dl>
        </section>

        <section className="md:col-span-4 md:col-start-9 drop-sm" aria-labelledby="social">
          <h2 id="social" className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
            Elsewhere
          </h2>
          <ul className="mt-6 border-t border-rule-strong">
            {club.socials.facebook ? (
              <li className="border-b border-rule">
                <a
                  href={club.socials.facebook}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 py-4 font-semibold text-ink-muted transition-colors hover:text-warm"
                >
                  <Facebook aria-hidden size={17} />
                  Facebook
                </a>
              </li>
            ) : null}
            {club.socials.instagram ? (
              <li className="border-b border-rule">
                <a
                  href={club.socials.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 py-4 font-semibold text-ink-muted transition-colors hover:text-warm"
                >
                  <Instagram aria-hidden size={17} />
                  Instagram
                </a>
              </li>
            ) : null}
          </ul>

          <p className="mt-8 text-sm leading-relaxed text-ink-faint">
            Looking to join rather than get in touch? The membership page asks which town you are
            in and routes you to that lead.
          </p>
        </section>
      </div>
    </>
  );
}

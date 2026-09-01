# Leo Club of Panadura-Alubomulla — website

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4

**Design concept: *Twin Shore*.** One club, two towns — a coastal town and the
inland villages twelve kilometres behind it. The whole system is built on that
split: content sits in **two columns that never line up**, one always dropped
below the other, so the page reads as a pair rather than a grid.

Photography is **duotoned** in the club's two colours — indigo in the shadows,
orange in the highlights. That is what makes photographs taken in two places, on
two days, by two different people look like one club.

One of eleven independently designed club sites in Leo District 306 D2. It
shares no design code with the others; only `lib/` is common.

---

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run typecheck
npm run lint
```

Node 20.9+ required.

---

## Where things live

| Path | What it is |
|---|---|
| `app/` | Routes, layout, metadata, sitemap, robots |
| `app/globals.css` | **The entire design system** — palette, split, duotone, motion |
| `components/` | Components bespoke to this club |
| `content/` | All club content. Normal edits touch only this |
| `lib/` | Domain types, utilities, hooks. Identical across all eleven clubs |

---

## The design system

Tokens live in the `@theme` block at the top of `app/globals.css`, named by
**role** rather than hue.

| Token | Value | Used for |
|---|---|---|
| `--color-page` | `#f5f2ee` | Bone ground |
| `--color-panel` | `#eae5df` | Alternate bands |
| `--color-ink` | `#16172b` | Text |
| `--color-accent` | `#2b3a8c` | Indigo — primary, and the duotone **shadow** |
| `--color-warm` | `#e9683a` | Orange — interaction, and the duotone **highlight** |
| `--color-inverse` | `#16172b` | Figures band and footer |

Type: Archivo (headings) + Karla (body), self-hosted via `next/font`.

### Signature classes

- `.drop` / `.drop-sm` — the vertical offset applied to the second column of a
  pair so the two never align. **Only active from `md` up** — on a phone the
  columns stack, and a hanging margin there would read as a bug rather than a
  decision. These are plain classes, not Tailwind utilities, so write
  `drop-sm` directly; `md:drop-sm` will not resolve.
- `.duotone` — the two-layer blend: `lighten` with indigo raises the shadows,
  `darken` with orange pulls the highlights. `isolation: isolate` keeps the
  blending inside the element. If a browser ignores `mix-blend-mode`, the
  photograph still renders in greyscale — a graceful floor, not a broken image.

### Duotone is the default

`components/Photo.tsx` applies duotone unless you pass `natural`. That is
deliberate — the unifying treatment is the point. Reach for `natural` only where
true colour genuinely matters.

### Town tagging

`components/TownTag.tsx` reads a project's `location` and labels it Panadura,
Alubomulla, or **Both towns**. It is colour-coded but **never colour-alone** —
the town name is always spelled out, so the distinction survives greyscale
printing and colour-blind readers.

**`location` is load-bearing.** Keep it to `"Panadura"`, `"Alubomulla"`, or
`"Panadura and Alubomulla"`, or the tag will not resolve.

---

## Editing content

### Add a project

Append to `content/projects.ts`:

```ts
{
  id: 'harbour-lights',
  slug: 'harbour-lights',
  title: 'Harbour Lights',
  summary: 'One sentence for listings.',
  story: ['Paragraph one.', 'Paragraph two.'],
  category: 'community-service',
  year: '2025/26',
  date: '2026-03-07',
  location: 'Panadura',            // drives the town tag — see above
  featured: true,
  heroImage: { src: '/images/projects/harbour-lights.jpg',
               alt: 'Describe what is happening', width: 1600, height: 1200 },
  impact: [{ id: 'lamps', value: 18, label: 'Lamps installed' }],
}
```

### Add a board member

Append to `content/board.ts`. Ordering is automatic from `rank`. Note the board
carries **paired** vice presidents and project directors — one per town. That
pairing is the club's structural rule; keep it when the roster changes.

### Add images

Use real `width`/`height` — those two fields stop the page jumping as images
load. `.jpg`/`.webp` only; **HEIC does not render in browsers.** Duotone works
best on images with a clear tonal range; very flat or very dark photographs come
out muddy.

---

## Standards this site holds to

- One `<h1>` per page; per-route `<title>`, description, canonical and OG tags.
- Every image through `next/image` inside an aspect-ratio box, with `alt`.
- Keyboard-operable menu: `aria-expanded`/`aria-controls`, Escape closes and
  returns focus, visible focus ring, skip-to-content link.
- `prefers-reduced-motion` respected; all content readable with JavaScript off.
- `typedRoutes` on — a link to a route that does not exist **fails the build**.
- `images.remotePatterns` deliberately empty.
- The membership form asks which town you are in and routes accordingly.

---

## Deploying

Every route prerenders. Set `siteUrl` in `content/club.ts`, then
`npm run build && npm start`.

## Outstanding content

Everything marked `TODO(content)` needs real values. Images in `public/images/`
are generated solid-colour placeholders. The site renders correctly while these
are incomplete.

One copy note: the Two Clinics project states hypertension screening rates came
back higher inland and that figures were passed to the MOH office. That is a
specific factual claim — verify before launch or soften the wording.

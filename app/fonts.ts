import { Archivo, Karla } from 'next/font/google';

/**
 * Archivo for headings, Karla for text.
 *
 * Archivo is a grotesque with a wide, flat-sided construction that holds up at
 * the 4rem display sizes this site uses without looking like a default system
 * font. Karla's slightly quirky lowercase keeps the body copy from feeling
 * corporate against it.
 *
 * Loaded via next/font, which self-hosts the files and removes the
 * render-blocking request to fonts.googleapis.com.
 */
const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
});

const karla = Karla({
  subsets: ['latin'],
  variable: '--font-karla',
  display: 'swap',
});

export const fontVariables = `${archivo.variable} ${karla.variable}`;

import type { Executive } from '@/lib/types';

/**
 * Executive board.
 *
 * The club's rule is a lead in each town for every project, which is why the
 * board carries paired directors rather than single ones.
 *
 * TODO(content): real names, positions and photographs.
 */
export const board: Executive[] = [
  { id: 'pres', name: 'Leo Kalpani Wijesundara', position: 'President', rank: 'president', term: '2025/26' },
  { id: 'ipp', name: 'Leo Rukshan Amarasiri', position: 'Immediate Past President', rank: 'immediate-past-president', term: '2025/26' },
  { id: 'vp-pan', name: 'Leo Dinithi Salgado', position: 'Vice President — Panadura', rank: 'vice-president', term: '2025/26' },
  { id: 'vp-alu', name: 'Leo Sahan Kodikara', position: 'Vice President — Alubomulla', rank: 'vice-president', term: '2025/26' },
  { id: 'sec', name: 'Leo Menuki Rajapakse', position: 'Secretary', rank: 'secretary', term: '2025/26' },
  { id: 'asec', name: 'Leo Tharindu Hewage', position: 'Assistant Secretary', rank: 'assistant-secretary', term: '2025/26' },
  { id: 'tres', name: 'Leo Ashani Warnakula', position: 'Treasurer', rank: 'treasurer', term: '2025/26' },
  { id: 'edit', name: 'Leo Chamith Dissanayake', position: 'Club Editor', rank: 'editor', term: '2025/26' },
  { id: 'dir-pan', name: 'Leo Nethmi Gooneratne', position: 'Director — Panadura Projects', rank: 'director', term: '2025/26' },
  { id: 'dir-alu', name: 'Leo Buddhika Ranaweera', position: 'Director — Alubomulla Projects', rank: 'director', term: '2025/26' },
  { id: 'dir-mem', name: 'Leo Yenuli Perera', position: 'Director — Membership', rank: 'director', term: '2025/26' },
  { id: 'dir-rep', name: 'Leo Kavisha Ariyaratne', position: 'Director — Reporting', rank: 'director', term: '2025/26' },
];

import type { Achievement } from '@/lib/types';

/** TODO(content): confirm against the club's award records. */
export const achievements: Achievement[] = [
  {
    id: 'env-2025',
    title: 'Environmental Project of the Year',
    competition: 'Leo District 306 D2 Convention',
    year: '2025',
    level: 'winner',
    description: 'For Tide and Field, and for rebuilding the inland scheme rather than transplanting it.',
  },
  {
    id: 'education-2025',
    title: 'Community Impact Award',
    competition: 'Leo District 306 D2 Convention',
    year: '2025',
    level: 'runner-up',
    description: 'For the Night Bus.',
  },
  {
    id: 'club-2021',
    title: 'Most Improved Club',
    competition: 'Leo District 306 D2 Convention',
    year: '2021',
    level: 'winner',
    description: 'Following the move to paired project leads in both towns.',
  },
];

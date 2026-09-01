import type { Project } from '@/lib/types';

/**
 * Projects.
 *
 * `location` is load-bearing on this site: the split-record layout reads it to
 * label which town (or both) a project belongs to. Keep it to "Panadura",
 * "Alubomulla", or "Panadura and Alubomulla".
 *
 * TODO(content): illustrative records in the club's format — replace with real
 * project data. `heroImage` points at the shared placeholder until real
 * photography exists.
 */
const placeholder = (alt: string) => ({
  src: '/images/projects/placeholder.png',
  alt,
  width: 1600,
  height: 1200,
});

export const projects: Project[] = [
  {
    id: 'tide-and-field',
    slug: 'tide-and-field',
    title: 'Tide and Field',
    summary:
      'The same waste-sorting scheme run twice — once on the Panadura seafront, once across the Alubomulla paddy bunds.',
    category: 'environment',
    year: '2025/26',
    date: '2025-08-24',
    location: 'Panadura and Alubomulla',
    featured: true,
    heroImage: placeholder('Volunteers sorting collected waste at the Panadura seafront'),
    story: [
      'We built the scheme for the seafront: sorting stations, a weekly collection, a deal with a recycler in Wadduwa. It worked well enough that we tried to lift it wholesale to Alubomulla.',
      'It failed there immediately. Inland the waste is mostly agricultural, the volumes are seasonal rather than weekly, and the recycler would not drive out for the quantities involved.',
      'The version that eventually worked inland is almost unrecognisable — composting rather than recycling, monthly rather than weekly, and run through the farmers’ society rather than the club. Same idea, rebuilt from the ground.',
      'That is the argument for being a two-town club: you find out fast which parts of a good idea were actually just local.',
    ],
    objectives: [
      'Run sorting stations on the Panadura seafront year-round',
      'Adapt rather than transplant the scheme inland',
      'Hand the inland version to the farmers’ society to run',
    ],
    impact: [
      { id: 'coast', value: 14200, suffix: ' kg', label: 'Sorted on the coast' },
      { id: 'inland', value: 31, label: 'Inland composting units' },
      { id: 'households', value: 480, label: 'Households taking part' },
    ],
  },
  {
    id: 'night-bus',
    slug: 'night-bus',
    title: 'The Night Bus',
    summary:
      'A subsidised late bus between the two towns after evening classes, so inland students can attend tuition in Panadura.',
    category: 'education',
    year: '2025/26',
    date: '2025-04-11',
    location: 'Panadura and Alubomulla',
    featured: true,
    heroImage: placeholder('Students boarding the late bus between the two towns'),
    story: [
      'The tuition classes are in Panadura. The last public bus inland leaves at 7:15, and the classes finish at 8:00. For years that arithmetic simply meant inland students did not go.',
      'The club subsidises a single hired bus, four nights a week, term-time only. It carries around forty students a night. It is the least glamorous thing we run and probably the most useful.',
    ],
    objectives: [
      'Run a 8:30 pm service four nights a week in term time',
      'Keep the student fare under Rs 40 a trip',
      'Reach a funding model that outlives the current committee',
    ],
    impact: [
      { id: 'students', value: 41, label: 'Students per night' },
      { id: 'trips', value: 5100, suffix: '+', label: 'Student trips this year' },
      { id: 'fare', value: 35, prefix: 'Rs ', label: 'Fare per trip' },
    ],
  },
  {
    id: 'two-clinics',
    slug: 'two-clinics',
    title: 'Two Clinics',
    summary:
      'A paired health screening — the same clinic held on consecutive weekends in each town, with results compared.',
    category: 'health',
    year: '2024/25',
    date: '2025-02-08',
    location: 'Panadura and Alubomulla',
    featured: true,
    heroImage: placeholder('A community health screening clinic in progress'),
    story: [
      'Running the identical clinic in both towns a week apart gave us something a single clinic never could: a comparison.',
      'Screening rates for hypertension came back materially higher inland. We are not epidemiologists and we have not drawn conclusions, but we passed the figures to the MOH office, which is what you do with a signal you are not qualified to interpret.',
    ],
    impact: [
      { id: 'panadura', value: 310, label: 'Screened in Panadura' },
      { id: 'alubomulla', value: 268, label: 'Screened in Alubomulla' },
      { id: 'referred', value: 94, label: 'Referred onward' },
    ],
    partners: [{ name: 'MOH Office, Panadura' }],
  },
  {
    id: 'seafront-lights',
    slug: 'seafront-lights',
    title: 'Seafront Lighting',
    summary: 'Solar lighting along the unlit stretch of the Panadura beach road.',
    category: 'community-service',
    year: '2023/24',
    date: '2024-06-15',
    location: 'Panadura',
    heroImage: placeholder('Solar lamps installed along the beach road'),
    impact: [
      { id: 'lamps', value: 28, label: 'Lamps installed' },
      { id: 'metres', value: 900, suffix: ' m', label: 'Road lit' },
    ],
  },
  {
    id: 'paddy-water',
    slug: 'paddy-water',
    title: 'Paddy Channel Clearing',
    summary: 'Clearing the irrigation channels above Alubomulla before the Maha season.',
    category: 'environment',
    year: '2023/24',
    date: '2023-09-30',
    location: 'Alubomulla',
    heroImage: placeholder('Volunteers clearing an irrigation channel'),
    impact: [
      { id: 'metres', value: 2400, suffix: ' m', label: 'Channel cleared' },
      { id: 'farmers', value: 74, label: 'Farmers affected' },
    ],
  },
  {
    id: 'charter',
    slug: 'charter',
    title: 'Charter Night',
    summary: 'The club charter, held deliberately at the midpoint between the two towns.',
    category: 'leadership',
    year: '2013/14',
    date: '2013-09-19',
    location: 'Panadura and Alubomulla',
    heroImage: placeholder('The club charter night'),
    impact: [{ id: 'founding', value: 27, label: 'Founding members' }],
  },
];

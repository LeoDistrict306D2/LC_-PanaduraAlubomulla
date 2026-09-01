import type { Club } from '@/lib/types';

/**
 * Leo Club of Panadura-Alubomulla — club record.
 *
 * A two-town club, and the copy leans into that rather than smoothing it over.
 *
 * TODO(content): charter date, roster, contact details and photography are
 * placeholders pending real values from the club.
 */
export const club: Club = {
  name: 'Leo Club of Panadura-Alubomulla',
  shortName: 'Panadura-Alubomulla',
  tagline: 'Two towns, one roster.',
  motto: 'Leadership · Experience · Opportunity',
  description:
    'A Leo club spanning Panadura and Alubomulla — a coastal town and the inland villages behind it. Twelve kilometres apart, two different sets of problems, and one membership that has learned to work in both.',
  charterDate: '2013-09-19',

  district: 'Leo District 306 D2',
  multipleDistrict: 'Leo Multiple District 306',
  sponsoringLionsClub: 'Lions Club of Panadura',
  districtUrl: 'https://leodistrict306d2.org/',
  multipleDistrictUrl: 'https://www.leomd306.org/',

  logo: {
    src: '/images/logo/logo.png',
    alt: 'Leo Club of Panadura-Alubomulla emblem',
    width: 512,
    height: 512,
  },
  heroImage: {
    src: '/images/hero/hero.png',
    alt: 'Members of the Leo Club of Panadura-Alubomulla at a joint project day',
    width: 1800,
    height: 1350,
  },

  contact: {
    email: 'leopanaduraalubomulla@gmail.com',
    address: 'Panadura, Kalutara District, Sri Lanka',
  },

  socials: {
    facebook: 'https://www.facebook.com/leopanaduraalubomulla',
    instagram: 'https://www.instagram.com/leopanaduraalubomulla',
    email: 'leopanaduraalubomulla@gmail.com',
  },

  siteUrl: 'https://panadura-alubomulla.leo306d2.org',

  stats: [
    { id: 'years', value: 12, label: 'Years of service' },
    { id: 'members', value: 58, label: 'Members across both towns' },
    { id: 'projects', value: 96, label: 'Projects run' },
    { id: 'people', value: 8300, suffix: '+', label: 'People reached' },
  ],

  about: {
    story: [
      'Panadura faces the sea. Alubomulla, twelve kilometres inland, faces a paddy field. When the club was chartered in 2013 as a joint venture between the two, most people expected it to split within a couple of years.',
      'It nearly did. The first three years were run almost entirely out of Panadura, and the Alubomulla members drifted off because everything happened somewhere they had to get a bus to.',
      'What fixed it was boring and structural: every project now has a lead in each town, meetings alternate, and no project is approved unless it can be run from either end. It is more work. It is also the reason the club still exists.',
      'The upside turned out to be real. Coastal problems and inland problems are different problems, and a club that works in both has twice the range and twice the places to test something that worked.',
    ],
    mission:
      'To serve Panadura and Alubomulla equally, with every project led from both towns rather than run out of one.',
    vision:
      'A club where a member from either town would recognise the year as theirs.',
    values: [
      {
        title: 'Two leads, always',
        description:
          'Every project has a lead in Panadura and a lead in Alubomulla. One lead means one town, and one town means the other one leaves.',
      },
      {
        title: 'Alternate everything',
        description:
          'Meetings, launches, AGMs. Whoever travelled last time does not travel this time.',
      },
      {
        title: 'Test it, then move it',
        description:
          'Something that works on the coast gets tried inland, and the other way round. Two towns is two laboratories.',
      },
      {
        title: 'Count both halves',
        description:
          'Reporting is split by town. A headline number hiding a lopsided year is not a number worth publishing.',
      },
    ],
  },
};

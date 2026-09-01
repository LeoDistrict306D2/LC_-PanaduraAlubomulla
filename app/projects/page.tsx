import type { Metadata } from 'next';
import { club } from '@/content/club';
import { projects } from '@/content/projects';
import { byDateDesc } from '@/lib/utils';
import { PageMasthead } from '@/components/PageMasthead';
import { SplitRecord } from '@/components/SplitRecord';

export const metadata: Metadata = {
  title: 'Project records',
  description: `Every project run by ${club.name}, in both towns.`,
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  const entries = byDateDesc(projects);

  return (
    <>
      <PageMasthead
        kicker={`${entries.length} records`}
        title="Everything, both ends."
        standfirst="Newest first. Each record is tagged with the town it ran in — or both, where it ran twice."
      />

      <div className="wrap band flex flex-col gap-16 md:gap-24">
        {entries.map((project, index) => (
          <SplitRecord key={project.id} project={project} index={index} />
        ))}
      </div>
    </>
  );
}

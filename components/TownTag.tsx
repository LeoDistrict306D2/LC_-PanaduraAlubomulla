import { cn } from '@/lib/utils';

/**
 * The town label. Reads a project's `location` and renders which of the two
 * towns it belongs to — or both.
 *
 * Colour-coded, but never colour-alone: the town name is always spelled out,
 * so the distinction survives greyscale printing and colour-blind readers.
 */
export function TownTag({ location, className }: { location?: string; className?: string }) {
  if (!location) return null;

  const hasPanadura = /panadura/i.test(location);
  const hasAlubomulla = /alubomulla/i.test(location);
  const both = hasPanadura && hasAlubomulla;

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 border px-2.5 py-1 text-xs font-semibold tracking-[0.1em] uppercase',
        both
          ? 'border-ink text-ink'
          : hasAlubomulla
            ? 'border-warm text-warm'
            : 'border-accent text-accent',
        className,
      )}
    >
      {both ? 'Both towns' : location}
    </span>
  );
}

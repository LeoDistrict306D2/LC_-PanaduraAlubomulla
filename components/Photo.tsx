import Image from 'next/image';
import type { ImageRef } from '@/lib/types';
import { cn } from '@/lib/utils';

const ratios = {
  wide: 'aspect-[2/1]',
  landscape: 'aspect-[4/3]',
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
} as const;

/**
 * Every photograph goes through here, so all of them carry intrinsic
 * dimensions and a fixed aspect box — no image can shift the layout as it
 * loads.
 *
 * Duotone is the DEFAULT here, not an option. Photographs on this site come
 * from two towns, two sets of photographers and two very different kinds of
 * light; forcing them all through the same two-colour treatment is what makes
 * them look like one club. Pass `natural` for the rare case where true colour
 * matters.
 */
export function Photo({
  image,
  ratio = 'landscape',
  priority = false,
  sizes = '100vw',
  natural = false,
  className,
}: {
  image: ImageRef;
  ratio?: keyof typeof ratios;
  priority?: boolean;
  sizes?: string;
  natural?: boolean;
  className?: string;
}) {
  return (
    <figure className={cn('m-0', className)}>
      <div
        className={cn(
          'relative overflow-hidden bg-panel',
          ratios[ratio],
          !natural && 'duotone',
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          className="object-cover"
        />
      </div>
      {image.caption ? (
        <figcaption className="mt-2.5 text-sm text-ink-faint">{image.caption}</figcaption>
      ) : null}
    </figure>
  );
}

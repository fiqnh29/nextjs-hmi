import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionProps {
  ctaHref?: string;
  ctaText?: string;
  description?: string;
  imageUrl: string;
  subtitle?: string;
  title: string;
}

export default function HeroSection({
  ctaHref = '#',
  ctaText,
  description,
  imageUrl,
  subtitle,
  title,
}: HeroSectionProps) {
  return (
    <section className="relative h-[82vh] w-full">
      <Image alt={title} className="object-cover" fill priority src={imageUrl} />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex h-full max-w-7xl items-center">
        <div className="container mx-auto max-w-3xl px-6 text-white">
          {subtitle && (
            <p className="mb-3 text-sm tracking-widest text-white/80 uppercase">{subtitle}</p>
          )}

          <h1 className="mb-4 text-4xl leading-tight font-bold md:text-5xl">{title}</h1>

          {description && <p className="mb-6 text-base text-white/90 md:text-lg">{description}</p>}

          {ctaText && (
            <Link
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-gray-100"
              href={ctaHref}
            >
              {ctaText}
              <span>→</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';

type InsightItem = {
  description?: string;
  href?: string;
  image: string;
  title: string;
};

type InsightsSectionProps = {
  items: InsightItem[];
  title: string;
  viewMoreUrl?: string;
};

export default function InsightsSection({ items, title, viewMoreUrl }: InsightsSectionProps) {
  return (
    <section className="bg-[#F3F8FF] px-6 py-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-2xl font-bold text-[#0A56C2] md:text-3xl">{title}</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <Link
              className="group relative overflow-hidden rounded-2xl"
              href={item.href ?? '#'}
              key={index}
            >
              <Image
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                height={500}
                src={item.image}
                width={800}
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-lg font-semibold md:text-xl">{item.title}</h3>

                {item.description && (
                  <p className="mt-2 text-sm text-white/90">{item.description}</p>
                )}
              </div>
            </Link>
          ))}
        </div>

        {viewMoreUrl && (
          <div className="mt-10 flex justify-center">
            <Link
              className="inline-flex items-center gap-2 rounded-full bg-[#0A56C2] px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
              href={viewMoreUrl}
            >
              View more →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

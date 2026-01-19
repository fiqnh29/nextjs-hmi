'use client';
import Image from 'next/image';
import { useState } from 'react';

import { useMediaQuery } from '@/hooks/useMediaQuery';

type Specialty = {
  description: string;
  imageUrl?: string;
  title: string;
};

const MOBILE_VISIBLE = 6;

type Props = {
  description?: string;
  specialties?: Specialty[];
  title?: string;
};

export default function MedicalSpecialties({
  description = 'We prioritise reducing healthcare hassles - from department transitions to staff knowing your name.',
  specialties = [],
  title = 'Medical Specialties',
}: Props) {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const [showMoreMobile, setShowMoreMobile] = useState(false);

  const visibleItems = isDesktop
    ? specialties
    : showMoreMobile
      ? specialties
      : specialties.slice(0, MOBILE_VISIBLE);

  if (!specialties.length) return null;

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-4 text-3xl font-bold text-[#0A56C2] md:text-4xl">{title}</h2>

        <p className="mb-12 max-w-2xl text-gray-600">{description}</p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item) => (
            <div className="flex gap-4 rounded-xl border bg-white p-6 transition" key={item.title}>
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
                  {item.imageUrl && (
                    <Image alt={item.title} height={28} src={item.imageUrl} width={28} />
                  )}
                </div>
              </div>

              <div>
                <h3 className="mb-1 font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {!isDesktop && (
          <div className="mt-10 flex justify-center">
            {!showMoreMobile ? (
              <button
                className="rounded-full border border-[#0A56C2] px-6 py-3 text-sm font-medium text-[#0A56C2] transition hover:bg-[#0A56C2] hover:text-white"
                onClick={() => setShowMoreMobile(true)}
              >
                Show more ({MOBILE_VISIBLE} of {specialties.length} results)
              </button>
            ) : (
              <button
                className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                onClick={() => setShowMoreMobile(false)}
              >
                Show less
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

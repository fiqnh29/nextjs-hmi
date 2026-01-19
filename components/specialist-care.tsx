'use client';

import { ArrowLeft01Icon, ArrowRight02Icon, ArrowRightIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

type SpecialistCareProps = {
  cta?: {
    label: string;
    link?: string;
  };
  description?: string;
  eyebrow?: string;
  specialties: SpecialistItem[];
  title: string;
};

type SpecialistItem = {
  cta?: {
    label: string;
    link?: string;
  };
  description: string;
  image: string;
  title: string;
};

const SpecialistCare = ({
  cta,
  description,
  eyebrow = 'Our Specialists',
  specialties,
  title,
}: SpecialistCareProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      behavior: 'smooth',
      left: -300,
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      behavior: 'smooth',
      left: 300,
    });
  };

  return (
    <section className="bg-slate-50 px-6 py-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="md:w-1/2">
            <span className="bg-[linear-gradient(101deg,#0957cb_6.5%,#00d494_91.65%)] bg-clip-text text-xs font-bold tracking-widest text-blue-600 text-transparent uppercase">
              {eyebrow}
            </span>

            <h2 className="my-4 max-w-96 text-3xl font-bold text-[#0A56C2] md:text-4xl">{title}</h2>
          </div>

          <div className="md:w-1/3">
            <p className="mb-6 text-gray-600">{description}</p>
            {cta?.link && (
              <Link
                className="flex items-center gap-2 font-bold text-[#0A56C2] transition-all hover:gap-4"
                href={cta.link}
              >
                {cta?.label}
                <HugeiconsIcon icon={ArrowRight02Icon} size={18} />
              </Link>
            )}
          </div>
        </div>

        <div className="relative">
          <button
            className="absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg lg:hidden"
            onClick={scrollLeft}
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} size={24} />
          </button>

          <button
            className="absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg lg:hidden"
            onClick={scrollRight}
          >
            <HugeiconsIcon icon={ArrowRightIcon} size={24} />
          </button>

          <div
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 md:grid md:grid-cols-3 md:overflow-visible"
            ref={sliderRef}
          >
            {specialties.map((item, index) => (
              <div className="w-[85%] shrink-0 md:w-full lg:min-w-0" key={index}>
                <div className="mb-6 overflow-hidden rounded-2xl">
                  <Image
                    alt={item.title}
                    className="h-52 w-full object-cover transition-transform duration-500 hover:scale-105 md:h-100"
                    height={400}
                    src={item.image}
                    width={400}
                  />
                </div>

                {item.cta?.link && (
                  <Link
                    className="mb-3 flex items-center gap-2 text-xl font-bold text-[#0A56C2] hover:underline"
                    href={item.cta.link}
                  >
                    {item.title}
                    <HugeiconsIcon icon={ArrowRight02Icon} size={20} />
                  </Link>
                )}

                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialistCare;

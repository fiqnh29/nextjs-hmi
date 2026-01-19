'use client';

import { Mail01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

type CorporateEnquiriesProps = {
  email: string;
  title?: string;
};

export default function CorporateEnquiries({
  email,
  title = 'For corporate enquiries',
}: CorporateEnquiriesProps) {
  return (
    <section className="bg-[#F3F8FF] px-6 pb-20 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl bg-[linear-gradient(101deg,#0957cb_6.5%,#00d494_91.65%)] p-8 text-white">
          <h3 className="mb-4 text-xl font-bold md:text-2xl">{title}</h3>

          <div className="flex items-center gap-3 text-sm md:text-base">
            <HugeiconsIcon icon={Mail01Icon} size={20} />
            <a className="font-medium underline-offset-4 hover:underline" href={`mailto:${email}`}>
              {email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

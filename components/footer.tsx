'use client';

import {
  ArrowRight01Icon,
  GlobalIcon,
  Linkedin01Icon,
  Location01Icon,
  Mail01Icon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Footer = () => {
  const footerSections = [
    {
      links: [
        'Find a Doctor',
        'Find a Clinic',
        'Medical Travel',
        'Corporate Healthcare',
        'Healthcare Education',
        'HMI One',
      ],
      title: 'Explore HMI',
    },
    {
      links: [
        'Health Screening',
        'Medical Specialties',
        'Day Surgery',
        'GP Services',
        'Healthier SG',
        'Radiology',
        'Vaccination',
        'Home Care Services',
        'Aesthetics Treatments',
      ],
      title: 'Our Services',
    },
    {
      extra: {
        links: ['Latest Events', 'In the News', 'Health Tips'],
        title: 'News & Resources',
      },
      links: [
        'About HMI Medical',
        'Mission & Values',
        'Model',
        'Governance',
        'Milestones',
        'Careers',
      ],
      title: 'About Us',
    },
  ];

  return (
    <footer className="bg-[#1e4b82] px-6 py-12 font-sans text-white md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link className="text-xl font-bold text-[#0A56C2]" href="/">
              <Image alt="logo" className="w-24" height={50} src="/logo-white.svg" width={50} />
            </Link>

            <div className="mt-12 hidden flex-col gap-6 md:flex">
              <hr className="w-full border-white/10" />
              <p className="text-sm text-blue-100">
                Download Healthcare app <br /> HMI One
              </p>
              <div className="flex flex-col gap-4">
                <Image
                  alt="App Store"
                  className="w-28"
                  height={100}
                  src="/images/appstore.png"
                  width={100}
                />
                <Image
                  alt="Google Play"
                  className="w-28"
                  height={100}
                  src="/images/googleplay.png"
                  width={100}
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="md:hidden">
              <div className="mt-8 flex flex-col md:hidden">
                <a className="py-2 text-lg font-semibold hover:text-blue-200" href="#">
                  Find a Doctor
                </a>
                <a className="py-2 text-lg font-semibold hover:text-blue-200" href="#">
                  Find a Clinic
                </a>
              </div>
              <Accordion className="w-full border-none">
                {footerSections.map((section, idx) => (
                  <React.Fragment key={idx}>
                    <AccordionItem className="border-none" value={section.title}>
                      <AccordionTrigger className="px-0 py-2 hover:no-underline">
                        <div className="text-lg font-semibold hover:text-blue-200">
                          {section.title}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="flex flex-col gap-3 pt-2 pb-4">
                          {section.links.map((link) => (
                            <li className="cursor-pointer text-lg hover:text-blue-300" key={link}>
                              {link}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    {section.extra && (
                      <AccordionItem className="border-none" value={section.extra.title}>
                        <AccordionTrigger className="px-0 py-2 hover:no-underline">
                          <div className="text-lg font-semibold hover:text-blue-200">
                            {section.extra.title}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="flex flex-col gap-3 pt-2 pb-4">
                            {section.extra.links.map((link) => (
                              <li className="cursor-pointer text-lg hover:text-blue-300" key={link}>
                                {link}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    )}
                  </React.Fragment>
                ))}
              </Accordion>
            </div>

            <div className="hidden gap-8 md:grid md:grid-cols-3">
              {footerSections.map((section, idx) => (
                <div className="flex flex-col gap-8" key={idx}>
                  <div>
                    <h4 className="mb-4 text-sm font-semibold tracking-wider text-blue-200 uppercase">
                      {section.title}
                    </h4>
                    <ul className="flex flex-col gap-3 text-sm">
                      {section.links.map((link) => (
                        <li className="cursor-pointer transition hover:text-blue-300" key={link}>
                          {link}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {section.extra && (
                    <div>
                      <h4 className="mb-4 text-sm font-semibold tracking-wider text-blue-200 uppercase">
                        {section.extra.title}
                      </h4>
                      <ul className="flex flex-col gap-3 text-sm font-semibold">
                        {section.extra.links.map((link) => (
                          <li className="cursor-pointer transition hover:text-blue-300" key={link}>
                            {link}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4 className="mb-4 leading-tight font-bold uppercase">
              Health Management International Pte Ltd
            </h4>
            <div className="flex flex-col gap-5 text-sm">
              <div className="flex gap-3">
                <HugeiconsIcon className="shrink-0 text-blue-200" icon={Location01Icon} size={20} />
                <p className="text-blue-50">
                  320 Serangoon Road, #18-08 Centrium Square, Singapore 218108
                </p>
              </div>
              <div className="flex items-center gap-3">
                <HugeiconsIcon className="shrink-0 text-blue-200" icon={Mail01Icon} size={20} />
                <p className="text-blue-50">askus@hmimedical.com</p>
              </div>
              <button className="group mt-2 flex w-full items-center justify-center gap-2 rounded-full border border-white px-4 py-2.5 transition-all hover:bg-white hover:text-[#1e4b82] md:w-fit">
                Contact us{' '}
                <HugeiconsIcon
                  className="transition-transform group-hover:translate-x-1"
                  icon={ArrowRight01Icon}
                  size={18}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-6 md:hidden">
          <hr className="w-full border-white/10" />
          <p className="text-sm text-blue-100">Download HMI One</p>
          <div className="flex gap-4">
            <Image
              alt="App Store"
              className="w-32"
              height={50}
              src="/images/appstore.png"
              width={50}
            />
            <Image
              alt="Google Play"
              className="w-32"
              height={50}
              src="/images/googleplay.png"
              width={50}
            />
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-8 border-t border-white/10 pt-8 lg:flex-row">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-sm text-blue-100">
            <a className="flex items-center gap-2 transition hover:text-white" href="#">
              <HugeiconsIcon icon={Linkedin01Icon} size={18} /> Linkedin
            </a>
            <span className="hidden opacity-30 md:inline">•</span>
            <a className="transition hover:text-white" href="#">
              Privacy
            </a>
            <span className="hidden opacity-30 md:inline">•</span>
            <a className="transition hover:text-white" href="#">
              Terms
            </a>
            <span className="hidden opacity-30 md:inline">•</span>
            <button className="flex items-center gap-2 transition hover:text-white">
              <HugeiconsIcon icon={GlobalIcon} size={18} /> English
            </button>
          </div>
          <p className="text-xs text-blue-200/70 md:text-sm">
            Copyright © 2025 HMI Medical. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

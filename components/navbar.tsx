'use client';

import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  ArrowRight02Icon,
  Menu01Icon,
  MultiplicationSignIcon,
  Search01Icon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const SPECIALTIES = [
  'Bariatric Surgery',
  'Cardiology',
  'Colorectal',
  'Dermatology',
  'Ear, Nose & Throat',
  'Gastroenterology',
  'Gynaecology & Obstetrics',
  'Family Medicine',
  'Internal Medicine',
  'Orthopaedic',
  'Paediatrics',
  'Renal Medicine',
  'Respiratory & Intensive Care Medicine',
  'Sleep Medicine',
  'Urology & Male Subfertility',
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [level, setLevel] = useState<'main' | 'specialties'>('main');

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="bg-[#0A56C2] px-4 py-2 text-center text-sm text-white">
        Discover our range of tailored health screening packages
      </div>

      <div className="border-b">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
          <Link className="text-xl font-bold text-[#0A56C2]" href="/">
            <Image alt="logo" className="w-24" height={50} src="/logo.svg" width={50} />
          </Link>
          <div className="flex items-center gap-8">
            <nav className="hidden items-center gap-6 text-sm text-gray-700 lg:flex">
              <Link className="hover:text-[#0A56C2]" href="#find-a-doctor">
                Find a Doctor
              </Link>
              <Link className="hover:text-[#0A56C2]" href="#find-a-clinic">
                Find a Clinic
              </Link>
              <Link className="hover:text-[#0A56C2]" href="#our-services">
                Our Services
              </Link>

              <div className="group">
                <button className="hover:text-[#0A56C2]">Speciality Care</button>

                <div className="invisible absolute top-full right-0 left-0 z-50 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="bg-white shadow-xl">
                    <div className="mx-auto max-w-7xl">
                      <div className="flex gap-10">
                        <div className="px-8 py-10">
                          <div className="mb-6">
                            <span className="bg-[linear-gradient(101deg,#0957cb_6.5%,#00d494_91.65%)] bg-clip-text text-xs font-bold tracking-widest text-blue-600 text-transparent uppercase">
                              Specialty Care
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-x-10 gap-y-4">
                            {SPECIALTIES.map((item) => (
                              <Link
                                className="text-sm text-gray-700 hover:text-[#0A56C2]"
                                href="#"
                                key={item}
                              >
                                {item}
                              </Link>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col items-center gap-6 bg-slate-50 p-10">
                          <Image
                            alt="Doctor"
                            className="w-full rounded-xl"
                            height={140}
                            src="/images/nav-specialties.png"
                            width={140}
                          />

                          <div>
                            <p className="font-semibold text-[#0A56C2]">Medical Specialties</p>
                            <p className="mt-1 max-w-md text-sm text-gray-600">
                              Choosing the right specialist depends on your condition. Begin your
                              journey with us.
                            </p>
                            <Link
                              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#0A56C2]"
                              href="#"
                            >
                              See all specialties{' '}
                              <HugeiconsIcon className="h-5 w-5" icon={ArrowRight02Icon} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link className="hover:text-[#0A56C2]" href="#health-screening">
                Health Screening
              </Link>
              <Link className="hover:text-[#0A56C2]" href="#medical-travel">
                Medical Travel
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link
              className="hidden rounded-full bg-[#0A56C2] px-6 py-2 text-sm font-medium text-white transition hover:bg-blue-700 lg:inline-flex"
              href="#"
            >
              Make Appointment
            </Link>

            <button className="lg:hidden">
              <HugeiconsIcon className="h-6 w-6 text-gray-700" icon={Search01Icon} />
            </button>

            <button className="lg:hidden" onClick={() => setOpen(true)}>
              <HugeiconsIcon className="h-6 w-6 text-gray-700" icon={Menu01Icon} />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <>
          {level === 'main' && (
            <div className="fixed inset-0 z-50 bg-white">
              <div className="flex items-center justify-between border-b px-4 py-4">
                <Link className="text-xl font-bold text-[#0A56C2]" href="/">
                  <Image alt="logo" className="w-24" height={50} src="/logo.svg" width={50} />
                </Link>
                <button onClick={() => setOpen(false)}>
                  <HugeiconsIcon className="h-6 w-6" icon={MultiplicationSignIcon} />
                </button>
              </div>
              <div className="flex flex-col">
                <button className="flex w-full px-4 py-2 hover:bg-[#0A56C2] hover:text-white">
                  Make Appointment
                </button>

                <button
                  className="flex w-full items-center justify-between bg-[#0A56C2] px-4 py-2 text-white"
                  onClick={() => setLevel('specialties')}
                >
                  <div>Specialities & Treatments</div>
                  <div>
                    <HugeiconsIcon className="h-5 w-5" icon={ArrowRight01Icon} />
                  </div>
                </button>

                <button className="flex w-full px-4 py-2 hover:bg-[#0A56C2] hover:text-white">
                  Find a Doctor
                </button>
                <button className="flex w-full px-4 py-2 hover:bg-[#0A56C2] hover:text-white">
                  Find a Clinic
                </button>
                <button className="flex w-full px-4 py-2 hover:bg-[#0A56C2] hover:text-white">
                  Health Screening
                </button>
                <button className="flex w-full px-4 py-2 hover:bg-[#0A56C2] hover:text-white">
                  Medical Travel
                </button>
              </div>
            </div>
          )}

          {level === 'specialties' && (
            <div className="fixed inset-0 z-50 overflow-y-auto bg-white">
              <div className="bg-background sticky top-0 flex items-center justify-between border-b px-4 py-4">
                <div className="flex items-center gap-4">
                  <button onClick={() => setLevel('main')}>
                    <HugeiconsIcon className="h-6 w-6" icon={ArrowLeft01Icon} />
                  </button>
                  <div>Specialities & Treatments</div>
                </div>
                <button onClick={() => setOpen(false)}>
                  <HugeiconsIcon className="h-6 w-6" icon={MultiplicationSignIcon} />
                </button>
              </div>
              <div className="border-b px-4">
                <Image
                  alt="logo"
                  className="h-48 w-full"
                  height={500}
                  src="/images/mobile-nav-specialties.png"
                  width={500}
                />
                <Link
                  className="flex items-center gap-2 py-4 text-sm font-semibold"
                  href="https://www.hmimedical.com/"
                >
                  See all specialties <HugeiconsIcon className="h-5 w-5" icon={ArrowRight02Icon} />
                </Link>
              </div>
              <div className="p-4">
                <p className="mb-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">
                  Specialities & Treatments
                </p>

                <div className="space-y-4">
                  {SPECIALTIES.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </header>
  );
}

import { Mail01Icon, MapPinIcon, TelephoneIcon, WhatsappIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

interface FindUsSectionProps {
  address: string;
  emails?: {
    feedback?: string;
    general?: string;
  };
  eyebrow?: string;
  mapEmbedUrl: string;
  phone?: string;
  satelliteClinic?: {
    address?: string;
    title?: string;
  };
  title: string;
  whatsapp?: string;
}

export default function FindUsSection({
  address,
  emails,
  eyebrow = 'Find Us',
  mapEmbedUrl,
  phone,
  satelliteClinic,
  title,
  whatsapp,
}: FindUsSectionProps) {
  return (
    <section className="w-full bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-[#0A84C6] px-6 py-12 text-white md:px-12 lg:px-16">
          <p className="mb-4 text-sm font-semibold tracking-widest uppercase">{eyebrow}</p>

          <h2 className="mb-8 text-3xl font-bold md:text-4xl">{title}</h2>

          <div className="space-y-4 text-sm md:text-base">
            <div className="flex gap-3">
              <HugeiconsIcon className="mt-1 h-5 w-5 shrink-0" icon={MapPinIcon} />
              <p className="whitespace-pre-line">{address}</p>
            </div>

            {phone && (
              <div className="flex gap-3">
                <HugeiconsIcon className="h-5 w-5 shrink-0" icon={TelephoneIcon} />
                <p>{phone}</p>
              </div>
            )}

            {whatsapp && (
              <div className="flex gap-3">
                <HugeiconsIcon className="h-5 w-5 shrink-0" icon={WhatsappIcon} />
                <p>{whatsapp}</p>
              </div>
            )}

            {emails?.general && (
              <p>
                <span className="font-semibold">General enquiries:</span> {emails.general}
              </p>
            )}

            {emails?.feedback && (
              <p>
                <span className="font-semibold">Feedback:</span> {emails.feedback}
              </p>
            )}
          </div>

          {satelliteClinic?.address && (
            <div className="mt-10">
              <h3 className="mb-3 text-xl font-semibold">{satelliteClinic.title}</h3>
              <div className="flex gap-3 text-sm md:text-base">
                <HugeiconsIcon className="mt-1 h-5 w-5 shrink-0" icon={Mail01Icon} />
                <p className="whitespace-pre-line">{satelliteClinic.address}</p>
              </div>
            </div>
          )}
        </div>

        <div className="relative h-100 w-full lg:h-auto">
          <iframe
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={mapEmbedUrl}
            title={`${title} Location`}
          />
        </div>
      </div>
    </section>
  );
}

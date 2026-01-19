import CorporateEnquiries from '@/components/corporate-enquiries';
import FindUsSection from '@/components/find-us-section';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import InsightsSection from '@/components/insights-section';
import MedicalSpecialties from '@/components/medical-specialties';
import Navbar from '@/components/navbar';
import SpecialistCare from '@/components/specialist-care';
import { getFindUsSection } from '@/lib/getFinUsSection';
import { getHeroSection } from '@/lib/getHeroSection';
import { getInsightsSection } from '@/lib/getInsightsSection';
import { getMedicalSpecialties } from '@/lib/getMedicalSpecialties';
import { getSpecialistCare } from '@/lib/getSpecialistCare';

export default async function Page() {
  const [hero, findUs, medicalSpecialties, specialistCare, insights] = await Promise.all([
    getHeroSection(),
    getFindUsSection(),
    getMedicalSpecialties(),
    getSpecialistCare(),
    getInsightsSection(),
  ]);

  return (
    <>
      <Navbar />

      {hero && (
        <HeroSection
          ctaHref={hero.cta?.link}
          ctaText={hero.cta?.label}
          description={hero.description}
          imageUrl={hero.backgroundImageUrl}
          subtitle={hero.subtitle}
          title={hero.title}
        />
      )}

      {findUs && (
        <FindUsSection
          address={findUs.address}
          emails={findUs.emails}
          eyebrow={findUs.eyebrow}
          mapEmbedUrl={findUs.mapEmbedUrl}
          phone={findUs.phone}
          satelliteClinic={findUs.satelliteClinic}
          title={findUs.title}
          whatsapp={findUs.whatsapp}
        />
      )}

      <MedicalSpecialties
        description={medicalSpecialties.description}
        specialties={medicalSpecialties.specialties}
        title={medicalSpecialties.title}
      />

      {specialistCare && (
        <SpecialistCare
          cta={specialistCare.cta}
          description={specialistCare.description}
          eyebrow={specialistCare.eyebrow}
          specialties={specialistCare.specialties}
          title={specialistCare.title}
        />
      )}

      {insights && (
        <InsightsSection
          items={insights.items}
          title={insights.title}
          viewMoreUrl={insights.viewMoreUrl}
        />
      )}

      <CorporateEnquiries email="askus@hmimedical.com.sg" title="For corporate enquiries" />

      <Footer />
    </>
  );
}

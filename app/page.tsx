import WelcomeSection from '@/components/custom/welcome-section';
import HeroBanner from '@/components/custom/hero-banner';
import HeroFooter from '@/components/custom/hero-footer';

import { HeroBannerData } from '@/lib/data';
export default function LandingPage() {
  return (
    <main className="flex flex-col items-center scroll-smooth">
      <WelcomeSection />
      {HeroBannerData.map((banner, i) => (
        <HeroBanner key={i} {...banner} />
      ))}
      <HeroFooter />
    </main>
  );
}

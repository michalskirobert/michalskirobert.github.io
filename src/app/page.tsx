import { IntroSection } from "@src/components/intro-section";
import { OfferSection } from "@src/components/offer-section";
import { SkillsSection } from "@src/components/skills-section";

export default function Home() {
  return (
    <>
      <IntroSection />
      <SkillsSection />
      <OfferSection />
    </>
  );
}
